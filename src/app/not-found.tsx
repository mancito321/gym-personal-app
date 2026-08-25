import Stack from "@mui/material/Stack";
import { AppText } from "@/components/ui/AppText";
import { messages } from "@/constants/messages";

export default function NotFound() {
  return (
    <Stack spacing={1} sx={{ py: 6 }}>
      <AppText variant="h4" component="h1">
        {messages.errors.notFound}
      </AppText>
      <AppText color="text.secondary">{messages.errors.loadFailed}</AppText>
    </Stack>
  );
}
