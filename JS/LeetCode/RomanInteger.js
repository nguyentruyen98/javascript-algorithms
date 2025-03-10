// ** https://leetcode.com/problems/roman-to-integer/description/
const CONVERT = {
  I: 1,
  IV: 4,
  IX: 9,
  V: 5,
  X: 10,
  XL: 40,
  XC: 90,
  L: 50,
  C: 100,
  CD: 400,
  CM: 900,
  D: 500,
  M: 1000,
};

const romanInteger = (s) => {
  let result = 0;
  let i = 0;
  while (i < s.length) {
    const char = s.slice(i, i + 2);
    if (CONVERT[char]) {
      result += CONVERT[char];
      i += 2;
    } else {
      result += CONVERT[s[i]];
      i += 1;
    }
  }
  return result;
};
MCMX