import { NextResponse } from "next/server";
import { errorResponse, okResponse } from "@/lib/schemas/api.schema";
import { exerciseNameParamSchema } from "@/lib/schemas/exercise.schema";
import { getExerciseService } from "@/lib/services/exercise.service";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{ name: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { name } = await context.params;
  const parsed = exerciseNameParamSchema.safeParse(name);

  if (!parsed.success) {
    return NextResponse.json(
      errorResponse("BAD_REQUEST", "Invalid exercise name"),
      { status: 400 },
    );
  }

  const result = await getExerciseService(parsed.data);
  if (!result) {
    return NextResponse.json(
      errorResponse("NOT_FOUND", "Exercise not found"),
      { status: 404 },
    );
  }

  return NextResponse.json(okResponse(result.data, result.meta));
}
