import { readFile } from "../utils/readFile";

const start = process.hrtime();

const input = readFile("daySix", true).map((group: string): string[] =>
  group.split(/\n/)
);
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = 0;

input.forEach((group: string[]) => {
  let groupResult = 0;
  alphabet.forEach((letter: string) => {
    let hasLetter = true;
    group.forEach((person: string) => {
      if (!person.includes(letter)) hasLetter = false;
    });
    if (hasLetter) groupResult++;
  });
  result += groupResult;
});

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
