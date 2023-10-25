//* Ref: https://leetcode.com/problems/counter-ii/description/

function createCounter(init) {
  let result = init;
  return {
    increment: () => (result += 1),
    reset: () => (result = init),
    decrement: () => (result -= 1),
  };
}
const counter = createCounter(5);
counter.increment();
counter.increment();
const a = counter.increment();
console.log(a);
