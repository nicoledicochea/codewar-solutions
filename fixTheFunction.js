// Fix the function
    // I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

    // Can you help me fix the function?

// Original function:

function addFive(num) {
    var total = num + 5
    return num
}

// Solution:

// PREP:
    // P: a number, num
    // R: return total sum
    // E: 
        // addFive(4) = 9
        // addFive(-2) = 3
        // addFive(15) = 20
    // P:
        // create variable total
        // total equals number plus five
        // return variable total

function addFive(num) {
    var total = num + 5
    return total
}