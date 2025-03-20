const splitOn = (list, threshold) => {
  const splitIndex = list.indexOf(threshold);

  const groups = [list.slice(0, splitIndex), list.slice(splitIndex + 1)];
  return groups;
};

const shortestList = (lists) =>
  lists.reduce(
    (list, short) => (list.length < short.length ? list : short),
    lists.at(0)
  );

const combine = (list1, list2) => {
  const minList = shortestList([list1, list2]);

  return minList.map((_, index) => [list1.at(index), list2.at(index)]);
};

const combinations = (rowGroups, colGroups) => {
  const combinations = rowGroups.flatMap((_, index) =>
    combine(colGroups.at(index), rowGroups.at(index))
  );

  const reverseOfColGroup = colGroups.toReversed();

  const reverseCombinations = reverseOfColGroup.flatMap((_, index) =>
    combine(reverseOfColGroup.at(index), rowGroups.at(index).toReversed())
  );

  combinations.push(...reverseCombinations);

  return combinations;
};

export { combinations, splitOn };
