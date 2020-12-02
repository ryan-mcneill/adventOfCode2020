import { readFile } from "../utils/readFile";

const start = process.hrtime();
const input = readFile("dayTwo");

const parsedInput = input.map((entry: string) => entry.split(/-|:?\s/));
let count: number = 0;
parsedInput.forEach((entry: string[]) => {
  if (
    entry[3].match(
      new RegExp(
        "^([^" +
          entry[2] +
          "]*" +
          entry[2] +
          "){" +
          entry[0] +
          "," +
          entry[1] +
          "}[^" +
          entry[2] +
          "]*$"
      )
    )
  )
    count++;
});

console.log("The answer is: ", count);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
