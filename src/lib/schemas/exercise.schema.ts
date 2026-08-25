import { z } from "zod";

export const exerciseTypeSchema = z.enum(["exercise", "subplan"]);

export const exerciseDocumentSchema = z.object({
  _id: z.unknown().optional(),
  name: z.string().min(1),
  type: exerciseTypeSchema,
  description: z.string().optional(),
  howTo: z.string().optional(),
  exercises: z.array(z.string().min(1)).optional(),
  comments: z.string().optional(),
});

export const exerciseResponseSchema = z.discriminatedUnion("type", [
  z.object({
    name: z.string().min(1),
    type: z.literal("exercise"),
    description: z.string().optional(),
    howTo: z.string().optional(),
  }),
  z.object({
    name: z.string().min(1),
    type: z.literal("subplan"),
    exercises: z.array(z.string().min(1)).optional(),
    comments: z.string().optional(),
  }),
]);

export type ExerciseDocument = z.infer<typeof exerciseDocumentSchema>;
export type ExerciseResponse = z.infer<typeof exerciseResponseSchema>;

export function toExerciseResponse(doc: ExerciseDocument): ExerciseResponse {
  if (doc.type === "subplan") {
    return exerciseResponseSchema.parse({
      name: doc.name,
      type: "subplan",
      exercises: doc.exercises,
      comments: doc.comments,
    });
  }

  return exerciseResponseSchema.parse({
    name: doc.name,
    type: "exercise",
    description: doc.description,
    howTo: doc.howTo,
  });
}

export const exerciseNameParamSchema = z
  .string()
  .min(1)
  .regex(/^[a-zA-Z0-9_-]+$/, "name must be URL-safe");
