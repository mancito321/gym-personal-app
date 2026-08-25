import { WEEKDAYS, type Weekday } from "@/lib/db/collections";

const weekdaySet = new Set<string>(WEEKDAYS);

export function isWeekday(value: string): value is Weekday {
  return weekdaySet.has(value);
}

export function parseWeekdayParam(value: string): Weekday | null {
  return isWeekday(value) ? value : null;
}

export function formatWeekdayLabel(day: Weekday): string {
  return day.charAt(0).toUpperCase() + day.slice(1);
}
