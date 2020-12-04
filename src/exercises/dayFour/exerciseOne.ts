import { readFile } from "../utils/readFile";

const start = process.hrtime();
const input = readFile("dayFour", true);

let result: number = 0;
input.forEach((line: string) => {
  if (
    line
      .split("\n")
      .join(" ")
      .match(
        /^(?=.*byr:)(?=.*iyr:)(?=.*eyr:)(?=.*hgt:)(?=.*hcl:)(?=.*ecl:)(?=.*pid:).+/
      )
  )
    result++;
});

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
