export class Node {
  constructor(val, before, after) {
    this.value = val;
    this.before = before;
    this.after = after;
  }

  update_pointers(before, after) {
    if (before) {
      this.before = before;
    }

    if (after) {
      this.after = after;
    }
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

    if (this.tail) {
      this.tail.update_pointers(null, node);
    }
    // update tail
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
    } else if (this.length == 1) {
      this.empty_list();
      ret = ret.value;
    } else {
      this.tail = ret.before;
      ret = ret.value;
      this.length -= 1;
    }

    return ret;
  }

  shift() {
    var ret = this.head;

    if(this.length == 0 || ret == null) {
    } else if (this.length == 1) {
      this.empty_list();
      ret = ret.value;
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
      this.head.update_pointers(node);
    }

    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.length += 1;
    return node.value;
  }

  delete(val) {
    var before_node = null;
    var after_node = null;
    var current_node = this.head;
    
    for (var i = 0; i < this.length; i++) {
      if (current_node.value == val) {
        before_node = current_node.before;
        after_node = current_node.after;

        if (before_node) {
          before_node.update_pointers( null, after_node);
        }

        if (after_node) {
          after_node.update_pointers(before_node);
        }

        if (this.head == current_node) {
          this.head = after_node;
        } else if (this.tail == current_node) {
          this.tail = before_node;
        }

        this.length -= 1;
        break;
      } else {
        current_node = current_node.after;
      }
    }

    return 0;
  }

  count() {
    return this.length;
  }

  empty_list() {
    this.length -= 1;
    this.head = null;
    this.tail = null;
  }
}
