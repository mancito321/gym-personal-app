import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { AppText } from "@/components/ui/AppText";
import { PlanGallery } from "@/components/plans/PlanGallery";
import { messages } from "@/constants/messages";
import { getRoutines } from "@/lib/api/routines";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { data: plans } = await getRoutines();

  return (
    <Stack spacing={4}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4 },
          bgcolor: "primary.main",
          color: "primary.contrastText",
          borderRadius: 2,
        }}
      >
        <AppText variant="h4" component="h1" gutterBottom>
          {messages.home.bannerTitle}
        </AppText>
        <AppText variant="body1">{messages.home.bannerBody}</AppText>
      </Paper>

      <PlanGallery plans={plans} />
    </Stack>
  );
}
