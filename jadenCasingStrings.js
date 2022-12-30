// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Link to Jaden's former Twitter account @officialjaden via archive.org


/*
P: a string of a quote
R: the string with correct capitalization
E:"How can mirrors be real if our eyes aren't real".toJadenCase() =>
  "How Can Mirrors Be Real If Our Eyes Aren't Real"
P: split the string at the spaces
map split array
  conditional: to determine the case of first letter
    if word[0] != word[0].toUpperCase() then need to update it
  split word ('') 
  replace(toUpperCase)
  join word
return joined array
  
*/

String.prototype.toJadenCase = function () {
  return this
    .split(' ')
    .map(word => {
      if(word[0] != word[0].toUpperCase()) {
        return word.replace(word[0], word[0].toUpperCase())
      } else {
        return word
      }
    }).join(' ')
}


// USING SLICE

String.prototype.toJadenCase = function () {
    return this
      .split(' ')
      .map(word => {
        return word[0].toUpperCase() + word.slice(1)
      }).join(' ')
}