import { readFileSync } from "fs";

const FILE = "./02_input.txt";

const file = readFileSync(FILE, "utf-8");

const allRecords: number[][] = file
  .replace(/\r/g, "")
  .split("\n")
  .filter((x) => x != "")
  .map((x) => x.split(" ").map(Number));

let validReportCount = 0;

allRecords.forEach((record: number[]) => {
  if (isValidRecord(record)) {
    validReportCount++;
    return;
  }

  for (let i = 0; i < record.length; i++) {
    const modifiedRecord = [...record.slice(0, i), ...record.slice(i + 1)];
    if (isValidRecord(modifiedRecord)) {
      validReportCount++;
      return;
    }
  }
});

console.log(validReportCount);

function isSafeIncreasing(curr: number, next: number): boolean {
  return curr < next && next - curr >= 1 && next - curr <= 3;
}

function isSafeDecreasing(curr: number, next: number): boolean {
  return curr > next && curr - next >= 1 && curr - next <= 3;
}

function isValidRecord(record: number[]): boolean {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < record.length - 1; i++) {
    if (!isSafeIncreasing(record[i], record[i + 1])) increasing = false;
    if (!isSafeDecreasing(record[i], record[i + 1])) decreasing = false;
  }

  return increasing || decreasing;
}
