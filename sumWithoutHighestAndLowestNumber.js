// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


// P: an array of numbers
// R: sum off all numbers, excluding min and max of array
// E: { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// P: find index of max and min
// splice the found indeces from (index, 1)
// return reduced array

function sumArray(array) {
    if (!array) {
      return 0
    } else {
      array.splice(array.indexOf(Math.min(...array)), 1)
      array.splice(array.indexOf(Math.max(...array)), 1)
      return array.reduce((a, c) => a + c, 0)
    }
}


// using sort and slice

function sumArray(array) {
    return !array ? 0 : array
      .sort((a, b) => a - b) // sort in ascending order
      .slice(1, -1) // remove first and last index
      .reduce((a, b) => a + b, 0)
}