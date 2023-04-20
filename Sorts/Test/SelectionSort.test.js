import fc from "fast-check";
import { selectionSort } from "../SelectionSort";
test("should produce an ordered array", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (array) => {
      const sorted = selectionSort(array);
      for (let idx = 1; idx < sorted.length; ++idx) {
        expect(sorted[idx - 1]).toBeLessThanOrEqual(sorted[idx]);
      }
    })
  );
});

test("should have the same length as source", () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (array) => {
      const sorted = selectionSort(array);
      expect(sorted).toHaveLength(array.length);
    })
  );
});
