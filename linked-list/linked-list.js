export class Node {
  constructor(val, before, after) {
    this.value = val;
    this.before = before;
    this.after = after;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    var node = new Node(val, this.tail, null);
    this.tail = node;
    if (!this.head) {
      this.head = node;
    }
  }

  pop() {

    var ret = this.tail;
    this.tail = this.head;
    return ret.value;
  }

  shift() {
    var ret = this.head;
    this.head = this.tail;
    return ret.value;
  }

  unshift(val) {
    var node = new Node(val, null, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  delete() {
    return 0;
  }

  count() {
    return 0;
  }
}
