import { removeDuplicates } from "../tasks/removeDuplicates";

test("[1,2,3,4,5,6] -> [1,2,3,4,5,6]", () => {
  expect(removeDuplicates([1, 2, 3, 4, 5, 6])).toStrictEqual([
    1, 2, 3, 4, 5, 6,
  ]);
});

test("[1,1,1,1,1] -> [1]", () => {
  expect(removeDuplicates([1, 1, 1, 1, 1])).toStrictEqual([1]);
});

test("[2,2,3,3,4,4,5,5] -> [2,3,4,5]", () => {
  expect(removeDuplicates([2, 2, 3, 3, 4, 4, 5, 5])).toStrictEqual([
    2, 3, 4, 5,
  ]);
});

test("[] -> []", () => {
  expect(removeDuplicates([])).toStrictEqual([]);
});
