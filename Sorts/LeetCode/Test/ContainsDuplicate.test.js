import { containsDuplicate } from "../ContainsDuplicate.js";

test("case 1", () => {
  const result = containsDuplicate([1, 2, 3, 4, 1]);
  expect(result).toEqual(true);
});
test("case 2", () => {
  const result = containsDuplicate([1, 2, 3, 4]);
  expect(result).toEqual(false);
});
