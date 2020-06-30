const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const ROBOT_NAMES = [];

export class Robot {
  constructor() {
    this._name = this.build_name();
    this._names = [];
  }

  build_name() {
    var ret = this.random_letter();
    ret = ret.concat('', this.random_letter());
    for (var i = 0; i < 3; i++) {
      ret = ret.concat('', this.random_number(10));
    }

    while (ROBOT_NAMES.includes(ret)) {
      ret = this.build_name();
    }
    
    ROBOT_NAMES.push(ret);


    this._name = ret;
    return ret;
  }

  random_number(max) {
    var ret = Math.floor(Math.random() * Math.floor(max));
    return ret;
  }

  random_letter() {
    var ret = ALPHABET[this.random_number(26)];
    return ret;
  }

  reset() {
    var old_name = this._name;
    this._name = this.build_name();
  }

  get name() {
    return this._name;
  }

  set name(_) {
    throw Error;
  }

  build_name_array() {

  }
}

Robot.releaseNames = () => { };
