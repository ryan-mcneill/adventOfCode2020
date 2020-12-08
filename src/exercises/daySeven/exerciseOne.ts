import { readFile } from "../utils/readFile";

const start = process.hrtime();
const input = readFile("daySeven").reduce((acc, line: string) => {
  const splitItems = line
    .split(/ contain |, |\./)
    .filter((item: string) => item !== "")
    .map((item: string) => item.replace("bags", "bag"));

  let transformedItems = {};

  if (splitItems.includes("no other bag")) {
    acc = { ...acc, [splitItems[0]]: 0 };
  } else {
    transformedItems = splitItems
      .filter((value: string, index: number) => index !== 0)
      .reduce((acc, curr: string) => {
        const quantity = curr.substr(0, 1);
        const name = curr.substr(2);
        acc = { ...acc, [name]: quantity };
        return acc;
      }, {});
    acc = { ...acc, [splitItems[0]]: { ...transformedItems } };
  }

  return acc;
}, {});

let result = 0;
const bagTypesCounted: string[] = [];

const getTotal = (searchTerm: string) => {
  Object.keys(input).forEach((bag) => {
    if (
      !bagTypesCounted.includes(bag) &&
      // @ts-ignore
      Object.keys(input[bag]).includes(searchTerm)
    ) {
      bagTypesCounted.push(bag);
      result++;
      getTotal(bag);
    }
  });
};

getTotal("shiny gold bag");

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
