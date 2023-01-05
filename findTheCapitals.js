// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


/*
P: a string, a word
R: an array of the indexes of the capital letters
E: capitals('CodEWaRs'), [0,3,4,6]
P: split word
map array 
    conditional element equals element.toUpperCase
*/

let capitals = function (word) {
  let capitals = []
	word
    .split('')
    .forEach((element, index) => {
      if (element === element.toUpperCase()) {
        capitals.push(index)
      }
    })
  return capitals
}