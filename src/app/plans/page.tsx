import Stack from "@mui/material/Stack";
import { AppText } from "@/components/ui/AppText";
import { PlanGallery } from "@/components/plans/PlanGallery";
import { messages } from "@/constants/messages";
import { getRoutines } from "@/lib/api/routines";

export const dynamic = "force-dynamic";

export const metadata = {
  title: messages.plans.title,
};

export default async function PlansPage() {
  const { data: plans } = await getRoutines();

  return (
    <Stack spacing={3}>
      <AppText variant="h4" component="h1">
        {messages.plans.title}
      </AppText>
      <PlanGallery plans={plans} />
    </Stack>
  );
}
