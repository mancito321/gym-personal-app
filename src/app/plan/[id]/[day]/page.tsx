import Stack from "@mui/material/Stack";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppText } from "@/components/ui/AppText";
import { DayCarousel } from "@/components/plans/DayCarousel";
import { DayExerciseList } from "@/components/plans/DayExerciseList";
import { messages } from "@/constants/messages";
import { getRoutine } from "@/lib/api/routines";
import { ApiClientError } from "@/lib/api/client";
import { formatWeekdayLabel, parseWeekdayParam } from "@/lib/plans/weekday";

export const dynamic = "force-dynamic";

type DayPageProps = {
  params: Promise<{ id: string; day: string }>;
};

export async function generateMetadata({ params }: DayPageProps) {
  const { id, day } = await params;
  const weekday = parseWeekdayParam(day);
  if (!weekday) return { title: "Day" };

  try {
    const { data } = await getRoutine(id);
    return {
      title: `${formatWeekdayLabel(weekday)} · ${data.title}`,
    };
  } catch {
    return { title: formatWeekdayLabel(weekday) };
  }
}

export default async function DayPage({ params }: DayPageProps) {
  const { id, day } = await params;
  const weekday = parseWeekdayParam(day);
  if (!weekday) notFound();

  let plan;
  try {
    ({ data: plan } = await getRoutine(id));
  } catch (error) {
    if (error instanceof ApiClientError && error.status === 404) {
      notFound();
    }
    throw error;
  }

  const daySlot = plan.days[weekday];
  if (!daySlot) notFound();

  return (
    <Stack spacing={3}>
      <Link href={`/plan/${plan.slug}`}>{messages.day.backToPlan}</Link>

      <AppText variant="h4" component="h1">
        {formatWeekdayLabel(weekday)}
      </AppText>
      <AppText variant="subtitle1" color="text.secondary">
        {plan.title}
      </AppText>

      <DayCarousel
        planSlug={plan.slug}
        days={plan.days}
        selectedDay={weekday}
      />

      <DayExerciseList day={daySlot} />
    </Stack>
  );
}
