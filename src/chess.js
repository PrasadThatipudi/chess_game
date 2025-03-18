import { Piece } from "./piece.js";

const debug = function (arg) {
  console.log(arg);
  return arg;
};

const templateFile = "./src/board_template.json";

const boardTemplate = JSON.parse(Deno.readTextFileSync(templateFile));

console.log(boardTemplate);

Object.entries(boardTemplate).map(([_, colValues]) =>
  Object.entries(colValues).map(([_, pieceInfo]) =>
    debug(new Piece(...debug(pieceInfo)).position)
  )
);
