//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (time) => {
  var gt = new Date(time);
  gt.setUTCSeconds(gt.getUTCSeconds() + 1000000000);
  return gt;
};
