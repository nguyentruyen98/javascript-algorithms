//* Ref: https://en.wikipedia.org/wiki/Odd%E2%80%93even_sort

import { swapEl } from "../utils/index.js";

export function oddEvenSort(arr) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swapEl(arr, i, i + 1);
        isSorted = false;
      }
    }
    for (let i = 1; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swapEl(arr, i, i + 1);
        isSorted = false;
      }
    }
  }
  return arr;
}
oddEvenSort([0, 0, -1]);
