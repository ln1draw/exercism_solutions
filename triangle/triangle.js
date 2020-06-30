//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }

  isEquilateral() {
    var ret = false;

    if (this.validateSides() && (this.s1 == this.s2 && this.s2 == this.s3)) {
      ret = true;;
    }

    return ret;
  }

  isIsosceles() {
    var ret = false;

    if (this.validateSides() && (this.s1 == this.s2 || this.s2 == this.s3 || this.s1 == this.s3)) {
      ret = true;
    }

    return ret;
  }

  isScalene() {
    var ret = false;

    if (this.validateSides() && (this.s1 != this.s2 && this.s2 != this.s3 && this.s3 != this.s1)) {
      ret = true;
    }

    return ret;
  }

  isDegenerate() {
    var ret = false;

    if(this.validateSides && (this.s1 + this.s2 == this.s3 || this.s2 + this.s3 == this.s1 || this.s1 + this.s3 == this.s2)) {
      ret = true;
    }

    return ret;
  }

  validateSides() {
    var ret = true;
    if (this.s1 <= 0 || this.s2 <= 0 || this.s3 <= 0) {
      ret = false;
    }

    if (this.s1 + this.s2 < this.s3 || this.s2 + this.s3 < this.s1 || this.s1 + this.s3 < this.s2) {
      ret = false;
    }
    return ret;
  }
}
