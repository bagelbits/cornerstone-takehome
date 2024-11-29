import { getRecords } from "@/data/dataStore";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
  const searchParams = request.nextUrl.searchParams;
  // TODO: Implement search functionality
  console.log(searchParams);
  const records = await getRecords();
  const totalRecords = records.length;

  // TODO: Sorting

  // Pagination
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const paginatedRecords = records.slice(start, end);

  return new Response(
    JSON.stringify({
      pagination: { page, pageSize, total: totalRecords },
      results: paginatedRecords,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
