import fc from "fast-check";
import { insertionSort } from "../InsertionSort";
test("should produce an ordered array", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (array) => {
      const sorted = insertionSort(array);
      for (let idx = 1; idx < sorted.length; ++idx) {
        expect(sorted[idx - 1]).toBeLessThanOrEqual(sorted[idx]);
      }
    })
  );
});

test("should have the same length as source", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (array) => {
      const sorted = insertionSort(array);
      expect(sorted).toHaveLength(array.length);
    })
  );
});
