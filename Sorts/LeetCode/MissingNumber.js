// *Ref: https://leetcode.com/problems/missing-number/

function missingNumber(nums) {
  let result = 0;
  for (let i = 0; i <= nums.length; i++) {
    result = result + i;
    if (nums[i]) {
      result = result - nums[i];
    }
  }
  return result;
}
export { missingNumber };
