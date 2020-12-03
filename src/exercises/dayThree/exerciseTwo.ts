import { readFile } from "../utils/readFile";

const start = process.hrtime();
const input = readFile("dayThree");

let x: number = 0;
let result1: number = 0;
let result2: number = 0;
let result3: number = 0;
let result4: number = 0;
let result5: number = 0;

// Right 1, down 1
input.forEach((line: string) => {
  if (line[x] === "#") result1++;

  x += 1;
  if (x / 31 >= 1) x = x % 31;
});

// Right 3, down 1
x = 0;
input.forEach((line: string) => {
  if (line[x] === "#") result2++;

  x += 3;
  if (x / 31 >= 1) x = x % 31;
});

// Right 5, down 1
x = 0;
input.forEach((line: string) => {
  if (line[x] === "#") result3++;

  x += 5;
  if (x / 31 >= 1) x = x % 31;
});

// Right 7, down 1
x = 0;
input.forEach((line: string) => {
  if (line[x] === "#") result4++;

  x += 7;
  if (x / 31 >= 1) x = x % 31;
});

// Right 1, down 2
x = 0;
input.forEach((line: string, y: number) => {
  if (y % 2 === 0) {
    if (line[x] === "#") result5++;

    x += 1;
    if (x / 31 >= 1) x = x % 31;
  }
});

console.log(
  "And the answer is:",
  result1 * result2 * result3 * result4 * result5
);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
