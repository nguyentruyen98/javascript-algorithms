var combinationSum = function (candidates, target) {
  const result = [];

  function backtrack(start, sum, path) {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, sum + candidates[i], path);
      path.pop(); // Undo lựa chọn để thử lựa chọn khác
    }
  }

  backtrack(0, 0, []);
  return result;
};

const sumArray = (arr) => {
  return arr.reduce((partialSum, a) => partialSum + a, 0);
};

console.log(combinationSum([2, 3, 6, 7], 7));
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
