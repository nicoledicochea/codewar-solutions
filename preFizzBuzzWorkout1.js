// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
    // PREP
    // P: positive integer, n
    // R: an array of 1 to n
    // E: preFizz(2) = [1, 2]
    //    preFizz(4) = [1, 2, 3, 4]
    // P: 
        // for loop: i = 0
        // end at n (inclusive)
        // array variable
        // push values into array variable
        // return array
    
    let array = []
    for(let i = 1; i <= n; i++) {
      array.push(i)
    }
    
    return array
}
