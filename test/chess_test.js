import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { Chess } from "../src/chess.js";

describe("diagonal", () => {
  describe("only one piece on the board", () => {
    describe("when piece is at an edge", () => {
      it("left bottom edge", () => {
        const piecePosition = { column: "A", row: "1" };
        const board_template = {
          1: { A: ["bishop", "white", piecePosition] },
        };
        const possiblePositions = [
          { column: "B", row: "2" },
          { column: "C", row: "3" },
          { column: "D", row: "4" },
          { column: "E", row: "5" },
          { column: "F", row: "6" },
          { column: "G", row: "7" },
          { column: "H", row: "8" },
        ];

        const expected = new Set(possiblePositions);
        const chess = new Chess(board_template);

        assertEquals(chess.diagonal(piecePosition), expected);
      });

      it("left top edge", () => {
        const piecePosition = { column: "A", row: "8" };
        const board_template = {
          1: { A: ["bishop", "white", piecePosition] },
        };
        const possiblePositions = [
          { column: "B", row: "7" },
          { column: "C", row: "6" },
          { column: "D", row: "5" },
          { column: "E", row: "4" },
          { column: "F", row: "3" },
          { column: "G", row: "2" },
          { column: "H", row: "1" },
        ];

        const expected = new Set(possiblePositions);
        const chess = new Chess(board_template);

        assertEquals(chess.diagonal(piecePosition), expected);
      });

      it("right bottom edge", () => {
        const piecePosition = { column: "H", row: "1" };
        const board_template = {
          1: { A: ["bishop", "white", piecePosition] },
        };
        const possiblePositions = [
          { column: "A", row: "8" },
          { column: "B", row: "7" },
          { column: "C", row: "6" },
          { column: "D", row: "5" },
          { column: "E", row: "4" },
          { column: "F", row: "3" },
          { column: "G", row: "2" },
        ];

        const expected = new Set(possiblePositions);
        const chess = new Chess(board_template);

        assertEquals(chess.diagonal(piecePosition), expected);
      });

      it("right top edge", () => {
        const piecePosition = { column: "H", row: "8" };
        const board_template = {
          1: { A: ["bishop", "white", piecePosition] },
        };
        const possiblePositions = [
          { column: "A", row: "1" },
          { column: "B", row: "2" },
          { column: "C", row: "3" },
          { column: "D", row: "4" },
          { column: "E", row: "5" },
          { column: "F", row: "6" },
          { column: "G", row: "7" },
        ];

        const expected = new Set(possiblePositions);
        const chess = new Chess(board_template);

        assertEquals(chess.diagonal(piecePosition), expected);
      });
    });

    describe("when piece in middle", () => {
      it("when piece is at middle of row 1", () => {
        const piecePosition = { column: "D", row: "1" };
        const board_template = {
          1: { A: ["bishop", "white", piecePosition] },
        };
        const possiblePositions = [
          { column: "A", row: "4" },
          { column: "B", row: "3" },
          { column: "C", row: "2" },
          { column: "E", row: "2" },
          { column: "F", row: "3" },
          { column: "G", row: "4" },
          { column: "H", row: "5" },
        ];

        const expected = new Set(possiblePositions);
        const chess = new Chess(board_template);

        assertEquals(chess.diagonal(piecePosition), expected);
      });

      it("when piece is at middle of column A", () => {
        const piecePosition = { column: "A", row: "5" };
        const board_template = {
          1: { A: ["bishop", "white", piecePosition] },
        };
        const possiblePositions = [
          { column: "B", row: "4" },
          { column: "C", row: "3" },
          { column: "D", row: "2" },
          { column: "E", row: "1" },
          { column: "B", row: "6" },
          { column: "C", row: "7" },
          { column: "D", row: "8" },
        ];

        const expected = new Set(possiblePositions);
        const chess = new Chess(board_template);

        assertEquals(chess.diagonal(piecePosition), expected);
      });
    }); 
  });
});
