import { Stack } from "../Stack.js";

test("test Stack method", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  expect(stack.stack).toEqual([1, 2, 3, 4]);
  stack.pop();
  expect(stack.stack).toEqual([1, 2, 3]);
  expect(stack.size()).toEqual(3);
});
