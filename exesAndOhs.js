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