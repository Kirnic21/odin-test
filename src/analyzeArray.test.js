import { analyzeArray } from "./analyzeArray";

test("Analyze Array", () => {
  expect(analyzeArray([1, 2, 3]).average).toBe(2);
});
test("Analyze Array", () => {
  expect(analyzeArray([1000, 2, 3, 3, 23, 2, 54354325]).max).toBe(54354325);
});
test("Analyze Array", () => {
  expect(analyzeArray([1, 2, 3]).min).toBe(1);
});
test("Analyze Array", () => {
  expect(analyzeArray([1, 2, 3]).length).toBe(3);
});
