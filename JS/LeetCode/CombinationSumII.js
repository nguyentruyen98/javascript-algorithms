var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  function backtrack(start, sum, path) {
    if (sum === target) {
      result.push([...path]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      path.push(candidates[i]);
      backtrack(i + 1, sum + candidates[i], path);
      path.pop();
    }
  }

  backtrack(0, 0, []);
  return result;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
