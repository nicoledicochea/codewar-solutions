// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.



/*
P: a string of letters
R: an array with 2 strings
  1) capitalize even indexes, lowercase odd indexes
  2) capitalize odd indexes, lowercase even indexes

E: capitalize("abcdef") => ['AbCdEf', 'aBcDeF']);
capitalize("codewars") => ['CoDeWaRs', 'cOdEwArS']
capitalize("abracadabra") => ['AbRaCaDaBrA', 'aBrAcAdAbRa']
capitalize("codewarriors") => ['CoDeWaRrIoRs', 'cOdEwArRiOrS']

P: create 2 variables, set to empty array
  1) alt1
  2) alt2
split string
forEach => each element
  conditional, depending on index
    push uppercase to alt1 and lowercase to alt2
return [alt1.join(''), alt2.join('')]

*/

function capitalize(s){
  let alt1 = []
  let alt2 = []
  
  s
    .split('')
    .forEach((element, index) => {
      if (index % 2 === 0) {
        alt1.push(element.toUpperCase())
        alt2.push(element)
      } else {
        alt2.push(element.toUpperCase())
        alt1.push(element) 
      }
    })
  
  return [alt1.join(''), alt2.join('')]
}



// using map instead of push

function capitalize(s){
    
    let even = s
      .split('')
      .map((element, index) => {
        if (index % 2 === 0) {
          return element.toUpperCase()
        } else {
          return element
        }
      }).join('')
    
    let odd = s
      .split('')
      .map((element, index) => {
        if (index % 2 !== 0) {
          return element.toUpperCase()
        } else {
          return element
        }
      }).join('')
    
    return [even, odd]
}