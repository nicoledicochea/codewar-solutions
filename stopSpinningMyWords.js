// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

/*
P: a string with 1 or more words
R: the string with all words with 5 or more letters reserved
E: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
  spinWords( "This is a test") => returns "This is a test" 
  spinWords( "This is another test" )=> returns "This is rehtona test"
P: split string
map array
  conditional: if element length >= 5
    return split.reverse.join
return final joined string
*/

function spinWords(string){
    return string
      .split(' ')
      .map(element => {
        if (element.length >= 5) {
          return element.split('').reverse().join('')
        } else {
          return element
        }
      }).join(' ')
}

