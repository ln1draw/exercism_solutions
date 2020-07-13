export const reverseString = (input) => {
  var ret = '';
  for(var i = input.length - 1; i >=0; i--) {
    ret = ret + input[i];
  }
  return ret;
};
