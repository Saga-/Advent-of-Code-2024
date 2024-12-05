import { readFileSync } from "fs";

const FILE = "./03_input.txt";
const file = readFileSync(FILE, "utf-8");

const pattern = /mul\((\d{1,3}),\s*(\d{1,3})\)/g;

const sum = file
  .matchAll(pattern)
  .reduce((accumulator, match) => accumulator + +match[1] * +match[2], 0);

console.log(sum);
