import { sumArrayElements } from "../tasks/sumArrayElements";

test("[1,2,3,4] --> 10", () => {
  expect(sumArrayElements([1, 2, 3, 4])).toStrictEqual(10);
});

test("[] --> ", () => {
  expect(sumArrayElements([])).toStrictEqual("error");
});

test("[-100,-10,-1] --> -111", () => {
  expect(sumArrayElements([-100, -10, -1])).toStrictEqual(-111);
});
