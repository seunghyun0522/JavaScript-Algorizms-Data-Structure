// // piece of data - val
// // reference to next node next

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   //push!
//   push(val) {
//     var newNode = new Node(val);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
// }

// var list = new SinglyLinkedList();
// console.log(list);
// list.push("A");
// console.log(list);
// list.push("B");
// console.log(list);

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  //traverse 순회
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    else {
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      return current;
    }
  }
}

let l = new LinkedList();
l.push(1);
console.log(l);
l.push(2);
l.push(3);
l.push(4);
l.push(5);
console.log(l);
//l.traverse();

l.pop();
l.traverse();

l.pop();
l.traverse();
