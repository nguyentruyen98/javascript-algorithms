import { majorityElement } from "../MajorityElement";

test("case 1", () => {
  const result = majorityElement([3, 2, 3]);
  expect(result).toEqual(3);
});
test("case 2", () => {
  const result = majorityElement([2, 2, 1, 1, 1, 2, 2]);
  expect(result).toEqual(2);
});
