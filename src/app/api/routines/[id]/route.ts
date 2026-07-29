import { NextResponse } from "next/server";
import { errorResponse, okResponse } from "@/lib/schemas/api.schema";
import { routineIdParamSchema } from "@/lib/schemas/routine.schema";
import { getRoutineService } from "@/lib/services/routine.service";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const parsed = routineIdParamSchema.safeParse(id);

  if (!parsed.success) {
    return NextResponse.json(
      errorResponse("BAD_REQUEST", "Invalid routine id"),
      { status: 400 },
    );
  }

  const result = await getRoutineService(parsed.data);
  if (!result) {
    return NextResponse.json(
      errorResponse("NOT_FOUND", "Routine not found"),
      { status: 404 },
    );
  }

  return NextResponse.json(okResponse(result.data, result.meta));
}
