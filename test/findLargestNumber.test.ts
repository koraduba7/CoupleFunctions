import { findLargestNumber } from "../tasks/findLargestNumber";

test("expect [1,2,3] to equals 3", () => {
  expect(findLargestNumber([1, 2, 3])).toStrictEqual(3);
});

test("expect [7] to equals 7", () => {
  expect(findLargestNumber([7])).toStrictEqual(7);
});

test("expect [-100,-10,-1] to equals -1", () => {
  expect(findLargestNumber([-100, -10, -1])).toStrictEqual(-1);
});
