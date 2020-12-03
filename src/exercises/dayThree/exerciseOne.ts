import { readFile } from "../utils/readFile";

const start = process.hrtime();
const input = readFile("dayThree");

let x: number = 0;
let result: number = 0;

input.forEach((line: string) => {
  if (line[x] === "#") result++;

  x += 3;
  if (x / 31 >= 1) x = x % 31;
});

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
