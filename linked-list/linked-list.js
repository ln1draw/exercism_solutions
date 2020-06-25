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
    this.length = 0;
  }

  push(val) {
    var node = new Node(val, this.tail, null);
    // update pointer in former tail
    if (this.tail) {
      this.tail.after = node;
    }
    this.tail = node;
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    this.length += 1;
    return node.value;
  }

  pop() {
    var ret = this.tail;

    if(this.length == 0 || ret == null) {
      // don't do anything
    } else if (this.length == 1) {
      this.length -= 1;
      this.tail = null;
      this.head = null;
    } else {
      this.tail = ret.before;
      ret = ret.value;
    }

    return ret;
  }

  shift() {
    var ret = this.head;

    if(this.length == 0 || ret == null) {
      // do not set head/tail
    } else if (this.length < 3) {
      if (this.length == 2) {
        this.head = this.tail;
      } else if (this.length == 1) {
        this.head = null;
        this.tail = null;
      }
      ret = ret.value;
      this.length -= 1;
    } else {
      this.head = ret.after;
      ret = ret.value;
      this.length -= 1;
    }

    return ret;
  }

  unshift(val) {
    var node = new Node(val, null, this.head);
    
    // update pointer in former head
    if (this.head) {
      this.head.before = node;
    }

    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.length = this.length + 1;
    return node.value;
  }

  delete() {
    return 0;
  }

  count() {
    return this.length;
  }
}
