import { readFile } from "../utils/readFile";

const start = process.hrtime();
const input = readFile("dayNine").map((i: string): number => parseInt(i));

let lowerIndex = 0;
let upperIndex = 24;
let incorrectNumber = -1;
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
      incorrectNumber = value;
      return true;
    }
  }
});

input.forEach((value, i) => {
  input.forEach((value, j) => {
    if (i !== j && i < j) {
      const slicedArray = input.slice(i, j + 1);
      const contiguousSequence =
        slicedArray.reduce((acc: number, val: number) => (acc += val), 0) ===
        incorrectNumber;
      if (contiguousSequence)
        result = Math.min(...slicedArray) + Math.max(...slicedArray);
    }
  });
});

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
