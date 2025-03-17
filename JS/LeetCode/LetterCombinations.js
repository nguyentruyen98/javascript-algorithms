const NUMBER_TO_LETTER = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jik",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

var letterCombinations = function (digits) {
  if (!digits) return [];

  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  function backtrack(index, path) {
    if (index === digits.length) {
      result.push(path);
      return;
    }

    let letters = phoneMap[digits[index]];
    if (!letters) return;

    for (let char of letters) {
      backtrack(index + 1, path + char);
    }
  }

  backtrack(0, "");
  return result;
};
console.log(letterCombinations("234"));
