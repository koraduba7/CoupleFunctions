import { capitalizeWords } from "../tasks/capitalizeWords";

test("hello my friend --> Hello My Friend", () => {
  expect(capitalizeWords("hello my friend")).toStrictEqual("Hello My Friend");
});

test("h --> H", () => {
  expect(capitalizeWords("h")).toStrictEqual("H");
});

test("hello --> Hello", () => {
  expect(capitalizeWords("hello")).toStrictEqual("Hello");
});

test(" --> ", () => {
  expect(capitalizeWords("")).toStrictEqual("");
});
