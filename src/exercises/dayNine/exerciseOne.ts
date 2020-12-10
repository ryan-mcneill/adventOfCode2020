import { readFile } from "../utils/readFile";

const start = process.hrtime();
const input = readFile("dayNine").map((i: string): number => parseInt(i));

let lowerIndex = 0;
let upperIndex = 24;
let result = -1;

const testSum = (number: number, arr: number[]): boolean =>
  arr.some((value: number, index) =>
    arr.slice(index + 1).includes(number - value)
  );

input.some((value: number, index: number) => {
  if (index > upperIndex) {
    if (testSum(value, input.slice(lowerIndex, upperIndex + 1))) {
      lowerIndex++;
      upperIndex++;
    } else {
      result = value;
      return true;
    }
  }
});

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
