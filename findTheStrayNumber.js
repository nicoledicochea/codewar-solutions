// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    let count = {}
    let strayNumber
    numbers.forEach(element => {
      if (count[element]) {
        count[element] ++
      } else {
        count[element] = 1
      }
    })
    for (const element in count ) {
      if (count[element] === 1) {
        return strayNumber = +element
      }
    }
    return strayNumber
}




// using indexOf and lastIndexOf

function stray(numbers){
    for (const number in numbers){
       if (numbers.indexOf(numbers[number]) === numbers.lastIndexOf(numbers[number])){
         return numbers[number]
       }
    }
}