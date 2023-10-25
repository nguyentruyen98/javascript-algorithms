//* Ref: https://leetcode.com/problems/filter-elements-from-array/description/
function filter(arr, fn) {
  const result = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
}
