// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"






/*
P: a string with DNA sequences
R: return the complement DNA sequence
E: "ATTGC" --> "TAACG"
"GTAT" --> "CATA"
P: split dna string
map array
  conditional
  based on letter, return the complement
return the joined array
*/

function DNAStrand(dna){
    return dna
      .split('')
      .map(element => {
        if (element === 'A') {
          return 'T'
        } else if (element === 'T') {
          return 'A'
        } else if (element === 'G') {
          return 'C'
        } else {
          return 'G'
        }
      }).join('')
}




/// OR using an object!
// create object of the pairs
// then return value in mapping

function DNAStrand2(dna){
    const pairs = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    }
    
    return dna
      .split('')
      .map(element => {
        return pairs[element]
      }).join('')
}