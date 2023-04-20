import { RANDOM_ARRAY, swap, testPerformance } from "../utils/index.js";

export function insertionSort(arr) {
  let minValue = arr[0];
  let index;
  let startPoint = 0;
  let isSwap = false;
  while (startPoint < arr.length) {
    for (let i = startPoint; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i];
        index = i;
        isSwap = true;
      }
    }
    if (isSwap) {
      const [b, a] = swap(arr[startPoint], arr[index]);
      arr[startPoint] = b;
      arr[index] = a;
    }
    startPoint++;
    minValue = arr[startPoint];
    isSwap = false;
  }

  return arr;
}
testPerformance(insertionSort);
