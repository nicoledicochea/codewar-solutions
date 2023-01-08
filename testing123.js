// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


/*
P: an array of strings
R: returns array of string in format
    n: string
  for each index
E: [] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
P: map the array
format the array with replace
*/

let number = function(array){
    let format = ': s'
    return array
      .map((element) => {
        return element = format.replace('s', element)
      }).map((element, index) => {
        return (index + 1) + element
      })
}




// not using replace

let number2 = function(array){
    return array
      .map((element, index) => {
        return `${index + 1}: ${element}`  
      })
}