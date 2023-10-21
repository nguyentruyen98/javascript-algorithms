//* Ref: https://leetcode.com/problems/chunk-array/description/

function chunk(arr, size) {
  return spliceArr(arr, size);
}
function spliceArr(arr, size) {
  if (arr.length === 0) return [];
  if (size >= arr.length) return [arr];
  const leftSide = arr.slice(0, size);
  const rightSide = arr.slice(size);
  return [leftSide, ...spliceArr(rightSide, size)];
}
const a = chunk([], 1);
console.log(a);
