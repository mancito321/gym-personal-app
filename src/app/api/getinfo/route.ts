import { NextResponse } from "next/server";
import { getInfoService } from "@/lib/services/getInfo.service";
import { NextRequest } from "next/server";
//import { headers } from "next/headers";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const noCacheHeaders = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
};

export async function GET(request: NextRequest) {
  const ipAddress = request.headers.get("x-forwarded-for");
  console.log("ipAddress", ipAddress);
  // const headersList = await headers();
  // const idAddress = headersList.get("x-forwarded-for");
  // console.log("referer", idAddress);

  const data = await getInfoService();
  console.info(`[GET /api/getinfo] hit at ${data.serverDateIso}`);

  return NextResponse.json(
    {
      ok: true,
      data,
    },
    {
      headers: noCacheHeaders,
    },
  );
}
