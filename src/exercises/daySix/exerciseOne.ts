import { readFile } from "../utils/readFile";

const start = process.hrtime();

const input = readFile("daySix", true).map((group: string): string =>
  group.replace(/\n/g, " ")
);
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = 0;

input.forEach((line: string) => {
  alphabet.forEach((letter: string) => {
    if (line.includes(letter)) result++;
  });
});

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
