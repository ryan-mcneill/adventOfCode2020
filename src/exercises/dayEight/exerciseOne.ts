import { readFile } from "../utils/readFile";

const start = process.hrtime();
const input = readFile("dayEight");

let accumulator = 0;
let visitedIndices: number[] = [];
let result: number | undefined = undefined;

const executeOperations = (index: number = 0) => {
  if (!visitedIndices.includes(index)) {
    visitedIndices.push(index);
    const variable = input[index].replace(/acc |jmp |nop /, "");
    const plus = variable.includes("+");
    const number = parseInt(variable.replace(/[+-]/, ""));
    if (input[index].includes("acc")) {
      accumulator = plus ? accumulator + number : accumulator - number;
      executeOperations(index + 1);
    } else if (input[index].includes("jmp")) {
      executeOperations(plus ? index + number : index - number);
    } else {
      executeOperations(index + 1);
    }
  } else {
    result = accumulator;
  }
};

executeOperations();

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
