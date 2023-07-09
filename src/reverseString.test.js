import { reverseString } from "./reverseString";
test("Reverse a String", () => {
  expect(reverseString("Cat")).toBe("taC");
});
test("Reverse a String", () => {
  expect(reverseString("")).toBe("");
});
test("Reverse a String", () => {
  expect(reverseString("I love you")).toBe("uoy evol I");
});
