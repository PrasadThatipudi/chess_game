import { beforeEach, describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { Chess } from "../src/chess.js";

describe("diagonal", () => {
  describe("more than one piece on the board", () => {
    it("should return nothing if there are no possible moves", () => {
      const board_template = {
        1: { A: ["bishop", "white", { column: "A", row: "1" }] },
        2: { B: ["pawn", "white", { column: "B", row: "2" }] },
      };

      const piecePosition = { column: "A", row: "1" };
      const expected = new Set();
      const chess = new Chess(board_template);

      assertEquals(chess.diagonal(piecePosition), expected);
    });
  });

  describe("only one piece on the board", () => {
    it("when piece is at an edge", () => {
      const board_template = {
        1: { A: ["bishop", "white", { column: "A", row: "1" }] },
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

      const piecePosition = { column: "A", row: "1" };
      const expected = new Set(possiblePositions);
      const chess = new Chess(board_template);

      assertEquals(chess.diagonal(piecePosition), expected);
    });
  });
});
