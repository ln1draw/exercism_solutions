//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  var ret = 0;
  for (var i=0; i < COLORS.length; i++) {
    if (COLORS[i] == color) {
      ret = i;
      break;
    }
  }
  return ret;
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
