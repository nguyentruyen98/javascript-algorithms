// function containsDuplicate(nums) {
//   const sorted = nums.sort();
//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] === sorted[i + 1]) return true;
//   }
//   return false;
// }
function containsDuplicate(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    else {
      map.set(nums[i], "");
    }
  }
  return false;
}
