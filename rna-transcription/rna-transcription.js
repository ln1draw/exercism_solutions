//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DNA_TO_RNA = {
  "C": "G",
  "G": "C",
  "T": "A",
  "A": "U"
}

export const toRna = (dna_str) => {
  var rna_str = '';
  for (var i = 0; i < dna_str.length; i++) {
    rna_str = rna_str + DNA_TO_RNA[dna_str[i]];
  }
  return rna_str;
};
