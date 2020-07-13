export const steps = (n) => {
  var ret = 0;
  var remainder = n;
  if(n < 1) {
    throw new Error('Only positive numbers are allowed');
  }
  while(remainder != 1) {
    ret = ret + 1;
    if(remainder % 2 == 0) {
      remainder = remainder / 2;
    } else {
      remainder = remainder * 3 + 1;
    }
  }
  return ret;
};
