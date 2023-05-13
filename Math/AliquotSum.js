//* Ref: https://en.wikipedia.org/wiki/Aliquot_sum

export function aliquotSum(num) {
  let result = 0;
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      console.log(i);
      result += i;
    }
  }
  return result;
}
