//* Ref: https://vi.wikipedia.org/wiki/Ng%C4%83n_x%E1%BA%BFp

class Stack {
  constructor() {
    this.top = 0;
    this.stack = [];
  }
  push(value) {
    this.stack[this.top] = value;
    this.top++;
  }
  pop() {
    if (this.top === 0) {
      throw new Error("Stack is Empty");
    }
    this.top--;
    const popValue = this.stack[this.top];
    this.stack = this.stack.splice(0, this.top);
    return popValue;
  }

  // Size of stack
  size() {
    return this.top;
  }

  // Value at the end of the stack
  peek() {
    return this.stack[this.top - 1];
  }

  view() {
    this.stack.map((el) => console.log(el));
    return this.stack;
  }
  // The get syntax binds an object property to a function that will be called when that property is looked up.
  //* Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  get isEmpty() {
    return this.top === 0;
  }
}

export { Stack };
