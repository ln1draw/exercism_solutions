//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(data) {
    this.values = data || [];

    // if input data is a list of lists
    if (this.values.length > 0 && this.values[0] instanceof List) {
      // map out the list values returns [[a], [b]]. then reduce to [a, b]
      // probably could be turned into a more efficient single loop but this is more readable to me
      this.values = this.values.map(l => l.values).reduce((acc, val) => acc.concat(val), []);
    }
  }

  append(l2) {
    var list_data = this.values || [];
    if (l2) {
      list_data = list_data.concat(l2.values);
    }
    var ret = new List(list_data);
    return ret;
  }

  concat(l2) {
    return this.append(l2)
  }

  // filter_func evaluates to true/false
  filter(filter_func) {
    var ret = new List();

    for(var i = 0; i < this.values.length; i++) {
      if(filter_func(this.values[i])) {
        ret.values.push(this.values[i]);
      }
    }

    return ret;
  }

  map(map_func) {
    var new_list = new List();

    for(var i = 0; i < this.values.length; i++) {
      new_list.values.push(map_func(this.values[i]));
    }

    return new_list;
  }

  length() {
    return this.values.length;
  }

  foldl(fold_func, start_val) {
    var ret = start_val;

    for (var i of this.values) {
      ret = fold_func(ret, i);
    }

    return ret;
  }

  foldr(fold_func, start_val) {
    var ret = start_val;
    var len = this.values.length;

    for (var i = 0; i < len; i++) {
      ret = fold_func(ret, this.values[len - i - 1]);
    }

    return ret;
  }

  reverse() {
    var ret = new List();
    var len = this.values.length;
    for (var i = 0; i < len; i++) {
      ret.values.push(this.values[len - i - 1]);
    }
    return ret;
  }
}
