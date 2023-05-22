import { missingNumber } from "../MissingNumber.js";

test("case 1", () => {
  const result = missingNumber([0, 1]);
  expect(result).toEqual(2);
});
test("case 2", () => {
  const result = missingNumber([0, 3, 1]);
  expect(result).toEqual(2);
});
test("case 3", () => {
  const result = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
  expect(result).toEqual(8);
});
