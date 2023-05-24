//* Ref: https://leetcode.com/problems/sort-array-by-parity-ii/description/
import { swapEl } from "../../utils/index.js";
function sortArrayByParityII(nums) {
  let evenIdx = 0;
  let oddIdx = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[evenIdx] % 2 === 1 && nums[oddIdx] % 2 === 0) {
      [nums[evenIdx], nums[oddIdx]] = [nums[oddIdx], nums[evenIdx]];
    }
    if (nums[evenIdx] % 2 === 0) {
      evenIdx += 2;
    }
    if (nums[oddIdx] % 2 === 1) {
      oddIdx -= 2;
    }
  }
  return nums;
}
export { sortArrayByParityII };
