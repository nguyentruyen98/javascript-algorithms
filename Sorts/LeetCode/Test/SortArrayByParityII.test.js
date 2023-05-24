import { sortArrayByParityII } from "../SortArrayByParityII";

test("case 1", () => {
  const result = sortArrayByParityII([4, 2, 5, 7]);
  expect(result).toEqual([4, 5, 2, 7]);
});
test("case 2", () => {
  const result = sortArrayByParityII([2, 3]);
  expect(result).toEqual([2, 3]);
});
