// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Notes
// You may consider that there will not be any empty arrays/vectors.

// PREP
// P: an array
// R: a number, the min or max depending on the function
// E:  
  // [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
  // [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
  // [42, 54, 65, 87, 0]             -> min = 0, max = 87
  // [5]                             -> min = 5, max = 5
// P: Math.max and Math.min function
  // ... turns an array into a regular list of numbers

let min = function(list){
    
    return Math.min(...list)
}

const max = function(list){
let
    return Math.max(...list);
}