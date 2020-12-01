import { getData } from "./utils/getData";

const input = getData();

const result = input.reduce((acc: number, num1: number): number => {
  const firstMatch = input.reduce((acc: number, num2: number) => {
    const secondMatch = input.find(
      (num3: number): boolean => num1 + num2 + num3 === 2020
    );
    if (secondMatch) acc = secondMatch * num2;
    return acc;
  }, 0);
  if (firstMatch) acc = firstMatch * num1;
  return acc;
}, 0);

console.log("And the answer is:", result);
