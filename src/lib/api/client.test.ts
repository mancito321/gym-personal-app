import { describe, expect, it } from "vitest";
import { ApiClientError, parseApiEnvelope } from "./client";

describe("parseApiEnvelope", () => {
  it("returns data from a success envelope", () => {
    const result = parseApiEnvelope<{ id: string }>(200, {
      ok: true,
      data: { id: "abc" },
      meta: { source: "dummy" },
    });

    expect(result.data).toEqual({ id: "abc" });
    expect(result.meta).toEqual({ source: "dummy" });
  });

  it("throws ApiClientError for error envelopes", () => {
    expect(() =>
      parseApiEnvelope(404, {
        ok: false,
        error: { code: "NOT_FOUND", message: "Routine not found" },
      }),
    ).toThrow(ApiClientError);

    try {
      parseApiEnvelope(404, {
        ok: false,
        error: { code: "NOT_FOUND", message: "Routine not found" },
      });
    } catch (error) {
      expect(error).toBeInstanceOf(ApiClientError);
      const clientError = error as ApiClientError;
      expect(clientError.status).toBe(404);
      expect(clientError.code).toBe("NOT_FOUND");
      expect(clientError.message).toBe("Routine not found");
    }
  });

  it("handles non-envelope 429 rate limit responses", () => {
    expect(() =>
      parseApiEnvelope(429, { error: "Rate limit exceeded" }),
    ).toThrow(ApiClientError);

    try {
      parseApiEnvelope(429, { error: "Rate limit exceeded" });
    } catch (error) {
      const clientError = error as ApiClientError;
      expect(clientError.status).toBe(429);
      expect(clientError.code).toBe("RATE_LIMITED");
      expect(clientError.message).toBe("Rate limit exceeded");
    }
  });

  it("rejects unexpected shapes", () => {
    expect(() => parseApiEnvelope(200, { hello: "world" })).toThrow(
      ApiClientError,
    );
  });
});
