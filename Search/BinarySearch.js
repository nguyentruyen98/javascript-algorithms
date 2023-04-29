export function binarySearch(arr, num, low = 0, high = arr.length - 1) {
  const mid = Math.floor(low + (high - low) / 2);

  if (arr[mid] === num) return mid;
  else if (arr[mid] > num) return binarySearch(arr, num, low, mid - 1);
  else if (arr[mid] < num) return binarySearch(arr, num, mid + 1, high);
  else return "Not found";
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
