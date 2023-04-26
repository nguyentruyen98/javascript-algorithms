import { RANDOM_ARRAY, testPerformance } from "../utils/index.js";

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

export function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  console.log(
    `Left: ${left} right: ${right},result: ${merge([...left], [...right])}`
  );
  return merge(left, right);
}

const a = mergeSort([10, 24, 5, 6, 76, 4, 6, 73]);
console.log(a);
