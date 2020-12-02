import { readFile } from "../utils/readFile";

const start = process.hrtime();
const input = readFile("dayTwo");

const parsedInput = input.map((entry: string) => entry.split(/-|:?\s/));
let count: number = 0;
parsedInput.forEach((entry: string[]) => {
  if (
    (entry[3][parseInt(entry[0]) - 1] === entry[2] &&
      !(entry[3][parseInt(entry[1]) - 1] === entry[2])) ||
    (!(entry[3][parseInt(entry[0]) - 1] === entry[2]) &&
      entry[3][parseInt(entry[1]) - 1] === entry[2])
  )
    count++;
});

console.log("The answer is: ", count);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
