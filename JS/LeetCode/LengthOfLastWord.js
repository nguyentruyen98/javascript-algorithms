const lengthOfLastWord = (s) => {
  const len = s.trimEnd().length;
  let result = 0;
  for (let i = len - 1; i >= 0; i--) {
    console.log(s[i]);
    if (s[i] === " ") return result;
    result += 1;
  }
  return result;
};

console.log(lengthOfLastWord("Hello World"));
