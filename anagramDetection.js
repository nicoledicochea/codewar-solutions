// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"





// initial thought was to compare two objects with the count of each letter in a word

/*
P: two strings, test and original
R: true, if an anagram
  false, if not an anagram
E: isAnagram('foefet', 'toffee') => true
  isAnagram('Buckethead', 'DeathCubeK') => true
P: create an object literal, letterCountTest
create an object literal, letterCountOriginal
loop through each word
  if the element does not exist in the object,
    add it to the count
if letterCounts for both objects are equal, then return true
*/

let isAnagram = function(test, original) {
    let testLetterCount = {}
    let originalLetterCount = {}
    
    test
      .toLowerCase()
      .split('')
      .sort()
      .forEach(letter => {
        if (!testLetterCount[letter]) {
          testLetterCount[letter] = 1
        } else {
          testLetterCount[letter] ++
        }
      })
    
    original
      .toLowerCase()
      .split('')
      .sort()
      .forEach(letter => {
        if (!originalLetterCount[letter]) {
          originalLetterCount[letter] = 1
        } else {
          originalLetterCount[letter] ++
        }
      })
    
    return testLetterCount === originalLetterCount
  
}

// but the object was out of order, even when using sort
// figured it would be simpler to just sort the strings after splitting into an array and then compare them that way


let isAnagram = function(test, original) {
  
    let testSorted = test
      .toLowerCase()
      .split('')
      .sort()
      .join('')
    
    let originalSorted = original
      .toLowerCase()
      .split('')
      .sort()
      .join('')
    
    return testSorted === originalSorted
  
}
  