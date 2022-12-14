// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

/*
P: an array of 10 integers (0-9)
R: a string of those numbers in the form of a phone #
E: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890"
   createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111"
   createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890"
P: use template literal
*/

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}




// using replace string method

function createPhoneNumber2(numbers){
    let format = '(xxx) xxx-xxxx'
    numbers.forEach(number => {
      format = format.replace('x', number)
    })
    return format
}





// using substring method

function createPhoneNumber3(numbers){
    numbers = numbers.join('')
    return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`
}