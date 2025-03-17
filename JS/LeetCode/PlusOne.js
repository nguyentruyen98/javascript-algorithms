var plusOne = function (digits) {
  const length = digits.length;
  let i = length - 1;

  if (digits[i] + 1 < 10) {
    digits[i] += 1;
    return digits;
  }

  let sum = 1;
  let carry = 0;
  while (i >= 0) {
    sum += digits[i] + carry;
    let remainder = sum % 10;

    digits[i] = remainder;
    if (i === 0 && sum >= 10) {
      return [1, ...digits];
    }
    carry = Math.floor(sum / 10);
    sum = 0;

    i--;
  }
  return digits;
};
console.log(plusOne([8, 9, 9, 9]));
