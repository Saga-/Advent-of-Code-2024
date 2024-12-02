import { readFileSync } from "fs";

const FILE = "./02_input.txt";
const SAFEADJ = 3; // The maximum increase/decrease between each value (in a row)

const file = readFileSync(FILE, "utf-8");

const parsedArray = file.split("\n");

console.log(parsedArray);

let validReports = 0;

for (let i = 0; i < parsedArray.length; i++) {
  debugger;
  const recordsArray = parsedArray[i].split(" ").map((x) => +x);
  let validIncreasing = false;
  let validDecreasing = false;

  let increasingCounter = 0;
  let decreasingCounter = 0;

  for (let j = 0; j < recordsArray.length; j++) {
    const currentVal = recordsArray[j];
    const nextVal = recordsArray[j + 1];

    if (
      currentVal > nextVal &&
      currentVal - nextVal >= 1 &&
      currentVal - nextVal <= 3
    ) {
      increasingCounter++;
      validDecreasing = false;
    } else if (
      currentVal < nextVal &&
      nextVal - currentVal >= 1 &&
      nextVal - currentVal <= 3
    ) {
      decreasingCounter++;
      validIncreasing = false;
    } else {
      validIncreasing = false;
      validDecreasing = false;
    }
  }

  if (
    increasingCounter === recordsArray.length - 1 ||
    decreasingCounter === recordsArray.length - 1
  ) {
    validReports += 1;
  }
}

console.log(validReports);
