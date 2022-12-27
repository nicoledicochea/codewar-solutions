// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


/*
P: an array of integers as both strings and numbers
R: return the sum of the array values as if all were numbers
E: sumMix([9, 3, '7', '3']) => 22
  sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) => 42
  sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) => 41
P: sum of array = use reduce
reduce (prev, curr) => prev + curr, 0
but want only numbers, not strings
  so use ('+') in front of curr
  OR Number(curr)
*/

function sumMix(x){
    return x.reduce((prev, curr) => prev + +curr, 0)
}