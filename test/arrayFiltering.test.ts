import { arrayFiltering } from "../tasks/arrayFiltering";

test("1,2,3,4,5,6 expected to equal 2,4,6", () => {
  expect(arrayFiltering([1, 2, 3, 4, 5, 6])).toStrictEqual([2, 4, 6]);
});

test("4,2,4,4,5,6,7 expected to equal 4,2,4,4,6", () => {
  expect(arrayFiltering([4, 2, 4, 4, 5, 6, 7])).toStrictEqual([4, 2, 4, 4, 6]);
});

test("0 expected to equal 0", () => {
  expect(arrayFiltering([0])).toStrictEqual([0]);
});
