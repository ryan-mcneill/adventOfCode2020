const fs = require("fs");
const path = require("path");

export const getData = (): number[] => {
  const file = fs.readFileSync(
    path.resolve(__dirname, "../data/input.txt"),
    "utf8"
  );
  return file.split(/\n/).map((i: string): number => parseInt(i));
};
