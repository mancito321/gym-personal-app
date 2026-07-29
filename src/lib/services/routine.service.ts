import type { ApiMeta } from "@/lib/schemas/api.schema";
import {
  toRoutineDetail,
  toRoutineListItem,
  type RoutineDetail,
  type RoutineListItem,
} from "@/lib/schemas/routine.schema";
import { dummyPlans } from "@/lib/fixtures/gym.fixtures";
import {
  findAllPlans,
  findPlanByIdOrSlug,
} from "@/lib/repositories/trainingPlan.repository";
import { validateMongoConnection } from "@/lib/db/client";

export type RoutinesResult<T> = {
  data: T;
  meta: ApiMeta;
};

function dummyList(): RoutineListItem[] {
  return dummyPlans.map((plan) =>
    toRoutineListItem({ ...plan, _id: plan.slug }),
  );
}

function dummyDetail(idOrSlug: string): RoutineDetail | null {
  const plan = dummyPlans.find((item) => item.slug === idOrSlug);
  if (!plan) {
    return null;
  }
  return toRoutineDetail({ ...plan, _id: plan.slug });
}

export async function listRoutinesService(): Promise<
  RoutinesResult<RoutineListItem[]>
> {
  const connected = await validateMongoConnection();
  if (!connected) {
    console.warn("[routines] using dummy fixtures: mongo unavailable");
    return { data: dummyList(), meta: { source: "dummy" } };
  }

  try {
    const plans = await findAllPlans();
    if (plans.length === 0) {
      console.warn("[routines] using dummy fixtures: empty collection");
      return { data: dummyList(), meta: { source: "dummy" } };
    }
    return {
      data: plans.map((plan) => toRoutineListItem(plan)),
      meta: { source: "database" },
    };
  } catch (error) {
    console.error("[routines] list failed; using dummy fixtures", error);
    return { data: dummyList(), meta: { source: "dummy" } };
  }
}

export async function getRoutineService(
  idOrSlug: string,
): Promise<RoutinesResult<RoutineDetail> | null> {
  const connected = await validateMongoConnection();
  if (!connected) {
    console.warn("[routines] detail using dummy fixtures: mongo unavailable");
    const data = dummyDetail(idOrSlug);
    return data ? { data, meta: { source: "dummy" } } : null;
  }

  try {
    const plan = await findPlanByIdOrSlug(idOrSlug);
    if (plan) {
      return {
        data: toRoutineDetail(plan),
        meta: { source: "database" },
      };
    }
  } catch (error) {
    console.error("[routines] detail failed; trying dummy fixtures", error);
  }

  const data = dummyDetail(idOrSlug);
  return data ? { data, meta: { source: "dummy" } } : null;
}
