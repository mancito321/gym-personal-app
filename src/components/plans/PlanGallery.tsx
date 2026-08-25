import { Gallery } from "@/components/ui/Gallery";
import { AppCard } from "@/components/ui/AppCard";
import { AppText } from "@/components/ui/AppText";
import { messages } from "@/constants/messages";
import type { RoutineListItem } from "@/lib/schemas/routine.schema";

type PlanGalleryProps = {
  plans: RoutineListItem[];
};

export function PlanGallery({ plans }: PlanGalleryProps) {
  if (plans.length === 0) {
    return (
      <AppText color="text.secondary">{messages.plans.empty}</AppText>
    );
  }

  return (
    <Gallery>
      {plans.map((plan) => (
        <AppCard key={plan.id} href={`/plan/${plan.slug}`}>
          <AppText variant="h6" component="h2" gutterBottom>
            {plan.title}
          </AppText>
          {plan.summary ? (
            <AppText variant="body2" color="text.secondary">
              {plan.summary}
            </AppText>
          ) : null}
        </AppCard>
      ))}
    </Gallery>
  );
}
