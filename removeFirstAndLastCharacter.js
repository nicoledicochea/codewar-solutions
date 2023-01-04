// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


/*
P: a string, word
R: a string, with the first and last character removed
E: removeChar('eloquent'), 'loquen'
  removeChar('country'), 'ountr'
  removeChar('person'), 'erso'
  removeChar('place'), 'lac'
  removeChar('ooopsss'), 'oopss'
P: split string, str
map the string
  conditional
    if not index 0 and not string.length - 1
*/

function removeChar(str){
    return str
    .split('')
    .map((element, index) => {
       if (index !== 0 && index !== str.length - 1) {
          return element
       }
    }).join('')
}
   
   



