import { z } from "zod";
import { WEEKDAYS } from "@/lib/db/collections";

export const weekdaySchema = z.enum(WEEKDAYS);

export const daySlotSchema = z.object({
  exerciseNames: z.array(z.string().min(1)).default([]),
  subplanName: z.string().min(1).optional(),
  comments: z.string().optional(),
});

export const tipsSchema = z.object({
  comments: z.string().optional(),
  diet: z.string().optional(),
  progressionHandling: z.string().optional(),
  importantNotes: z.string().optional(),
});

export const trainingPlanDaysSchema = z.partialRecord(weekdaySchema, daySlotSchema);

export const trainingPlanDocumentSchema = z.object({
  _id: z.unknown().optional(),
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().optional(),
  days: trainingPlanDaysSchema,
  tips: tipsSchema.default({}),
});

export const routineListItemSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().optional(),
});

export const routineDetailSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().optional(),
  days: trainingPlanDaysSchema,
  tips: tipsSchema,
});

export type DaySlot = z.infer<typeof daySlotSchema>;
export type Tips = z.infer<typeof tipsSchema>;
export type TrainingPlanDocument = z.infer<typeof trainingPlanDocumentSchema>;
export type RoutineListItem = z.infer<typeof routineListItemSchema>;
export type RoutineDetail = z.infer<typeof routineDetailSchema>;

export function toRoutineListItem(doc: {
  _id?: { toString(): string } | string;
  slug: string;
  title: string;
  summary?: string;
}): RoutineListItem {
  const id =
    typeof doc._id === "string"
      ? doc._id
      : doc._id
        ? doc._id.toString()
        : doc.slug;

  return routineListItemSchema.parse({
    id,
    slug: doc.slug,
    title: doc.title,
    summary: doc.summary,
  });
}

export function toRoutineDetail(doc: {
  _id?: { toString(): string } | string;
  slug: string;
  title: string;
  summary?: string;
  days: TrainingPlanDocument["days"];
  tips?: Tips;
}): RoutineDetail {
  const id =
    typeof doc._id === "string"
      ? doc._id
      : doc._id
        ? doc._id.toString()
        : doc.slug;

  return routineDetailSchema.parse({
    id,
    slug: doc.slug,
    title: doc.title,
    summary: doc.summary,
    days: doc.days,
    tips: doc.tips ?? {},
  });
}

export const routineIdParamSchema = z
  .string()
  .min(1)
  .regex(/^[a-zA-Z0-9_-]+$/, "id must be an ObjectId hex or slug");
