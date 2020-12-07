import { BoardingDetails } from "./types";
import { getInput } from "./utils";

const start = process.hrtime();

const input = getInput();

const result = input.reduce(
  // @ts-ignore TypeScript never likes when you modify the return value but this is a valid approach
  (highestSeatID: number, { seatID }: BoardingDetails) => {
    if (seatID > highestSeatID) highestSeatID = seatID;
    return highestSeatID;
  },
  0
);

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
