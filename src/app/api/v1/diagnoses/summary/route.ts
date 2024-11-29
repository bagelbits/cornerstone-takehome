import { NextRequest } from "next/server";

import { getRecords } from "@/data/dataStore";

const MAX_EVENT_NAMES = 20;

export async function GET(request: NextRequest): Promise<Response> {
  const searchParams = request.nextUrl.searchParams;
  // TODO: Implement search functionality
  console.log(searchParams);
  const records = await getRecords();
  const seriosness: Record<string, number> = {};
  const ongoing: Record<string, number> = {};
  const event_name: Record<string, number> = {};
  for (const record of records) {
    if (record.Serious) {
      if (!seriosness[record.Serious]) {
        seriosness[record.Serious] = 0;
      }
      seriosness[record.Serious] += 1;
    }
    if (record.Ongoing) {
      if (!ongoing[record.Ongoing]) {
        ongoing[record.Ongoing] = 0;
      }
      ongoing[record.Ongoing] += 1;
    }
    if (record.Event_Name) {
      if (!event_name[record.Event_Name]) {
        event_name[record.Event_Name] = 0;
      }
      event_name[record.Event_Name] += 1;
    }
  }

  // Convert seriosness to a list of objects with name and count
  const seriosnessList = Object.entries(seriosness).map(([name, count]) => ({
    name,
    count,
  }));

  // Convert ongoing to a list of objects with name and count
  const ongoingList = Object.entries(ongoing).map(([name, count]) => ({
    name,
    count,
  }));

  // Convert event_name to a list of objects with name and count
  const eventNameList = Object.entries(event_name).map(([name, count]) => ({
    name,
    count,
  }));

  // Sort the list by count in descending order and take the top 20
  const topEventNames = eventNameList
    .sort((a, b) => b.count - a.count)
    .slice(0, MAX_EVENT_NAMES);

  return new Response(
    JSON.stringify({
      seriosness: seriosnessList.sort((a, b) => b.count - a.count),
      ongoing: ongoingList.sort((a, b) => b.count - a.count),
      event_names: topEventNames,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
