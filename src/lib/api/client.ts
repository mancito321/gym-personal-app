import type { ApiError, ApiMeta } from "@/lib/schemas/api.schema";

export class ApiClientError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.code = code;
  }
}

type OkEnvelope<T> = {
  ok: true;
  data: T;
  meta?: ApiMeta;
};

type ErrEnvelope = {
  ok: false;
  error: ApiError;
};

type Envelope<T> = OkEnvelope<T> | ErrEnvelope;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/** Parse API JSON into data or throw ApiClientError. Handles envelope + 429 shape. */
export function parseApiEnvelope<T>(
  status: number,
  body: unknown,
): { data: T; meta?: ApiMeta } {
  if (status === 429) {
    const message =
      isRecord(body) && typeof body.error === "string"
        ? body.error
        : "Rate limit exceeded";
    throw new ApiClientError(429, "RATE_LIMITED", message);
  }

  if (!isRecord(body) || typeof body.ok !== "boolean") {
    throw new ApiClientError(
      status,
      "INVALID_RESPONSE",
      "Unexpected API response shape",
    );
  }

  if (body.ok === true) {
    return {
      data: body.data as T,
      meta: isRecord(body.meta) ? (body.meta as ApiMeta) : undefined,
    };
  }

  const error = body.error;
  if (
    !isRecord(error) ||
    typeof error.code !== "string" ||
    typeof error.message !== "string"
  ) {
    throw new ApiClientError(status, "UNKNOWN", "Request failed");
  }

  throw new ApiClientError(status, error.code, error.message);
}

export type FetchJsonOptions = {
  baseUrl?: string;
  init?: RequestInit;
};

function resolveUrl(path: string, baseUrl?: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (baseUrl) return `${baseUrl.replace(/\/$/, "")}${path}`;
  return path;
}

export async function fetchJson<T>(
  path: string,
  options: FetchJsonOptions = {},
): Promise<{ data: T; meta?: ApiMeta }> {
  const url = resolveUrl(path, options.baseUrl);
  const response = await fetch(url, {
    ...options.init,
    headers: {
      Accept: "application/json",
      ...options.init?.headers,
    },
  });

  let body: unknown;
  try {
    body = await response.json();
  } catch {
    throw new ApiClientError(
      response.status,
      "INVALID_RESPONSE",
      "Response was not JSON",
    );
  }

  return parseApiEnvelope<T>(response.status, body);
}

/** @internal helper for tests — type guard shape */
export type { Envelope };
