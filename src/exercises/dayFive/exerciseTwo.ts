import { BoardingDetails } from "./types";
import { getInput } from "./utils";

const start = process.hrtime();

const input = getInput();

let result = -1;

input
  .sort((a: BoardingDetails, b: BoardingDetails) =>
    a.seatID > b.seatID ? 1 : -1
  )
  .forEach(({ seatID }, index: number, allPassengers: BoardingDetails[]) => {
    if (
      index !== allPassengers.length - 1 &&
      allPassengers[index + 1]?.seatID - seatID !== 1
    ) {
      result = seatID + 1;
    }
  });

console.log("And the answer is:", result);

const end = process.hrtime(start);
console.info("Execution time: %dms", end[1] / 1000000);
