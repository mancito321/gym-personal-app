import { describe, expect, it } from "vitest";
import {
  toExerciseResponse,
  exerciseNameParamSchema,
} from "@/lib/schemas/exercise.schema";
import {
  toRoutineDetail,
  toRoutineListItem,
  routineIdParamSchema,
} from "@/lib/schemas/routine.schema";

describe("routine schema mappers", () => {
  it("maps list items from slug when id missing", () => {
    const item = toRoutineListItem({
      slug: "full-body-starter",
      title: "Full Body Starter",
      summary: "Beginner",
    });

    expect(item).toEqual({
      id: "full-body-starter",
      slug: "full-body-starter",
      title: "Full Body Starter",
      summary: "Beginner",
    });
  });

  it("maps plan detail with default tips", () => {
    const detail = toRoutineDetail({
      _id: "abc",
      slug: "full-body-starter",
      title: "Full Body Starter",
      days: {
        monday: { exerciseNames: ["push-up"] },
      },
    });

    expect(detail.id).toBe("abc");
    expect(detail.days.monday?.exerciseNames).toEqual(["push-up"]);
    expect(detail.tips).toEqual({});
  });

  it("rejects invalid routine ids", () => {
    expect(routineIdParamSchema.safeParse("bad id").success).toBe(false);
    expect(routineIdParamSchema.safeParse("full-body-starter").success).toBe(
      true,
    );
  });
});

describe("exercise schema mappers", () => {
  it("maps exercise and subplan shapes", () => {
    expect(
      toExerciseResponse({
        name: "push-up",
        type: "exercise",
        description: "Press",
        howTo: "Lower and press",
      }),
    ).toEqual({
      name: "push-up",
      type: "exercise",
      description: "Press",
      howTo: "Lower and press",
    });

    expect(
      toExerciseResponse({
        name: "mobility-routine",
        type: "subplan",
        exercises: ["hip-hinge-stretch"],
        comments: "Warm-up",
      }),
    ).toEqual({
      name: "mobility-routine",
      type: "subplan",
      exercises: ["hip-hinge-stretch"],
      comments: "Warm-up",
    });
  });

  it("rejects invalid exercise names", () => {
    expect(exerciseNameParamSchema.safeParse("push up").success).toBe(false);
    expect(exerciseNameParamSchema.safeParse("push-up").success).toBe(true);
  });
});
