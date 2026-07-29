export const TRAINING_PLANS_COLLECTION = "training_plans";
export const EXERCISES_COLLECTION = "exercises";

export const WEEKDAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export type Weekday = (typeof WEEKDAYS)[number];
