import { Queue } from "../Queue.js";

test("test Queue method", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  const firstData = queue.peekFirst();
  expect(firstData).toEqual(1);
  const lastData = queue.peekLast();
  expect(lastData).toEqual(3);

  expect(queue).toEqual({
    head: { data: 1, next: { data: 2, next: { data: 3, next: null } } },
    tail: { data: 3, next: null },
  });
  queue.dequeue(3);
  expect(queue).toEqual({
    head: { data: 2, next: { data: 3, next: null } },
    tail: { data: 3, next: null },
  });
  const array = queue.toArray();
  expect(array).toEqual([2, 3]);
  const length = queue.length;
  expect(length).toEqual(2);
  const isEmpty = queue.isEmpty();
  expect(isEmpty).toEqual(false);
});
