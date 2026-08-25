import Stack from "@mui/material/Stack";
import { notFound } from "next/navigation";
import { AppText } from "@/components/ui/AppText";
import { PlanTips } from "@/components/plans/PlanTips";
import { DayCarousel } from "@/components/plans/DayCarousel";
import { getRoutine } from "@/lib/api/routines";
import { ApiClientError } from "@/lib/api/client";

export const dynamic = "force-dynamic";

type PlanPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PlanPageProps) {
  const { id } = await params;
  try {
    const { data } = await getRoutine(id);
    return { title: data.title };
  } catch {
    return { title: "Plan" };
  }
}

export default async function PlanPage({ params }: PlanPageProps) {
  const { id } = await params;

  let plan;
  try {
    ({ data: plan } = await getRoutine(id));
  } catch (error) {
    if (error instanceof ApiClientError && error.status === 404) {
      notFound();
    }
    throw error;
  }

  return (
    <Stack spacing={3}>
      <AppText variant="h4" component="h1">
        {plan.title}
      </AppText>
      <PlanTips tips={plan.tips} summary={plan.summary} />
      <DayCarousel planSlug={plan.slug} days={plan.days} />
    </Stack>
  );
}
