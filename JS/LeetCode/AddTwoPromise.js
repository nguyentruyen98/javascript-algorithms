//* Ref: https://leetcode.com/problems/add-two-promises/description/

async function addTwoPromise(promise1, promise2) {
  const [value1, value2] = await Promise.all([promise1, promise2]);
  return value1 + value2;
}
const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 500));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 1000));

const result = await addTwoPromise(promise1, promise2);

console.log(result);
