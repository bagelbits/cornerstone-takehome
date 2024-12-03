import fs from "fs";
import { parse } from "csv-parse";
import { finished } from "stream/promises";

import { Diagnosis } from "@/types/diagnoses";

const filePath = "./src/data/diagnoses.csv";
const records: Diagnosis[] = [];
let isLoaded = false;
let loadPromise: Promise<Diagnosis[]> | null = null;

export async function loadCSV(): Promise<Diagnosis[]> {
  if (isLoaded) {
    return records;
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise<Diagnosis[]>((resolve, reject) => {
    try {
      const parser = fs.createReadStream(filePath).pipe(
        parse({
          columns: true,
        })
      );
      parser.on("readable", function () {
        let record;
        while ((record = parser.read()) !== null) {
          // Replace row_names key with id
          if (record.row_names) {
            record.id = record.row_names;
            delete record.row_names;
          }
          records.push(record);
        }
      });
      finished(parser).then(() => {
        isLoaded = true;
        resolve(records);
      });
    } catch (err) {
      console.error("Error loading the CSV file:", err);
      reject(err);
    }
  });

  return loadPromise;
}

export async function getRecords(): Promise<Diagnosis[]> {
  await loadCSV();
  return records;
}

export async function updateDiagnosis(
  diagnosis_id: string,
  updatedDiagnosis: Diagnosis
): Promise<Diagnosis> {
  await loadCSV();

  const index = records.findIndex(
    (record) => record?.cai_record_num === diagnosis_id
  );
  if (index === -1) {
    throw new Error(`Diagnosis with id ${diagnosis_id} not found`);
  }

  const existingDiagnosis = records[index];
  const mergedDiagnosis = { ...existingDiagnosis, ...updatedDiagnosis };
  records[index] = mergedDiagnosis;
  return updatedDiagnosis;
}
