import { Piece } from "./piece.js";
import _ from "lodash";
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

    const possiblePositions = new Set();

    const colGroup1 = colIds.slice(colIds.indexOf(column) + 1);
    const rowGroup1 = rowIds.slice(rowIds.indexOf(row) + 1);

    for (const index in colGroup1) {
      const possiblePosition = {
        column: colGroup1.at(index),
        row: rowGroup1.at(index),
      };

      possiblePositions.add(possiblePosition);
    }

    return possiblePositions;
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
