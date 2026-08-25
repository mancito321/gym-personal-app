import { NextResponse } from "next/server";
import { okResponse } from "@/lib/schemas/api.schema";
import { listRoutinesService } from "@/lib/services/routine.service";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await listRoutinesService();
  return NextResponse.json(okResponse(result.data, result.meta));
}
