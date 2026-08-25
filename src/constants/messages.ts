/** English UI copy. Flat keys stay swap-friendly for next-intl later. */
export const messages = {
  brand: {
    name: "Masters",
  },
  nav: {
    plans: "Plans",
    about: "About",
    themeLight: "Light mode",
    themeDark: "Dark mode",
  },
  home: {
    bannerTitle: "Train with clarity",
    bannerBody:
      "Browse ready-made workout plans, open a day, and dig into each exercise when you need the details.",
  },
  about: {
    title: "About",
    body: "For me, by me — a small personal gym app for routines and exercises.",
    githubLabel: "GitHub",
    githubUrl: "https://github.com/mancito321",
  },
  plans: {
    title: "Plans",
    empty: "No plans available yet.",
    tipsTitle: "Plan notes",
    tipsComments: "Comments",
    tipsDiet: "Diet",
    tipsProgression: "Progression",
    tipsImportant: "Important notes",
    daysTitle: "Days",
    noDays: "This plan has no scheduled days.",
  },
  day: {
    exercisesTitle: "Exercises",
    subplanLabel: "Subplan",
    commentsLabel: "Comments",
    empty: "No exercises for this day.",
    backToPlan: "Back to plan",
  },
  exercise: {
    openInNewTab: "Open in another tab",
    description: "Description",
    howTo: "How to",
    comments: "Comments",
    childExercises: "Exercises in this subplan",
    loading: "Loading…",
    error: "Could not load exercise details.",
  },
  footer: {
    copyright: "Masters — personal training plans",
  },
  errors: {
    notFound: "Not found",
    loadFailed: "Something went wrong while loading.",
    retry: "Try again",
  },
  loading: {
    default: "Loading…",
  },
} as const;

export type Messages = typeof messages;
