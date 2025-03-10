import { RANDOM_ARRAY, swap, testPerformance } from "../utils/index.js";

export const bubbleSort = (arr) => {
  let stopIndex = arr.length;
  while (stopIndex > 1) {
    for (let i = 0; i < stopIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        const [b, a] = swap(arr[i], arr[i + 1]);
        arr[i] = b;
        arr[i + 1] = a;
      }
    }
    stopIndex--;
  }
  return arr;
};
bubbleSort(RANDOM_ARRAY);
testPerformance(bubbleSort);
