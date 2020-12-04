const fs = require("fs");
const path = require("path");

export const readFile = (fileName: string, doubleSplit?: boolean): string[] =>
  fs
    .readFileSync(path.resolve(__dirname, `../data/${fileName}.txt`), "utf8")
    .split(doubleSplit ? /\n\n/ : /\n/);
