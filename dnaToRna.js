// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:
    // "GCAT"  =>  "GCAU"

// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

/*
P: a string consisting of g, c, a, t
R: the rna equivalent
E: DNAtoRNA("GCAT") = "GCAU"
P: split the string per letter
map the array of letters
conditional
  if a 't', replace with 'u'
join array
return
*/

function DNAtoRNA(dna) {
    return dna
      .split('')
      .map((letter) => {
        return letter === 'T' ? 'U' : letter
    }).join('')
}