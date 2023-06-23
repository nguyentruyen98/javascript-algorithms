// *Ref: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// [8,1,2,2,3]

// function smallerNumbersThanCurrent(nums) {
//   const sortedNums = nums.sort((a, b) => a - b);
//   let result = [];
//   let i = 0;
//   let dup = 0;
//   while (i < sortedNums.length) {
//     if (i === 0) {
//       result.push(0);
//     } else if (sortedNums[i] === sortedNums[i - 1]) {
//       dup++;
//       result.push(i - dup);
//     } else {
//       dup = 0;
//       result.push(i);
//     }
//     i++;
//   }
//   return result;
// }

// var smallerNumbersThanCurrent = function (nums) {
//   const counts = new Array(101).fill(0);
//   nums.forEach((num) => counts[num]++);

//   let prevCount = 0;
//   for (let i = 0; i < counts.length; i++) {
//     if (counts[i] !== 0) {
//       const count = counts[i];
//       counts[i] = prevCount;
//       prevCount += count;
//     }
//   }

//   return nums.map((num) => counts[num]);
// };
function smallerNumbersThanCurrent(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) count++;
    }
    result.push(count);
  }
  console.log(result);
  return result;
}
smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
