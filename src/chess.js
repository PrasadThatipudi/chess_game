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

  #splitOn(list, threshold) {
    const splitIndex = list.indexOf(threshold);

    const groups = [list.slice(0, splitIndex), list.slice(splitIndex + 1)];
    return groups;
  }

  #combine(list1, list2) {
    const minList = list1.length < list2.length ? list1 : list2;
    const combinedList = [];

    for (const index in minList) {
      combinedList.push([list1.at(index), list2.at(index)]);
    }

    return combinedList;
  }

  #combinations(rowGroups, colGroups) {
    const combinations = rowGroups.flatMap((_, index) =>
      this.#combine(colGroups.at(index), rowGroups.at(index))
    );

    const reverseOfRowGroup = rowGroups.toReversed();

    const reverseCombinations = reverseOfRowGroup.flatMap((_, index) =>
      this.#combine(colGroups.at(index), reverseOfRowGroup.at(index))
    );

    combinations.push(...reverseCombinations);

    const possibles = combinations.map(([column, row]) => ({
      column,
      row,
    }));
    return new Set(possibles);
  }

  diagonal(piecePosition) {
    const { column, row } = piecePosition;

    const colIds = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const rowIds = _.range(1, 9).map(String);

    const colGroups = this.#splitOn(colIds, column);
    const rowGroups = this.#splitOn(rowIds, row);

    return this.#combinations(rowGroups, colGroups);
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
