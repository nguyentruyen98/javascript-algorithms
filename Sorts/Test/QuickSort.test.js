import fc from "fast-check";
import { quickSort } from "../QuickSort";
test("should produce an ordered array", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (array) => {
      const sorted = quickSort(array, 0, array.length - 1);
      for (let idx = 1; idx < sorted.length; ++idx) {
        expect(sorted[idx - 1]).toBeLessThanOrEqual(sorted[idx]);
      }
    })
  );
});

test("should have the same length as source", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (array) => {
      const sorted = quickSort(array, 0, array.length - 1);
      expect(sorted).toHaveLength(array.length);
    })
  );
});
