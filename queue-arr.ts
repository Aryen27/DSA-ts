class Queue{
  arr: (number | string)[] = [];
  head: any;
  tail: any;
  constructor() {
    this.head = 0;
    this.tail = -1;
  }

  enqueue(x: (number | string)) {
    this.arr.push(x);
    console.log('Added item to queue');
    if (this.tail == -1)
      this.tail = 0;
    else
      this.tail++;
  }

  dequeue() {
    if (this.tail = -1) {
     console.log('Queue is empty'); 
    }
    this.arr.shift();
    console.log("Item deleted from the queue");
  }

}

const q = new Queue;
q.dequeue();
q.enqueue(2);
q.enqueue(6);