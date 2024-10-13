import { palindromeChecker } from "../tasks/palindromeChecker";

test("dog --> false", () => {
  expect(palindromeChecker("dog")).toStrictEqual(false);
});

test("dad --> true", () => {
  expect(palindromeChecker("dad")).toStrictEqual(true);
});

test(" --> true", () => {
  expect(palindromeChecker("")).toStrictEqual(true);
});
