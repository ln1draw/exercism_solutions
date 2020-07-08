export const compute = (str_1, str_2) => {
  var ret = 0;
  if (str_1 != str_2) {
    if (str_1.length == 0) {
      throw new Error('left strand must not be empty');
    } else if (str_2.length == 0) {
      throw new Error('right strand must not be empty');
    } else if (str_1.length != str_2.length) {
      throw new Error("left and right strands must be of equal length");
    }

    for (var i = 0; i < str_1.length; i++) {
      if (str_1[i] != str_2[i]) {
        ret += 1;
      }
    }
  }
  return ret;
};
