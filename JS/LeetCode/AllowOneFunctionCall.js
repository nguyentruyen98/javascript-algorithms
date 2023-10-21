//* Ref: https://leetcode.com/problems/allow-one-function-call/

function once(fn) {
  let isFirst = true;
  let result = 0;
  return function (...args) {
    if (isFirst) {
      isFirst = false;
      result = fn(...args);
      return result;
    }
    return undefined;
  };
}
const fn = (a, b, c) => {
  console.log("asdas", a, b, c);
  return a + b + c;
};
const args = [
  [1, 2, 3],
  [2, 3, 6],
];
let onceFn = once(fn);

const a = onceFn(1, 2, 3);
const b = onceFn(2, 3, 6);
console.log(a, b);
