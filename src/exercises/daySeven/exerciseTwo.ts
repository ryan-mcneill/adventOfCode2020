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

const getTotal = (searchTerm: string, quantity: number) => {
  // @ts-ignore
  Object.keys(input[searchTerm]).forEach((key: string) => {
    // @ts-ignore
    if (!bagTypesCounted.includes(key)) {
      // @ts-ignore
      result += quantity * input[searchTerm][key];
      // @ts-ignore
      getTotal(key, input[searchTerm][key] * quantity);
    }
  });
};

getTotal("shiny gold bag", 1);

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
