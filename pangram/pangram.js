//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const LETTER_ARRAY = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

export const isPangram = (input) => {
  var lowcase_input = input.toLowerCase()
  var ret = true;
  for (var i = 0; i < 26; i++) {
    if (lowcase_input.indexOf(LETTER_ARRAY[i]) < 0) {
      ret = false;
      break;
    }
  }
  return ret;
};
