const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

export class Cipher {
  constructor() {
    this._key = 'aaaaaaaaaa';
  }

  encode(str) {
    var str_arr = str.split('')
    var ret = '';
    
    return ret;
  }

  decode() {
    throw new Error("Remove this statement and implement this function");
  }

  get key() {
    return this._key;
  }
}
