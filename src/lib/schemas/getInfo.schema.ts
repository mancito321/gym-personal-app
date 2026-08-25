export type GetInfoResponse = {
  serverDateIso: string;
  serverTimestampMs: number;
};

type GetInfoSchemaInput = {
  now: Date;
  timestampMs: number;
};

export function toGetInfoResponse(input: GetInfoSchemaInput): GetInfoResponse {
  return {
    serverDateIso: input.now.toISOString(),
    serverTimestampMs: input.timestampMs,
  };
}
