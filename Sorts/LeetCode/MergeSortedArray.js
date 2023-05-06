//* Ref: https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export function mergeSortedArray(nums1, m, nums2, n) {
  let arr1 = nums1.splice(0, m);
  let arr2 = nums2.splice(0, n);
  let i = 0;
  nums1.length = 0;

  while (i < m + n) {
    if (m === 0) {
      nums1.push(...arr2);
      break;
    } else if (arr1[0] < arr2[0]) {
      nums1[i] = arr1.splice(0, 1)[0];
    } else if (arr1[0] >= arr2[0]) {
      nums1[i] = arr2.splice(0, 1)[0];
    } else if (!arr1.length || !arr2.length) {
      nums1.push(...arr1, ...arr2);
      break;
    }
    i++;
  }
  console.log(nums1);
}

mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// mergeSortedArray([1], 1, [1], 0);
// mergeSortedArray([0], 0, [1], 1);
// mergeSortedArray([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5);
