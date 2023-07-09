import { caesarCipher } from "./caesarCipher";

test("Caesar Cipher", () => {
  expect(caesarCipher("Cat", 2)).toBe("Ecv");
});
test("Caesar Cipher", () => {
  expect(caesarCipher("abcdABCD", 2)).toBe("cdefCDEF");
});
test("Caesar Cipher", () => {
  expect(caesarCipher("abc!!", 2)).toBe("cde!!");
});
test("Caesar Cipher", () => {
  expect(caesarCipher("abcd ABCD", 2)).toBe("cdef CDEF");
});
