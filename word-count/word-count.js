// there is almost certainly a better regex that will do all of the
// replacements in one line! but I do htis in my free time for fun and
// do not find it entertaining to keep messing around with regex atm

export const countWords = (input) => {
  var arr = input.split(/,\n|,| /);

  arr = arr.map(x => x.replace(/[~`!@#$%^&*(){}\[\];:"<,.>?\/\\|_+=-]/g, ""))
  var ret = {};

  for( var i = 0; i < arr.length; i++ ) {
    var key = arr[i].toLowerCase().replace(/(')(\w+)(')/, "$2");
    if(key != '' && key != "\n") {
      if( typeof ret[key] == 'undefined') {
        ret[key] = 1;
      } else {
        ret[key] = ret[key] + 1;
      }
    }
  }

  return ret;
};
