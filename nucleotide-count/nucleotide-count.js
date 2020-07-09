export class NucleotideCounts {
  static parse(parseable) {
    var g = 0;
    var a = 0;
    var t = 0;
    var c = 0;

    for (var i = 0; i < parseable.length; i++) {
      var l = parseable[i];

      if (l == 'A') {
        a++;
      } else if (l == 'C') {
        c++;
      } else if (l == 'G') {
        g++;
      } else if (l == 'T') {
        t++;
      } else {
        throw new Error('Invalid nucleotide in strand');
      }

    }

    return a + ' ' + c + ' ' + g + ' ' + t;
  }
}
