import { getRecords } from "@/data/dataStore";

export async function GET(): Promise<Response> {
  const records = await getRecords();
  // TODO: Implement me
  console.log(records);
  return new Response(JSON.stringify({}), {
    headers: {
      "content-type": "application/json",
    },
  });
}
