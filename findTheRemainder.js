// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Examples:
    // n = 17
    // m = 5
    // result = 2 (remainder of `17 / 5`)

    // n = 13
    // m = 72
    // result = 7 (remainder of `72 / 13`)

    // n = 0
    // m = -1
    // result = 0 (remainder of `0 / -1`)

    // n = 0
    // m = 1
    // result - division by zero (refer to the specifications on how to handle this in your language)

// Division by zero should return NaN.


function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    // PREP
    // Parameters: n, m (integers)
    // Return: remainder, %
        // conditional n > m
    // Example: remainder(17, 5) // 2
        // remainder(0, -1) // 0
    // Psuedo Code: 
        // if n > m return n % m
        // if m > n return m % n
    
    return n > m ? n % m : m % n 
}