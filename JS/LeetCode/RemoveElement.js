// ** https://leetcode.com/problems/remove-element/description/

const removeElement = function (nums, val) {
  let result = 0;
  for (let num of nums) {
    if (num !== val) {
      nums[result++] = num;
    }
  }
  console.log(nums);
  return result;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
