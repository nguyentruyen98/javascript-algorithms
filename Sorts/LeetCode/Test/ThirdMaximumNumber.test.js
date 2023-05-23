import { thirdMax } from "../ThirdMaximumNumber.js";
test("case 1", () => {
  const result = thirdMax([3, 2, 1]);
  expect(result).toEqual(1);
});
test("case 2", () => {
  const result = thirdMax([1, 2]);
  expect(result).toEqual(2);
});
test("case 1", () => {
  const result = thirdMax([3, 2, 2, 1]);
  expect(result).toEqual(1);
});
