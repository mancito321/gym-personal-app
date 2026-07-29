import type { WithId, Document } from "mongodb";
import { getDb } from "@/lib/db/client";
import { EXERCISES_COLLECTION } from "@/lib/db/collections";
import {
  exerciseDocumentSchema,
  type ExerciseDocument,
} from "@/lib/schemas/exercise.schema";

export type ExerciseRecord = WithId<Document> & ExerciseDocument;

function exercises() {
  return getDb().then((db) => db.collection(EXERCISES_COLLECTION));
}

export async function findExerciseByName(
  name: string,
): Promise<ExerciseRecord | null> {
  const collection = await exercises();
  const doc = await collection.findOne({ name });
  if (!doc) {
    return null;
  }
  return exerciseDocumentSchema.parse(doc) as ExerciseRecord;
}

export async function findAllExercises(): Promise<ExerciseRecord[]> {
  const collection = await exercises();
  const docs = await collection.find({}).toArray();
  return docs.map((doc) =>
    exerciseDocumentSchema.parse(doc),
  ) as ExerciseRecord[];
}

export async function insertExercise(
  exercise: Omit<ExerciseDocument, "_id">,
): Promise<string> {
  const parsed = exerciseDocumentSchema.omit({ _id: true }).parse(exercise);
  const collection = await exercises();
  const result = await collection.insertOne(parsed);
  return result.insertedId.toString();
}

export async function updateExercise(
  name: string,
  exercise: Omit<ExerciseDocument, "_id" | "name">,
): Promise<boolean> {
  const parsed = exerciseDocumentSchema
    .omit({ _id: true, name: true })
    .parse(exercise);
  const collection = await exercises();
  const result = await collection.updateOne(
    { name },
    { $set: { ...parsed, name } },
  );
  return result.matchedCount > 0;
}

export async function ensureExerciseIndexes(): Promise<void> {
  const collection = await exercises();
  await collection.createIndex({ name: 1 }, { unique: true });
}

export async function countExercises(): Promise<number> {
  const collection = await exercises();
  return collection.countDocuments();
}
