import { swapEl } from "../../utils/index.js";


// * Ref: https://leetcode.com/problems/sort-colors/

// function sortColors(nums) {
//     let red = 0;
//     let white = 0;
//     let blue = 0;

//     for (const num of nums) {
//         if (num === 0) {
//             red += 1
//         }
//         else if (num === 1) {
//             white += 1
//         }
//         else if (num === 2) {
//             blue += 1
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (red !== 0) {
//             nums[i] = 0
//             red -= 1
//         }
//         else if (white !== 0) {
//             nums[i] = 1
//             white -= 1

//         }
//         else if (blue !== 0) {
//             nums[i] = 2
//             blue -= 1
//         }
//     }
// }

// https://en.wikipedia.org/wiki/Dutch_national_flag_problem
function sortColors(nums) {
    let low = 0
    let current = 0;
    let high = nums.length - 1
    while (current <= high) {
        if (nums[current] === 0) {
            swapEl(nums, current, low)
            current += 1
            low += 1
        }
        else if (nums[current] === 2) {
            swapEl(nums, current, high)
            high -= 1
        }
        else {
            current += 1
        }
    }
    console.log(nums);

}

sortColors([2, 0, 2, 1, 1, 0])