import { getData } from "./utils/getData";

const input = getData();

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
