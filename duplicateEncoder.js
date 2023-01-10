// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.



/*
  P: a string of a word
  R: the string with the following replacements
    '(' if character appears only once in the original string
    ')' if character appears more than once
  IMPORANT: ignore capitlization = not case-sensitive
  E: duplicateEncode("din") =>        "((("
    duplicateEncode("recede") =>      "()()()"
    duplicateEncode("Success") =>     ")())())"
    duplicateEncode("(( @") =>        "))(("
  P: need to determine if a character appears more than once in the string
    create an object to count up the amount of times each character repeats
    then when mapping, use a conditional
      if the count for the character > 1 then return )
      else return (
*/

function duplicateEncode(word){
  
    word = word.toUpperCase().split('')  
    
    let count = {}
  
    word.forEach(element => {
      if(!count[element]) {
        count[element] = 1
      } else {
        count[element]++
      }
    })
    
    return word.map(element => {
      if(count[element] > 1) {
        return ')'
      } else {
        return '('
      }
    }).join('')
}
  