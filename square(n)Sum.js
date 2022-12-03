// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

/*
  P: an array of numbers
  R: a number
  E: squareSum([1, 2, 2]) = 9
  P: square individual numbers in array using map
  reduce all squares by addition
*/

function squareSum(numbers){
    return numbers.map(element => element ** 2)
      .reduce((prev, curr) => prev + curr, 0)
}