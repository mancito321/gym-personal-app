"use client";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { messages } from "@/constants/messages";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <Stack spacing={2} sx={{ py: 4 }}>
      <Alert severity="error">{messages.errors.loadFailed}</Alert>
      <Button variant="outlined" onClick={reset}>
        {messages.errors.retry}
      </Button>
    </Stack>
  );
}
