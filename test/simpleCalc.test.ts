import { simpleCalc } from "../tasks/simpleCalc";

test("1+1 --> 2", () => {
  expect(simpleCalc(1, 1, "+")).toStrictEqual(2);
});

test("-100 + -100 --> -200", () => {
  expect(simpleCalc(-100, -100, "+")).toStrictEqual(-200);
});

test("1-1 --> 0", () => {
  expect(simpleCalc(1, 1, "-")).toStrictEqual(0);
});

test("10-100 --> -90", () => {
  expect(simpleCalc(10, 100, "-")).toStrictEqual(-90);
});

test("1*1 --> 1", () => {
  expect(simpleCalc(1, 1, "*")).toStrictEqual(1);
});

test("20*2 --> 40", () => {
  expect(simpleCalc(20, 2, "*")).toStrictEqual(40);
});

test("1/0 --> error", () => {
  expect(simpleCalc(1, 0, "/")).toStrictEqual("error");
});

test("10/2 --> 5", () => {
  expect(simpleCalc(10, 2, "/")).toStrictEqual(5);
});
