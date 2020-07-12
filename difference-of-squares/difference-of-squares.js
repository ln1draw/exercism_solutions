export class Squares {
  constructor(input) {
    this.number = input;
  }

  get sumOfSquares() {
    var sum = 0;
    for(var i = 0; i < this.number; i++) {
      sum = sum + (i + 1) * (i + 1);
    }
    return sum;
  }

  get squareOfSum() {
    var sum = 0;
    for(var i = 0; i < this.number; i++) {
      sum = sum + i + 1;
    }
    return sum * sum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
