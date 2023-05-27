//* Ref: https://leetcode.com/problems/merge-intervals/


// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].


// function sort(arr) {

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= arr[i + 1] && arr[i] !== 0)
//       return [false, arr.sort((a, b) => a - b)]
//   }
//   return [true, []]
// }

// function merge(intervals) {
//   let result = []
//   for (let i = 0; i < intervals.length; i++) {
//     result = [...result, intervals[i]]
//     console.log(result)
//     const flatResult = result.flatMap(num => num)
//     const [isSorted, sortedArray] = sort(flatResult)
//     if (!isSorted) {
//       result = [[sortedArray.at(0), sortedArray.at(-1)]]
//     }

//   }
//   console.log(result);

//   return result
// }
function merge(intervals) {
  let result = []
  intervals.sort((a, b) => a[0] - b[0]);

  let temp = intervals[0]

  for (let i = 0; i < intervals.length; i++) {
    if (temp[1] >= intervals[i][0]) {
      temp[1] = Math.max(temp[1], intervals[i][1]);
    } else {
      result.push(temp)
      temp = intervals[i];
    }
  }
  result.push(temp)
  return result
}

export { merge }
