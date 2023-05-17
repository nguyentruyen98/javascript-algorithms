import { isAnagram } from "../IsAnagram.js";

test("case 1", () => {
  const result = isAnagram("anagram", "nagaram");
  expect(result).toEqual(true);
});
test("case 2", () => {
  const result = isAnagram("rat", "car");
  expect(result).toEqual(false);
});
