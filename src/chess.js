import { Piece } from "./piece.js";
import _ from "lodash";
import { combinations, splitOn } from "./util.js";
// import boardTemplate from "./board_template.json" with { type: "json" };

const debug = function (arg) {
  console.log(arg);
  return arg;
};

class Chess {
  #board;

  constructor(boardTemplate) {
    this.#board = this.#instantiatePieces(boardTemplate);
  }

  diagonal(piecePosition) {
    const { column, row } = piecePosition;

    const colIds = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const rowIds = _.range(1, 9).map(String);

    const colGroups = splitOn(colIds, column);
    const rowGroups = splitOn(rowIds, row);

    const allCombinations = combinations(rowGroups, colGroups);
    const possibles = allCombinations.map(([column, row]) => ({ column, row }));

    return new Set(possibles);
  }

  #instantiatePieces(boardTemplate) {
    const board = {};

    _.forEach(boardTemplate, (rowValues, rowId) => {
      const row = {};

      _.forEach(rowValues, (pieceInfo, columnId) => {
        row[columnId] = new Piece(...pieceInfo);
      });

      board[rowId] = row;
    });

    return board;
  }
}

export { Chess };
