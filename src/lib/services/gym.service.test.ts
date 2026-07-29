import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/db/client", () => ({
  validateMongoConnection: vi.fn(),
}));

vi.mock("@/lib/repositories/trainingPlan.repository", () => ({
  findAllPlans: vi.fn(),
  findPlanByIdOrSlug: vi.fn(),
}));

vi.mock("@/lib/repositories/exercise.repository", () => ({
  findExerciseByName: vi.fn(),
}));

import { validateMongoConnection } from "@/lib/db/client";
import { findExerciseByName } from "@/lib/repositories/exercise.repository";
import { findAllPlans } from "@/lib/repositories/trainingPlan.repository";
import { getExerciseService } from "@/lib/services/exercise.service";
import { listRoutinesService } from "@/lib/services/routine.service";

describe("service dummy fallback", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("lists dummy routines when mongo is unavailable", async () => {
    vi.mocked(validateMongoConnection).mockResolvedValue(false);

    const result = await listRoutinesService();

    expect(result.meta.source).toBe("dummy");
    expect(result.data.length).toBeGreaterThan(0);
    expect(result.data[0]?.slug).toBe("conditioning-recomposition-8-week");
  });

  it("lists dummy routines when collection is empty", async () => {
    vi.mocked(validateMongoConnection).mockResolvedValue(true);
    vi.mocked(findAllPlans).mockResolvedValue([]);

    const result = await listRoutinesService();

    expect(result.meta.source).toBe("dummy");
    expect(result.data[0]?.title).toBe("8-Week Conditioning and Recomposition");
  });

  it("returns dummy exercise when mongo is unavailable", async () => {
    vi.mocked(validateMongoConnection).mockResolvedValue(false);

    const result = await getExerciseService("goblet-squat");

    expect(result?.meta.source).toBe("dummy");
    expect(result?.data).toMatchObject({
      name: "goblet-squat",
      type: "exercise",
    });
  });

  it("returns null when exercise missing from db and fixtures", async () => {
    vi.mocked(validateMongoConnection).mockResolvedValue(true);
    vi.mocked(findExerciseByName).mockResolvedValue(null);

    const result = await getExerciseService("missing-move");

    expect(result).toBeNull();
  });
});
