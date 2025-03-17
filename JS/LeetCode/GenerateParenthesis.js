var generateParenthesis = function (n) {
  const result = [];
  function backtrack(path, open, close) {
    if (path.length === n * 2) {
      result.push(path);
      return;
    }

    if (open < n) {
      backtrack(path + "(", open + 1, close);
    }
    if (close < open) {
      backtrack(path + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
};

console.log(generateParenthesis(3));
