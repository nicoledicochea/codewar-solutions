// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.



// P: an array of numbers
// R: the sum of the 2 lowest positive numbers
// E: sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 
// sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 
// sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 
// sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 
// sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 
// P: first, find the two lowest numbers
//   - sort the array from smallest to largest
//   - take the 0 and 1 index
// then, add them
//   - add together 0, 1 indeces
// return sum

function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort((a, b) => a - b)
    return numbers[0] + numbers[1]
}


// can also write the solution without numbers = numbers.sort(....)
// since sort by nature is mutable, it changes the original array

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b)
    return numbers[0] + numbers[1]
}