//*Ref: https://leetcode.com/problems/sleep/description/

function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), millis);
  });
}
// const a = sleep(1000);
// console.log(a);
// console.log("asd");
