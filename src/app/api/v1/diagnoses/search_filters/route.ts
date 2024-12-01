import { getRecords } from "@/data/dataStore";

type Filters = {
  severity: {
    min: number | null;
    max: number | null;
  };
  conditions: string[];
  start_date: {
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
    conditions: [],
    start_date: {
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
    filters.conditions.push(record.Event_Name);
    if (
      filters.start_date.min === null ||
      new Date(record.Start_Date) < filters.start_date.min
    ) {
      filters.start_date.min = new Date(record.Start_Date);
    }
    if (
      filters.start_date.max === null ||
      new Date(record.Start_Date) > filters.start_date.max
    ) {
      filters.start_date.max = new Date(record.Start_Date);
    }
  }
  filters.conditions = Array.from(new Set(filters.conditions)).sort();

  console.log(filters);
  return new Response(JSON.stringify(filters), {
    headers: {
      "content-type": "application/json",
    },
  });
}
