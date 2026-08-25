import { describe, expect, it } from "vitest";
import { isWeekday, parseWeekdayParam, formatWeekdayLabel } from "./weekday";

describe("weekday helpers", () => {
  it("accepts valid weekdays", () => {
    expect(isWeekday("monday")).toBe(true);
    expect(parseWeekdayParam("friday")).toBe("friday");
  });

  it("rejects invalid day params", () => {
    expect(isWeekday("funday")).toBe(false);
    expect(parseWeekdayParam("Funday")).toBeNull();
    expect(parseWeekdayParam("Monday")).toBeNull();
  });

  it("formats labels", () => {
    expect(formatWeekdayLabel("monday")).toBe("Monday");
  });
});
