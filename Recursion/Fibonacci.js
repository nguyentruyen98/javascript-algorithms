export default function Fibonacci(n) {
  if (n < 2) return 1;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
