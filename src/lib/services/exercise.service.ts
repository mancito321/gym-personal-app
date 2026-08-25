import type { ApiMeta } from "@/lib/schemas/api.schema";
import {
  toExerciseResponse,
  type ExerciseResponse,
} from "@/lib/schemas/exercise.schema";
import { dummyExercises } from "@/lib/fixtures/gym.fixtures";
import { findExerciseByName } from "@/lib/repositories/exercise.repository";
import { validateMongoConnection } from "@/lib/db/client";

export type ExerciseResult = {
  data: ExerciseResponse;
  meta: ApiMeta;
};

function dummyByName(name: string): ExerciseResponse | null {
  const doc = dummyExercises.find((item) => item.name === name);
  if (!doc) {
    return null;
  }
  return toExerciseResponse(doc);
}

export async function getExerciseService(
  name: string,
): Promise<ExerciseResult | null> {
  const connected = await validateMongoConnection();
  if (!connected) {
    console.warn("[exercises] using dummy fixtures: mongo unavailable");
    const data = dummyByName(name);
    return data ? { data, meta: { source: "dummy" } } : null;
  }

  try {
    const exercise = await findExerciseByName(name);
    if (exercise) {
      return {
        data: toExerciseResponse(exercise),
        meta: { source: "database" },
      };
    }
  } catch (error) {
    console.error("[exercises] lookup failed; trying dummy fixtures", error);
  }

  const data = dummyByName(name);
  return data ? { data, meta: { source: "dummy" } } : null;
}
