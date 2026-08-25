import Stack from "@mui/material/Stack";
import { AppText } from "@/components/ui/AppText";
import { messages } from "@/constants/messages";
import type { Tips } from "@/lib/schemas/routine.schema";

type PlanTipsProps = {
  tips: Tips;
  summary?: string;
};

function TipBlock({ title, body }: { title: string; body?: string }) {
  if (!body) return null;
  return (
    <Stack spacing={0.5}>
      <AppText variant="subtitle2" component="h3">
        {title}
      </AppText>
      <AppText variant="body2" color="text.secondary">
        {body}
      </AppText>
    </Stack>
  );
}

export function PlanTips({ tips, summary }: PlanTipsProps) {
  const hasTips =
    Boolean(tips.comments) ||
    Boolean(tips.diet) ||
    Boolean(tips.progressionHandling) ||
    Boolean(tips.importantNotes);

  if (!summary && !hasTips) return null;

  return (
    <Stack spacing={2} sx={{ mb: 3 }}>
      <AppText variant="h5" component="h2">
        {messages.plans.tipsTitle}
      </AppText>
      {summary ? (
        <AppText variant="body1" color="text.secondary">
          {summary}
        </AppText>
      ) : null}
      <TipBlock title={messages.plans.tipsComments} body={tips.comments} />
      <TipBlock title={messages.plans.tipsDiet} body={tips.diet} />
      <TipBlock
        title={messages.plans.tipsProgression}
        body={tips.progressionHandling}
      />
      <TipBlock
        title={messages.plans.tipsImportant}
        body={tips.importantNotes}
      />
    </Stack>
  );
}
