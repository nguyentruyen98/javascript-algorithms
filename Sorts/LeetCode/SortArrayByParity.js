//* Ref: https://leetcode.com/problems/sort-array-by-parity/
import { swapEl } from "../../utils/index.js";
function sortArrayByParity(nums) {
  let oddIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      swapEl(nums, i, oddIdx);
      oddIdx++;
    }
  }
  return nums;
}
export { sortArrayByParity };
