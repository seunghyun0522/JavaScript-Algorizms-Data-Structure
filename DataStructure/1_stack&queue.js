class Stack {
  constructor() {
    this.arr = [];
  }
  push(data) {
    this.arr.push(data);
  }
  pop(index) {
    if (index === this.arr.length - 1) {
      return this.arr.pop();
    }
    let result = this.arr.splice(index, 1);
    return result;
  }

  empty() {
    if (this.arr.length === 0) {
      return true;
    } else return false;
  }
  top() {
    return this.arr[this.arr.length - 1];
  }
  bottom() {
    return this.arr[0];
  }
}

let s = new Stack();
s.push(10);
console.log(s.arr);
s.push(20);
s.push(30);
console.log(s.arr);

console.log(s.top());
