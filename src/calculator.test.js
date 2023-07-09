import { calculator } from "./calculator";
test("Calculator", () => {
  expect(calculator.sum(2, 4)).toBe(6);
});
test("Calculator", () => {
  expect(calculator.subtraction(5, 3)).toBe(2);
});
test("Calculator", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});
test("Calculator", () => {
  expect(calculator.division(8, 2)).toBe(4);
});
test("Calculator", () => {
  expect(calculator.division(5, 0)).toBe("YOU CANT DIVIDE BY ZERO");
});
