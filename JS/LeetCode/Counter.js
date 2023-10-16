//* Ref: https://leetcode.com/problems/counter/

// function createCounter(n) {
//   let counter = n - 1;
//   return function () {
//     return (counter += 1);
//   };
// }
function createCounter(n) {
  return () => n++;
}
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
// let a = 1;
// let b = 1;
// console.log(a++);
// console.log(a);
// console.log(++b);
// console.log(b);
