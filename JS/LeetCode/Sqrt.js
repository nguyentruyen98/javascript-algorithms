var mySqrt = function (x) {
  if (x < 2) return x;

  let left = 0;
  let right = Math.floor(x / 2);
  let result = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;
    if (square === x) return mid;
    else if (square < x) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};
mySqrt(15);
