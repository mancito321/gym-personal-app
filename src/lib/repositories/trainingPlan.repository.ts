import { ObjectId, type WithId, type Document } from "mongodb";
import { getDb } from "@/lib/db/client";
import { TRAINING_PLANS_COLLECTION } from "@/lib/db/collections";
import {
  trainingPlanDocumentSchema,
  type TrainingPlanDocument,
} from "@/lib/schemas/routine.schema";

export type TrainingPlanRecord = WithId<Document> & TrainingPlanDocument;

function plans() {
  return getDb().then((db) => db.collection(TRAINING_PLANS_COLLECTION));
}

export async function findAllPlans(): Promise<TrainingPlanRecord[]> {
  const collection = await plans();
  const docs = await collection.find({}).toArray();
  return docs.map((doc) =>
    trainingPlanDocumentSchema.parse(doc),
  ) as TrainingPlanRecord[];
}

export async function findPlanByIdOrSlug(
  idOrSlug: string,
): Promise<TrainingPlanRecord | null> {
  const collection = await plans();

  if (ObjectId.isValid(idOrSlug) && idOrSlug.length === 24) {
    const byId = await collection.findOne({ _id: new ObjectId(idOrSlug) });
    if (byId) {
      return trainingPlanDocumentSchema.parse(byId) as TrainingPlanRecord;
    }
  }

  const bySlug = await collection.findOne({ slug: idOrSlug });
  if (!bySlug) {
    return null;
  }
  return trainingPlanDocumentSchema.parse(bySlug) as TrainingPlanRecord;
}

export async function insertPlan(
  plan: Omit<TrainingPlanDocument, "_id">,
): Promise<string> {
  const parsed = trainingPlanDocumentSchema.omit({ _id: true }).parse(plan);
  const collection = await plans();
  const result = await collection.insertOne(parsed);
  return result.insertedId.toString();
}

export async function updatePlan(
  slug: string,
  plan: Omit<TrainingPlanDocument, "_id" | "slug">,
): Promise<boolean> {
  const parsed = trainingPlanDocumentSchema
    .omit({ _id: true, slug: true })
    .parse(plan);
  const collection = await plans();
  const result = await collection.updateOne(
    { slug },
    { $set: { ...parsed, slug } },
  );
  return result.matchedCount > 0;
}

export async function ensurePlanIndexes(): Promise<void> {
  const collection = await plans();
  await collection.createIndex({ slug: 1 }, { unique: true });
}

export async function countPlans(): Promise<number> {
  const collection = await plans();
  return collection.countDocuments();
}
