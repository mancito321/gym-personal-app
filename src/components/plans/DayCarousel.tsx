import Stack from "@mui/material/Stack";
import { Carousel } from "@/components/ui/Carousel";
import { AppText } from "@/components/ui/AppText";
import { messages } from "@/constants/messages";
import { formatWeekdayLabel } from "@/lib/plans/weekday";
import type { RoutineDetail } from "@/lib/schemas/routine.schema";
import type { Weekday } from "@/lib/db/collections";
import { WEEKDAYS } from "@/lib/db/collections";

type DayCarouselProps = {
  planSlug: string;
  days: RoutineDetail["days"];
  selectedDay?: Weekday;
};

export function DayCarousel({ planSlug, days, selectedDay }: DayCarouselProps) {
  const items = WEEKDAYS.filter((day) => days[day]).map((day) => ({
    id: day,
    label: formatWeekdayLabel(day),
    href: `/plan/${planSlug}/${day}`,
    selected: selectedDay === day,
  }));

  if (items.length === 0) {
    return (
      <AppText color="text.secondary">{messages.plans.noDays}</AppText>
    );
  }

  return (
    <Stack spacing={1}>
      <AppText variant="h5" component="h2">
        {messages.plans.daysTitle}
      </AppText>
      <Carousel items={items} />
    </Stack>
  );
}
