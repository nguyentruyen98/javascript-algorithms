function reduce(nums, fn, init) {
  if (nums.length === 0) return init;
  let total = init;
  for (let i = 0; i <= nums.length - 1; i++) {
    total = fn(total, nums[i]);
  }
  return total;
}
const fn = function sum(accum, curr) {
  return accum + curr;
};
const nums = [1, 2, 3, 4];
const init = 0;
const test = reduce(nums, fn, init);
console.log(test);
