//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (testnum) => {
  var ret = '';

  if (testnum % 3 == 0) {
    ret += "Pling";
  }

  if (testnum % 5 == 0) {
    ret += "Plang";
  }

  if (testnum % 7 == 0) {
    ret += "Plong";
  }

  if (ret == '') {
    ret = testnum.toString();
  }
  return ret;
};
