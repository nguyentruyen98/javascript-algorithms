// * Reference: https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/

import { RANDOM_ARRAY, testPerformance } from "../utils/index.js";

const defaultHighValue = RANDOM_ARRAY.length - 1;
export function quickSort(arr, low = 0, high = defaultHighValue) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;
  if (low < high) {
    const partition = findPartition(arr, low, high);
    quickSort(arr, low, partition - 1);
    quickSort(arr, partition + 1, high);
  }
  return arr;
}

function findPartition(arr, low, high) {
  const pivot = arr[high];
  let pIndex = low;

  for (let index = low; index <= high - 1; index++) {
    if (arr[index] < pivot) {
      [arr[index], arr[pIndex]] = [arr[pIndex], arr[index]];
      pIndex += 1;
    }
  }
  [arr[pIndex], arr[high]] = [arr[high], arr[pIndex]];

  return pIndex;
}
