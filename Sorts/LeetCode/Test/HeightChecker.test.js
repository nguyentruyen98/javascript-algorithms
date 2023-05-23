import { heightChecker } from "../HeightChecker";

test("case 1", () => {
  const result = heightChecker([1, 1, 4, 2, 1, 3]);
  expect(result).toEqual(3);
});

test("case 2", () => {
  const result = heightChecker([5, 1, 2, 3, 4]);
  expect(result).toEqual(5);
});
test("case 3", () => {
  const result = heightChecker([1, 2, 3, 4, 5]);
  expect(result).toEqual(0);
});
