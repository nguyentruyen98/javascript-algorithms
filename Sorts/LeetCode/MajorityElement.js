//* Ref: https://leetcode.com/problems/majority-element/

var majorityElement = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let count = 0;
  let result = -1;
  for (const [key, value] of map.entries()) {
    if (count < value) {
      count = value;
      result = key;
    }
  }
  return result;
};

export { majorityElement };
