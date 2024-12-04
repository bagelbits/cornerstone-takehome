import { getRecords } from "@/data/dataStore";

const MAX_EVENT_NAMES = 20;

export async function GET(): Promise<Response> {
  const records = await getRecords();
  const serious: Record<string, number> = {};
  const ongoing: Record<string, number> = {};
  const event_name: Record<string, number> = {};
  for (const record of records) {
    if (record.Serious) {
      if (!serious[record.Serious]) {
        serious[record.Serious] = 0;
      }
      serious[record.Serious] += 1;
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

  // Convert serious to a list of objects with name and count
  const seriousList = Object.entries(serious).map(([name, count]) => ({
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
      serious: seriousList.sort((a, b) => b.count - a.count),
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
