// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

/*
  P: a string
  R: a boolean
  Examples: 
    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
  P: create two variables: oCount, xCount
    assign at 0
    loop through string (toLowerCase. must be case insensitive)
      if index === x, add 1 to xCount
      else if index === o, add 1 to oCount
    return xCount === oCount
*/


function XO(str) {
  
    let oCount = 0
    let xCount = 0
    
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === 'x') {
        xCount ++
      } else if (str[i].toLowerCase() === 'o') {
        oCount ++
      }
    }
    
    return xCount === oCount
    
}


/*
  solve using array methods
*/

function XO(str) {
  // return 
    // toLowerCase() to prevent case sensitivty
    // split string
    // conditional for imperative > functional calls for declarative
      // in this case it would be using filter for array
    // filter split string
      // by === 'x' or === 'o'
    // use length of arrays to compare if they are equal

return str.toLowerCase()
  .split('')
  .filter(element => element === 'x')
  .length === str.toLowerCase()
  .split('')
  .filter(element => element === 'o')
  .length
}


// to clean this equation up more

function XO(str) {
  let string = str.toLowerCase().split('')

  return string.filter(element => element === 'x').length === string.filter(element => element === 'o').length 
}