import { getRecords } from "@/data/dataStore";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
  const searchParams = request.nextUrl.searchParams;
  // TODO: Implement search functionality
  console.log(searchParams);
  const records = await getRecords();
  return new Response(JSON.stringify(records), {
    headers: {
      "content-type": "application/json",
    },
  });
}
