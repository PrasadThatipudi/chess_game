import { Piece } from "./piece.js";

const templateFile = "./src/board_template.json";

const boardTemplate = JSON.parse(Deno.readTextFileSync(templateFile));

const instantiatePieces = (boardTemplate) => {
  const board = {};

  Object.entries(boardTemplate).forEach(([rowId, rowValues]) => {
    const row = {};

    Object.entries(rowValues).forEach(([columnId, pieceInfo]) => {
      row[columnId] = new Piece(pieceInfo);
    });

    board[rowId] = row;
  });

  return board;
};

instantiatePieces(boardTemplate);
