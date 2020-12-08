import { readFile } from "../utils/readFile";

const start = process.hrtime();
const input = readFile("dayEight");

let accumulator = 0;
let visited: number[] = [];
let result: number | undefined = undefined;

const executeOperations = (
  index: number = 0,
  array = input,
  visitedIndices: number[] = visited
) => {
  if (!visitedIndices.includes(index)) {
    visitedIndices.push(index);
    const variable = array[index].replace(/acc |jmp |nop /, "");
    const plus = variable.includes("+");
    const number = parseInt(variable.replace(/[+-]/, ""));
    if (array[index].includes("acc")) {
      const nextIndex = index + 1;
      accumulator = plus ? accumulator + number : accumulator - number;
      array[nextIndex]
        ? executeOperations(index + 1, array, visitedIndices)
        : (result = accumulator);
    } else if (array[index].includes("jmp")) {
      const nextIndex = plus ? index + number : index - number;
      array[nextIndex]
        ? executeOperations(nextIndex, array, visitedIndices)
        : (result = accumulator);
    } else {
      const nextIndex = index + 1;
      array[nextIndex]
        ? executeOperations(nextIndex, array, visitedIndices)
        : (result = accumulator);
    }
  }
};

executeOperations();

visited.forEach((index: number) => {
  if (input[index].includes("jmp")) {
    accumulator = 0;
    const modifiedArray = [...input];
    const visitedIndices: number[] = [];
    modifiedArray.splice(index, 1, input[index].replace("jmp", "nop"));
    executeOperations(0, modifiedArray, visitedIndices);
  } else if (input[index].includes("nop")) {
    accumulator = 0;
    const modifiedArray = [...input];
    const visitedIndices: number[] = [];
    modifiedArray.splice(index, 1, input[index].replace("nop", "jmp"));
    executeOperations(0, modifiedArray, visitedIndices);
  }
});

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
