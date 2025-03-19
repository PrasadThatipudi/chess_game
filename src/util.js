const splitOn = (list, threshold) => {
  const splitIndex = list.indexOf(threshold);

  const groups = [list.slice(0, splitIndex), list.slice(splitIndex + 1)];
  return groups;
};

const combine = (list1, list2) => {
  const minList = list1.length < list2.length ? list1 : list2;
  const combinedList = [];

  for (const index in minList) {
    combinedList.push([list1.at(index), list2.at(index)]);
  }

  return combinedList;
};

const combinations = (rowGroups, colGroups) => {
  const combinations = rowGroups.flatMap((_, index) =>
    combine(colGroups.at(index), rowGroups.at(index))
  );

  const reverseOfRowGroup = rowGroups.toReversed();

  const reverseCombinations = reverseOfRowGroup.flatMap((_, index) =>
    combine(colGroups.at(index).toReversed(), reverseOfRowGroup.at(index))
  );

  combinations.push(...reverseCombinations);

  const possibles = combinations.map(([column, row]) => ({
    column,
    row,
  }));
  return new Set(possibles);
};

export { combinations, splitOn };
