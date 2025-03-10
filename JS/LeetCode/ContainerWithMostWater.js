// **https://leetcode.com/problems/container-with-most-water/description/

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  while (left <= right) {
    const water = Math.min(height[left], height[right]) * (right - left);
    result = water > result ? water : result;
    if (height[left] >= height[right]) {
      right -= 1;
    } else if (height[left] < height[right]) {
      left += 1;
    }
  }
  return result;
};
console.log(maxArea([3, 6, 1]));
