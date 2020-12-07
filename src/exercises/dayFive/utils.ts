import { readFile } from "../utils/readFile";
import { BoardingDetails } from "./types";

const calculateNumber = (sequence: string) => {
  const seqArray = sequence.split("");
  let min = 0;
  let max = Math.pow(2, sequence.length) - 1;

  seqArray.forEach((char: string) => {
    if (char === "F" || char === "L") {
      max -= (max - min + 1) / 2;
    } else if (char === "B" || char === "R") {
      min += (max - min + 1) / 2;
    } else throw new Error("Invalid character provided.");
  });

  return min;
};

const calculateSeatID = (row: number, column: number): number =>
  row * 8 + column;

export const getInput = () =>
  readFile("dayFive").map(
    (uid: string): BoardingDetails => {
      try {
        const row = calculateNumber(uid.substr(0, 7));
        const column = calculateNumber(uid.substr(7, 3));
        return {
          uid,
          row,
          column,
          seatID: calculateSeatID(row, column),
        };
      } catch (e) {
        console.error(e);
        return {
          uid: "ERROR",
          row: -1,
          column: -1,
          seatID: -1,
        };
      }
    }
  );
