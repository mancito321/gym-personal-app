"use client";

import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { AppList } from "@/components/ui/AppList";
import { AppText } from "@/components/ui/AppText";
import { messages } from "@/constants/messages";
import type { DaySlot } from "@/lib/schemas/routine.schema";
import { useExercisePrefetch } from "@/hooks/useExercisePrefetch";
import { ExerciseDrawer } from "./ExerciseDrawer";
import { useState } from "react";

type DayExerciseListProps = {
  day: DaySlot;
};

function displayName(name: string): string {
  return name.replace(/-/g, " ");
}

export function DayExerciseList({ day }: DayExerciseListProps) {
  const { prefetch, load, getCached } = useExercisePrefetch();
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const items = [
    ...(day.subplanName
      ? [
          {
            id: `subplan-${day.subplanName}`,
            primary: displayName(day.subplanName),
            secondary: messages.day.subplanLabel,
            onClick: () => {
              setSelectedName(day.subplanName!);
              setOpen(true);
            },
            onMouseEnter: () => prefetch(day.subplanName!),
            onFocus: () => prefetch(day.subplanName!),
          },
        ]
      : []),
    ...day.exerciseNames.map((name) => ({
      id: name,
      primary: displayName(name),
      onClick: () => {
        setSelectedName(name);
        setOpen(true);
      },
      onMouseEnter: () => prefetch(name),
      onFocus: () => prefetch(name),
    })),
  ];

  return (
    <Stack spacing={2}>
      {day.comments ? (
        <Stack spacing={0.5}>
          <AppText variant="subtitle2" component="h3">
            {messages.day.commentsLabel}
          </AppText>
          <AppText variant="body2" color="text.secondary">
            {day.comments}
          </AppText>
        </Stack>
      ) : null}

      <AppText variant="h5" component="h2">
        {messages.day.exercisesTitle}
      </AppText>

      {day.subplanName ? (
        <Chip
          size="small"
          label={`${messages.day.subplanLabel}: ${displayName(day.subplanName)}`}
          sx={{ alignSelf: "flex-start" }}
        />
      ) : null}

      <AppList
        items={items}
        empty={
          <AppText color="text.secondary">{messages.day.empty}</AppText>
        }
      />

      <ExerciseDrawer
        open={open}
        name={selectedName}
        onClose={() => setOpen(false)}
        load={load}
        getCached={getCached}
      />
    </Stack>
  );
}
