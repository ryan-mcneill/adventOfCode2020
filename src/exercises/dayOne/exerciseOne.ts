import { readFile } from "../utils/readFile";

const start = process.hrtime();
const input = readFile("dayOne").map((i: string): number => parseInt(i));

const result = input.reduce(
  (acc: number, num1: number, index: number, arr: number[]): number => {
    const twentyTwenty = arr.find(
      (num2: number): boolean => num1 + num2 === 2020
    );
    if (twentyTwenty) acc = twentyTwenty * num1;
    return acc;
  },
  0
);

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
