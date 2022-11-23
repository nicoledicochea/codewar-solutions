// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


/*
P: a string
R: replace each letter with the position in the alphabet
  ie. "a" = 1, "b" = 2
  if it isn't a letter, ignore it
E: alphabetPosition('abba') = '1221'
P: create variable replacedText, empty array
  loop through string
    conditional (switch case): if text.toLowerCase() is a letter
      note: toLowerCase accounts for case sensitivity
    then push given number into empty array
  return joined array
*/

function alphabetPosition(text) {
    let replacedText = []
    text.split('').forEach(element => {
      switch (element.toLowerCase()) {
        case 'a':
          replacedText.push(1)
          break
        case 'b':
          replacedText.push(2)
          break
        case 'c':
          replacedText.push(3)
          break
        case 'd':
          replacedText.push(4)
          break
        case 'e':
          replacedText.push(5)
          break
        case 'f':
          replacedText.push(6)
          break
        case 'g':
          replacedText.push(7)
          break
        case 'h':
          replacedText.push(8)
          break
        case 'i':
          replacedText.push(9)
          break
        case 'j':
          replacedText.push(10)
          break
        case 'k':
          replacedText.push(11)
          break
        case 'l':
          replacedText.push(12)
          break
        case 'm':
          replacedText.push(13)
          break
        case 'n':
          replacedText.push(14)
          break
        case 'o':
          replacedText.push(15)
          break
        case 'p':
          replacedText.push(16)
          break
        case 'q':
          replacedText.push(17)
          break
        case 'r':
          replacedText.push(18)
          break
        case 's':
          replacedText.push(19)
          break
        case 't':
          replacedText.push(20)
          break
        case 'u':
          replacedText.push(21)
          break
        case 'v':
          replacedText.push(22)
          break
        case 'w':
          replacedText.push(23)
          break
        case 'x':
          replacedText.push(24)
          break
        case 'y':
          replacedText.push(25)
          break
        case 'z':
          replacedText.push(26)
          break
        default:
          break
    }
  })
  
  return replacedText.join(' ') 
  
}


// without the switch case

// Psuedo code
// create variable for alphabet
// return the following:
  // text to lower case - prevent case sensitivity
  // split string to an array
  // filter the array to only return letters
  // use the indexOf string method 
    // this gives the index of each letter
    // the letter position is index + 1
  // map using indexOf
  // join array using a space

function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return text.toLowerCase()
    .split('')
    .filter((element) => alphabet.includes(element))
    .map((element) => alphabet.indexOf(element) + 1)
    .join(' ')
}