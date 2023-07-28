class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Removes last node
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
        this.tail = null;
        this.head = null;
    }
    return current;
  }

  // Removes a node from the beginning
  shift(){
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
        this.tail = null;
    }
    return currentHead;
  }
  // Adds a new node at beginning
  unshift(val){
    var newNode = new Node(val);
    if (!this.head){
        this.head = newNode;
        this.tail=newNode;
    } else{
        
    }
  }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// console.log(list);
// console.log(list.pop());
// console.log(list);
console.log(list.shift());
console.log(list);
