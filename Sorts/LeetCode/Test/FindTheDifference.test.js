import { findTheDifference } from "../FindTheDifference.js";

test("case 1", () => {
  const result = findTheDifference("abcd", "abcde");
  expect(result).toEqual("e");
});

test("case 2", () => {
  const result = findTheDifference("sawf", "fawst");
  expect(result).toEqual("t");
});
