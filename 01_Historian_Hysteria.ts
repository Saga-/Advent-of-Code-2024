import { readFileSync } from "fs";

const FILE: string = "./01_input.txt";
const DELIMETER = "   ";

const file = readFileSync(FILE, "utf-8");
const cols: string[] = file.split("\n");
// PART 1

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

console.log("Total Distance:", totalDistance);

// PART 2
const occurences: { [key: number]: number } = {};

for (let i = 0; i < leftColSorted.length; i++) {
  const currentVal = leftColSorted[i];
  occurences[currentVal] = 0;
  rightColSorted.forEach((value) => {
    if (currentVal === value) {
      occurences[currentVal] += 1;
    }
  });
  if (occurences[currentVal] === 0) {
    delete occurences[currentVal];
  } else {
    occurences[currentVal] = currentVal * occurences[currentVal];
  }
}

const totalValue = Object.values(occurences).reduce(
  (a, b) => (a as number) + (b as number),
  0
);

console.log("Total Value:", totalValue);
