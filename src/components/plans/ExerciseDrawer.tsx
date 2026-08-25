"use client";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useEffect, useState } from "react";
import { AppText } from "@/components/ui/AppText";
import { messages } from "@/constants/messages";
import { exerciseGoogleSearchUrl } from "@/lib/api/routines";
import type { ExerciseResponse } from "@/lib/schemas/exercise.schema";

type ExerciseDrawerProps = {
  open: boolean;
  name: string | null;
  onClose: () => void;
  load: (name: string) => Promise<ExerciseResponse>;
  getCached: (name: string) => ExerciseResponse | undefined;
};

function displayName(name: string): string {
  return name.replace(/-/g, " ");
}

export function ExerciseDrawer({
  open,
  name,
  onClose,
  load,
  getCached,
}: ExerciseDrawerProps) {
  const [data, setData] = useState<ExerciseResponse | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open || !name) return;

    const cached = getCached(name);
    if (cached) {
      setData(cached);
      setError(false);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(false);
    setData(null);

    load(name)
      .then((result) => {
        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [open, name, load, getCached]);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: { xs: "100vw", sm: 400 },
          maxWidth: "100vw",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        role="dialog"
        aria-label={name ? displayName(name) : messages.exercise.loading}
      >
        <Stack direction="row" spacing={1} sx={{ alignItems: "flex-start" }}>
          <Box sx={{ flex: 1 }}>
            <AppText variant="h6" component="h2">
              {name ? displayName(name) : messages.exercise.loading}
            </AppText>
            {name ? (
              <Link
                href={exerciseGoogleSearchUrl(name)}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  mt: 0.5,
                }}
              >
                {messages.exercise.openInNewTab}
                <OpenInNewIcon fontSize="inherit" />
              </Link>
            ) : null}
          </Box>
          <IconButton onClick={onClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </Stack>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress size={28} />
          </Box>
        ) : null}

        {error ? (
          <Alert severity="error">{messages.exercise.error}</Alert>
        ) : null}

        {data?.type === "exercise" ? (
          <Stack spacing={2}>
            {data.description ? (
              <Stack spacing={0.5}>
                <AppText variant="subtitle2" component="h3">
                  {messages.exercise.description}
                </AppText>
                <AppText variant="body2" color="text.secondary">
                  {data.description}
                </AppText>
              </Stack>
            ) : null}
            {data.howTo ? (
              <Stack spacing={0.5}>
                <AppText variant="subtitle2" component="h3">
                  {messages.exercise.howTo}
                </AppText>
                <AppText variant="body2" color="text.secondary">
                  {data.howTo}
                </AppText>
              </Stack>
            ) : null}
          </Stack>
        ) : null}

        {data?.type === "subplan" ? (
          <Stack spacing={2}>
            {data.comments ? (
              <Stack spacing={0.5}>
                <AppText variant="subtitle2" component="h3">
                  {messages.exercise.comments}
                </AppText>
                <AppText variant="body2" color="text.secondary">
                  {data.comments}
                </AppText>
              </Stack>
            ) : null}
            {data.exercises && data.exercises.length > 0 ? (
              <Stack spacing={0.5}>
                <AppText variant="subtitle2" component="h3">
                  {messages.exercise.childExercises}
                </AppText>
                <Box component="ul" sx={{ m: 0, pl: 2 }}>
                  {data.exercises.map((child) => (
                    <li key={child}>
                      <AppText variant="body2" component="span">
                        {displayName(child)}
                      </AppText>
                    </li>
                  ))}
                </Box>
              </Stack>
            ) : null}
          </Stack>
        ) : null}
      </Box>
    </Drawer>
  );
}
