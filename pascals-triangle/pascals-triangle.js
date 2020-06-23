// there are some cleaner ways of doing this in fewer lines with
// less variable declaration! went this way bc I found myself getting
// confused sometimes about what represented what, so I optimized 
// for my human eyes :)

export const rows = (number) => {
  var ret = []
  for (var row_iterator = 0; row_iterator < number; row_iterator++) {
    var new_row = [];

    for (var col_iterator = 0; col_iterator < row_iterator + 1; col_iterator++) {
      var new_val = 1;

      if (col_iterator > 0 && col_iterator < row_iterator) {
        var left = ret[row_iterator - 1][col_iterator - 1];
        var right = ret[row_iterator - 1][col_iterator];
        new_val = left + right;
      }

      new_row.push(new_val);
    }
    ret.push(new_row);
  }

  return ret;
};
