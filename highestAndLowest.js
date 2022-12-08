// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Notes
    // All numbers are valid Int32, no need to validate them.
    // There will always be at least one number in the input string.
    // Output string must be two numbers separated by a single space, and highest number is first.

/*
P: a string of numbers
R: highest & lowest value
E: highAndLow("1 2 3 4 5") = "5 1"
  highAndLow("1 2 -3 4 5") = "5 -3"
  highAndLow("1 9 3 4 -5") = "9 -5"
P: split string into an array
get max and min of array
*/

function highAndLow(numbers){
    numbers = numbers.split(' ')
    return [Math.max(...numbers), Math.min(...numbers)].join(' ')
}