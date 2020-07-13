export const isLeap = (year) => {
  var ret = false;
  if(year % 4 == 0) {
    ret = true;
  }
  if(ret && year % 100 == 0) {
    if(year % 400 != 0) {
      ret = false;
    }
  }
  return ret;
};
