import { sortArrayByParity } from "../SortArrayByParity.js";
test("case 1", () => {
  const result = sortArrayByParity([3, 1, 2, 4]);
  expect(result).toEqual([2, 4, 3, 1]);
});
test("case 2", () => {
  const result = sortArrayByParity([0]);
  expect(result).toEqual([0]);
});
