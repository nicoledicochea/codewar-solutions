// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


// P: an array of numbers
// R: if there's a vowel number, change to vowel and return array
// E: isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])
// [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106])
// use a swich case to change out vowels

function isVow(a){
    return a.map(element => {
      switch (element) {
          case 97:
            return element = 'a'
          case 101:
            return element = 'e'
          case 105: 
            return element = 'i'
          case 111:
            return element = 'o'
          case 117:
            return element = 'u'
          default:
            return element
      }
    })
}