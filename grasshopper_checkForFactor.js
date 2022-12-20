// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.



/* P: 2 numbers: base, factor

R: true or false
E:checkForFactor(10,2), true
checkForFactor(63,7), true
P: conditional
if base % factor = 0, return true
*/

function checkForFactor (base, factor) {
    return base % factor === 0 ? true : false
}

// alternatively, can just remove the conditional
// since result of comparison is true or false
function checkForFactor (base, factor) {
    return base % factor === 0 
}