import { RANDOM_ARRAY, swap, testPerformance } from "../utils/index.js";
export function insertionSort(arr) {
  let startPoint = 1;
  let currentValue;
  while (startPoint < 10) {
    currentValue = arr[startPoint];
    for (let i = startPoint - 1; i >= 0; i--) {
      if (arr[i] > currentValue) {
        arr[i + 1] = arr[i];
        arr[i] = currentValue;
      }
    }
    startPoint++;
  }
  return arr;
}

// testPerformance(insertionSort);
