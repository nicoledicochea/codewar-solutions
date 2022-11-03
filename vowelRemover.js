// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
    // "hello"     -->  "hll"
    // "codewars"  -->  "cdwrs"
    // "goodbye"   -->  "gdby"
    // "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


function shortcut (string) {
    // PREP
    // Parameters: string (will input always be a string?)
    // Return: remove LOWERCASE vowels and return remaining string
    // Example:
        // shortcut('code') = 'cd'
        // shortcut('wars') = 'wrs'
        // shortcut('yay') = 'yy'
    // Psuedo Code:
        // loop through string indeces
        // create variable newString 
        // push values into newString array when not equal to a vowel
        // which means conditional
        // then join array into single word
    
    let newString = []
    for (let i = 0; i < string.length; i++) {
      if(string[i] !== 'a' &&
        string[i] !== 'e' &&
        string[i] !== 'i'&&
        string[i] !== 'o'&&
        string[i] !== 'u') {
          newString.push(string[i])
      }
    }
    return newString.join('');
}