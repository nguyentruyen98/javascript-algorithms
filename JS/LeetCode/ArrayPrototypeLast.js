//* Ref https://leetcode.com/problems/array-prototype-last/

Array.prototype.last = function () {
  if (this.length < 1) return -1;
  return this[this.length - 1];
};
// const a = new Array(1, 2, 3, 4);
// console.log(a.last());
