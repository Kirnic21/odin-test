import { captalise } from "./captalize";
test("Captalize First Letter from a  String", () => {
  expect(captalise("cat")).toBe("Cat");
});
test("Captalize First Letter from a  String", () => {
  expect(captalise("Pizza")).toBe("Pizza");
});
test("Captalize First Letter from a  String", () => {
  expect(captalise("lasagna is the best thing ever")).toBe(
    "Lasagna is the best thing ever",
  );
});
