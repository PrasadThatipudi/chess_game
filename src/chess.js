import { Piece } from "./piece.js";
import _ from "lodash";
import boardTemplate from "./board_template.json" with { type: "json" };

class Chess {
  #board;

  constructor() {
    this.#board = this.#instantiatePieces(boardTemplate);
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
