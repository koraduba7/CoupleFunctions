import { stringReverse } from "../tasks/stringReverse";

test("hello -> olleh", () => {
  expect(stringReverse("hello")).toStrictEqual("olleh");
});

test(" -> ", () => {
  expect(stringReverse("")).toStrictEqual("");
});

test("L -> L", () => {
  expect(stringReverse("L")).toStrictEqual("L");
});
