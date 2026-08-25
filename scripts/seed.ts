import {
  closeMongoConnection,
  validateMongoConnection,
} from "../src/lib/db/client";
import { dummyExercises, dummyPlans } from "../src/lib/fixtures/gym.fixtures";
import {
  ensureExerciseIndexes,
  findExerciseByName,
  insertExercise,
  updateExercise,
} from "../src/lib/repositories/exercise.repository";
import {
  ensurePlanIndexes,
  findPlanByIdOrSlug,
  insertPlan,
  updatePlan,
} from "../src/lib/repositories/trainingPlan.repository";

async function seedExercises(force: boolean): Promise<void> {
  await ensureExerciseIndexes();

  for (const exercise of dummyExercises) {
    const existing = await findExerciseByName(exercise.name);
    if (!existing) {
      await insertExercise(exercise);
      console.info(`[seed] inserted exercise ${exercise.name}`);
      continue;
    }

    if (!force) {
      console.info(`[seed] skip existing exercise ${exercise.name}`);
      continue;
    }

    const { name: _name, ...rest } = exercise;
    await updateExercise(exercise.name, rest);
    console.info(`[seed] updated exercise ${exercise.name}`);
  }
}

async function seedPlans(force: boolean): Promise<void> {
  await ensurePlanIndexes();

  for (const plan of dummyPlans) {
    const existing = await findPlanByIdOrSlug(plan.slug);
    if (!existing) {
      await insertPlan(plan);
      console.info(`[seed] inserted plan ${plan.slug}`);
      continue;
    }

    if (!force) {
      console.info(`[seed] skip existing plan ${plan.slug}`);
      continue;
    }

    const { slug: _slug, ...rest } = plan;
    await updatePlan(plan.slug, rest);
    console.info(`[seed] updated plan ${plan.slug}`);
  }
}

async function main(): Promise<void> {
  const force =
    process.argv.includes("--force") || process.env.SEED_FORCE === "true";

  const ok = await validateMongoConnection();
  if (!ok) {
    throw new Error("MongoDB connection validation failed; aborting seed");
  }

  await seedExercises(force);
  await seedPlans(force);
  console.info(`[seed] complete (force=${force})`);
}

main()
  .catch((error: unknown) => {
    console.error("[seed] failed", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await closeMongoConnection();
  });
