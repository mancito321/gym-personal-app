export type ServerTimeRecord = {
  now: Date;
  timestampMs: number;
};

export async function readCurrentServerTime(): Promise<ServerTimeRecord> {
  const now = new Date();

  return {
    now,
    timestampMs: now.getTime(),
  };
}
