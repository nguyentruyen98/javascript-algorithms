const start = performance.now();

const swap = (a, b) => [b, a];

export const bubbleSort = (arr) => {
  let stopIndex = arr.length;

  while (stopIndex > 1) {
    for (let i = 0; i < stopIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        const [b, a] = swap(arr[i], arr[i + 1]);
        arr[i] = b;
        arr[i + 1] = a;
      }
    }
    stopIndex--;
  }
  return arr;
};
// let i = 1000000;
// while (i > 1) {
//   const bubbleSort = (arr) => {
//     let stopIndex = arr.length;

//     while (stopIndex > 1) {
//       for (let i = 0; i < stopIndex; i++) {
//         if (arr[i] > arr[i + 1]) {
//           const [b, a] = swap(arr[i], arr[i + 1]);
//           arr[i] = b;
//           arr[i + 1] = a;
//         }
//       }
//       stopIndex--;
//     }
//     return arr;
//   };
//   const array = [82, 94, 60, 26, 78, 20, 27, 57, 76, 15];

//   bubbleSort(array);
//   i--;
// }
// const end = performance.now();

// const elapsed = end - start;
// console.log(elapsed);
// const array = [82, 94, 60, 26, 78, 20, 27, 57, 76, 15];
// const test = bubbleSort(array);
