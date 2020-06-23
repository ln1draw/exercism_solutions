// arrayed_input[0][8, 7, 6]



export class Matrix {
  constructor(spaced_input){
    this.arrayed_input = spaced_input.split("\n").map((e) => e.split(' ').map((e) => parseInt(e)));
    this.arrayed_columns = []
    for (var i = 0; i < this.arrayed_input[0].length; i++) {
      var col = [];
      for (var j = 0; j < this.arrayed_input.length; j++) {
        col.push(this.arrayed_input[j][i]);
      }
      this.arrayed_columns.push(col);
    }
  }

  get rows() {
    return this.arrayed_input;
  }

  get columns() {
    return this.arrayed_columns;
  }
}
