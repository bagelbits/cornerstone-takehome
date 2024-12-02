import { NextRequest } from "next/server";

import { updateDiagnosis } from "@/data/dataStore";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ diagnosis_id: string }> }
): Promise<Response> {
  const diagnosis_id = (await params).diagnosis_id;
  const body = await request.json();

  const updatedDiagnosis = await updateDiagnosis(diagnosis_id, body);

  return new Response(JSON.stringify(updatedDiagnosis), {
    headers: {
      "content-type": "application/json",
    },
  });
}
