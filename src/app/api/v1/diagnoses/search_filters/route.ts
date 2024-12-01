import { getRecords } from "@/data/dataStore";

type Filters = {
  severity: {
    min: number | null;
    max: number | null;
  };
  events: string[];
  startDate: {
    min: Date | null;
    max: Date | null;
  };
};

export async function GET(): Promise<Response> {
  const records = await getRecords();

  const filters: Filters = {
    severity: {
      min: null,
      max: null,
    },
    events: [],
    startDate: {
      min: null,
      max: null,
    },
  };
  for (const record of records) {
    if (
      filters.severity.min === null ||
      Number(record.Severity) < filters.severity.min
    ) {
      filters.severity.min = Number(record.Severity);
    }
    if (
      filters.severity.max === null ||
      Number(record.Severity) > filters.severity.max
    ) {
      filters.severity.max = Number(record.Severity);
    }
    filters.events.push(record.Event_Name);
    if (
      filters.startDate.min === null ||
      new Date(record.Start_Date) < filters.startDate.min
    ) {
      filters.startDate.min = new Date(record.Start_Date);
    }
    if (
      filters.startDate.max === null ||
      new Date(record.Start_Date) > filters.startDate.max
    ) {
      filters.startDate.max = new Date(record.Start_Date);
    }
  }
  filters.events = Array.from(new Set(filters.events)).sort();

  console.log(filters);
  return new Response(JSON.stringify(filters), {
    headers: {
      "content-type": "application/json",
    },
  });
}
