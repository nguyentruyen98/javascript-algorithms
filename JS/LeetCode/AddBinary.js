const stringToNum = (s) => {
  if (!s || s === NaN) return 0;
  return Number(s);
};

var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";
  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = stringToNum(a[i]) + stringToNum(b[j]) + carry;
    if (sum === 0) {
      result += "0";
      carry = 0;
    } else if (sum === 1) {
      result += "1";
      carry = 0;
    } else if (sum === 2) {
      result += "0";
      carry = 1;
    } else if (sum === 3) {
      result += "1";
      carry = 1;
    }
    i--;
    j--;
  }
  return result.split("").reverse().join("");
};
addBinary("1111", "1111");
