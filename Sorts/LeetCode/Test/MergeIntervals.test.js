import { merge } from "../MergeIntervals.js";


test("case 1", () => {
  const result = merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
  expect(result).toEqual([[1, 6], [8, 10], [15, 18]]);
});
test("case 2", () => {
  const result = merge([[1, 4], [4, 5]]);
  expect(result).toEqual([[1, 5]]);
});