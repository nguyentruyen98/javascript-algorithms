export const RANDOM_ARRAY = [82, 94, 60, 26, 78, 20, 27, 57, 76, 15];

export function swap(a, b) {
  return [b, a];
}

export function testPerformance(cb) {
  const start = performance.now();
  let i = 0;
  while (i < 1000000) {
    cb(RANDOM_ARRAY);
    i++;
  }
  const end = performance.now();
  console.log(`Result function ${cb.name}: ${end - start}`);
}
