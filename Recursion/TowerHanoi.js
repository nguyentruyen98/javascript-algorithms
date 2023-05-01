//* Reference https://www.youtube.com/watch?v=Q3U6PRZDjTA

export default function towerHanoi(n, start, end) {
  if (n === 1) console.log(`${start} ---> ${end}`);
  else {
    let other = 6 - (start + end);
    towerHanoi(n - 1, start, other);
    console.log(`${start} ---> ${end}`);
    towerHanoi(n - 1, other, end);
  }
}
towerHanoi(2, 1, 3);
