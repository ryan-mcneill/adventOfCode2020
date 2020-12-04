import { readFile } from "../utils/readFile";
import {
  validateHeight,
  validateHex,
  validateInt,
  validateOneOf,
  validatePID,
} from "./utils";
import { PassportData } from "./types";

const start = process.hrtime();

const processPassportData = (fileContents: string[]): PassportData[] => {
  return fileContents.map((data: string) => {
    let processedInput: PassportData = {};
    const line = data.split(/[ \n]/);
    line.forEach((item: string) => {
      const splitItem = item.split(":");
      processedInput = { ...processedInput, [splitItem[0]]: splitItem[1] };
    });
    return processedInput;
  });
};

const input = processPassportData(readFile("dayFour", true));

const validateInput = ({
  byr,
  iyr,
  eyr,
  hgt,
  hcl,
  ecl,
  pid,
}: PassportData): boolean => {
  if (!validateInt(byr, 1920, 2002)) return false;
  if (!validateInt(iyr, 2010, 2020)) return false;
  if (!validateInt(eyr, 2020, 2030)) return false;
  if (!validateHeight(hgt)) return false;
  if (!validateHex(hcl)) return false;
  if (!validateOneOf(ecl, ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]))
    return false;
  return validatePID(pid);
};

let result: number = 0;
input.forEach((line: PassportData) => {
  if (validateInput(line)) result++;
});

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
