import { getRecords } from "@/data/dataStore";
import dayjs from "dayjs";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
  const searchParams = request.nextUrl.searchParams;
  const records = await getRecords();

  // Filtering
  const severity = searchParams.getAll("severity");
  const events = searchParams.getAll("events");
  const startDate = searchParams.get("startDate");

  const filteredRecords = records.filter((record) => {
    if (
      severity.length > 0 &&
      (Number(record.Severity) < Number(severity[0]) ||
        Number(record.Severity) > Number(severity[1]))
    ) {
      return false;
    }
    if (events.length > 0 && !events.includes(record.Event_Name)) {
      return false;
    }
    if (
      startDate &&
      !dayjs(record.Start_Date).isSame(dayjs(startDate), "day")
    ) {
      return false;
    }
    return true;
  });

  // Pagination
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const totalRecords = filteredRecords.length;
  const paginatedRecords = filteredRecords.slice(start, end);

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
