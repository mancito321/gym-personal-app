import { readCurrentServerTime } from "@/lib/repositories/getInfo.repository";
import {
  toGetInfoResponse,
  type GetInfoResponse,
} from "@/lib/schemas/getInfo.schema";

export async function getInfoService(): Promise<GetInfoResponse> {
  const record = await readCurrentServerTime();
  return toGetInfoResponse(record);
}
