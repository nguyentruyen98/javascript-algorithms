//* Ref: https://leetcode.com/problems/find-the-distinct-difference-array/

function distinctDifferenceArray(nums) {
  const arrLength = nums.length;
  const result = [];
  for (let i = 1; i <= arrLength; i++) {
    const leftSide = [...new Set(nums.slice(0, i))].length;
    const rightSide = [...new Set(nums.slice(i, arrLength))].length;
    result.push(leftSide - rightSide);
  }
  return result;
}
const a = distinctDifferenceArray([1, 2, 3, 4, 5]);
console.log(a);
