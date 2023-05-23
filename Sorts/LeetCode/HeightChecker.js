//* Ref: https://leetcode.com/problems/height-checker/description/

function heightChecker(heights) {
  let result = 0;
  const expect = [...heights].sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expect[i]) result += 1;
  }
  return result;
}
export { heightChecker };
