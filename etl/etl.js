export const transform = (old_vals) => {
  var new_dict = {};
  for (var point_val in old_vals) {
    for (var letter = 0; letter < old_vals[point_val].length; letter++) {
      new_dict[old_vals[point_val][letter].toLowerCase()] = parseInt(point_val);
    }
  }
  return new_dict;
};
