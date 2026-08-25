"use client";

import { useCallback, useRef } from "react";
import { getExercise } from "@/lib/api/routines";
import type { ExerciseResponse } from "@/lib/schemas/exercise.schema";

type CacheEntry = {
  promise?: Promise<ExerciseResponse>;
  data?: ExerciseResponse;
  error?: unknown;
};

/** Prefetch exercise details on hover; reuse in-flight / cached results. */
export function useExercisePrefetch() {
  const cacheRef = useRef(new Map<string, CacheEntry>());

  const prefetch = useCallback((name: string) => {
    const cache = cacheRef.current;
    const existing = cache.get(name);
    if (existing?.data || existing?.promise) return;

    const promise = getExercise(name)
      .then((result) => {
        cache.set(name, { data: result.data });
        return result.data;
      })
      .catch((error: unknown) => {
        cache.set(name, { error });
        throw error;
      });

    cache.set(name, { promise });
  }, []);

  const load = useCallback(async (name: string): Promise<ExerciseResponse> => {
    const cache = cacheRef.current;
    const existing = cache.get(name);
    if (existing?.data) return existing.data;
    if (existing?.promise) return existing.promise;

    const promise = getExercise(name).then((result) => {
      cache.set(name, { data: result.data });
      return result.data;
    });
    cache.set(name, { promise });
    return promise;
  }, []);

  const getCached = useCallback((name: string): ExerciseResponse | undefined => {
    return cacheRef.current.get(name)?.data;
  }, []);

  return { prefetch, load, getCached };
}
