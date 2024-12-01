import { readFileSync } from "fs";

const FILE: string = "./01_input.txt";
const DELIMETER = "   ";

const file = readFileSync(FILE, "utf-8");
const cols: string[] = file.split("\n");

// We can just declare two variabiles and call .push() inside a forEach instead of two maps()
const leftColSorted: number[] = cols
  .map((row) => {
    return +row.split(DELIMETER)[0];
  })
  .sort();

const rightColSorted: number[] = cols
  .map((row) => {
    return +row.split(DELIMETER)[1];
  })
  .sort();

let totalDistance: number = 0;

for (let i = 0; i < leftColSorted.length; i++) {
  totalDistance += Math.abs(leftColSorted[i] - rightColSorted[i]);
}

console.log(totalDistance);
