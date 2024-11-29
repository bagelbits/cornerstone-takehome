import fs from "fs";
import { parse } from "csv-parse";
import { finished } from "stream/promises";

import { Diagnosis } from "@/types/diagnoses";

const filePath = "./src/data/diagnoses.csv";
const records: Diagnosis[] = [];
let isLoaded = false;

export async function loadCSV(): Promise<Diagnosis[]> {
  if (isLoaded) {
    return records;
  }

  try {
    const parser = fs.createReadStream(filePath).pipe(
      parse({
        columns: true,
      })
    );
    parser.on("readable", function () {
      let record;
      while ((record = parser.read()) !== null) {
        // Work with each record
        records.push(record);
      }
    });
    await finished(parser);
    isLoaded = true;

    return records;
  } catch (err) {
    console.error("Error loading the CSV file:", err);
    throw err;
  }
}

export async function getRecords(): Promise<Diagnosis[]> {
  await loadCSV();
  return records;
}
