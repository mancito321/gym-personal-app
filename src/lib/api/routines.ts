import type { RoutineDetail, RoutineListItem } from "@/lib/schemas/routine.schema";
import type { ExerciseResponse } from "@/lib/schemas/exercise.schema";
import { ApiClientError, fetchJson, type FetchJsonOptions } from "./client";

function serverBaseUrl(): string | undefined {
  if (typeof window !== "undefined") return undefined;
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL ?? process.env.VERCEL_URL;
  if (fromEnv) {
    return fromEnv.startsWith("http") ? fromEnv : `https://${fromEnv}`;
  }
  return "http://localhost:3000";
}

function withDefaults(options: FetchJsonOptions = {}): FetchJsonOptions {
  return {
    ...options,
    baseUrl: options.baseUrl ?? serverBaseUrl(),
    init: {
      cache: "no-store",
      ...options.init,
    },
  };
}

/** Server-preferred: call service layer; falls back to HTTP fetch. */
export async function getRoutines(options?: FetchJsonOptions) {
  if (typeof window === "undefined" && !options?.baseUrl) {
    const { listRoutinesService } = await import(
      "@/lib/services/routine.service"
    );
    return listRoutinesService();
  }

  return fetchJson<RoutineListItem[]>(
    "/api/routines",
    withDefaults(options),
  );
}

export async function getRoutine(idOrSlug: string, options?: FetchJsonOptions) {
  if (typeof window === "undefined" && !options?.baseUrl) {
    const { getRoutineService } = await import(
      "@/lib/services/routine.service"
    );
    const result = await getRoutineService(idOrSlug);
    if (!result) {
      throw new ApiClientError(404, "NOT_FOUND", "Routine not found");
    }
    return result;
  }

  return fetchJson<RoutineDetail>(
    `/api/routines/${encodeURIComponent(idOrSlug)}`,
    withDefaults(options),
  );
}

export async function getExercise(name: string, options?: FetchJsonOptions) {
  if (typeof window === "undefined" && !options?.baseUrl) {
    const { getExerciseService } = await import(
      "@/lib/services/exercise.service"
    );
    const result = await getExerciseService(name);
    if (!result) {
      throw new ApiClientError(404, "NOT_FOUND", "Exercise not found");
    }
    return result;
  }

  return fetchJson<ExerciseResponse>(
    `/api/exercises/${encodeURIComponent(name)}`,
    withDefaults(options),
  );
}

export function exerciseGoogleSearchUrl(name: string): string {
  const query = name.replace(/-/g, " ");
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}
