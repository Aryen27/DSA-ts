class Stack {
  private arr: (number | string)[] = [];
  private top: any = -1;
  constructor() {}

  push(x: number | string) {
    this.arr.push(x);
    this.top == -1 ? (this.top = 0) : this.top++;
    console.log(`Added ${x} to the stack!`);
  }

  pop() {
    if (this.top == -1) { 
      console.log("Stack is empty");
    }
    else {
      console.log("Popped item");
      this.arr.pop();
      this.top--;
    }
  }

  peek() {
    console.log(this.arr[this.top]);
  }

  isEmpty() {
    if (this.top == -1) {
      return true;
    }
    else {
      return false;
    }
  }
}

let stack = new Stack();
stack.pop();
stack.push(3);
stack.push(6);
stack.pop();
stack.peek();
