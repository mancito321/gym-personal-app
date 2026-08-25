import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { AppText } from "@/components/ui/AppText";
import { messages } from "@/constants/messages";

export const metadata = {
  title: messages.about.title,
};

export default function AboutPage() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 640 }}>
      <AppText variant="h4" component="h1">
        {messages.about.title}
      </AppText>
      <AppText variant="body1" color="text.secondary">
        {messages.about.body}
      </AppText>
      <Link
        href={messages.about.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
      >
        {messages.about.githubLabel}
      </Link>
    </Stack>
  );
}
