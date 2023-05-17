class Queue {
  #size; //Private property
  constructor() {
    this.head = null;
    this.tail = null;
    this.#size = 0;
    return Object.seal(this);
  }
  get length() {
    return this.#size;
  }
  /**
   * @description Add a value to the end of the queue
   * @param {*} data
   * @returns {number} The current size of the queue
   */
  enqueue(data) {
    const node = { data, next: null };

    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      // Both of head and tail are same address value.
      this.tail.next = node;
      this.tail = node;
    }
    return ++this.#size;
  }
  dequeue() {
    const firstData = this.peekFirst();
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.#size--;
    return firstData;
  }
  peekFirst() {
    return this.head.data;
  }
  peekLast() {
    return this.tail.data;
  }
  toArray() {
    const array = [];
    let node = this.head;

    while (node) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
  isEmpty() {
    return this.length === 0;
  }
}

export { Queue };
