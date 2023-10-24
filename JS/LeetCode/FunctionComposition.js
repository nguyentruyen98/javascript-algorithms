//* Ref:https://leetcode.com/problems/function-composition/

function compose(functions) {
  if (functions.length === 0) return (x) => x;
  return functions.reduceRight((currentFn, nextFn) => {
    console.log("preFn", preFn, "nextFn", nextFn);
    return function (x) {
      return nextFn(currentFn(x));
    };
  });
}
const fn = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const a = compose(fn);
const b = a(4);

console.log(b);
