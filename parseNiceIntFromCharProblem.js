// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.


function getAge(inputString){
    // P: the string 'x years old' in which x is 0 <= x <= 9
    // R: the girl's age as an integer
    // E: getAge('5 years old') = 5
    // P: return the first index of the string
        // make sure to turn string into a number!
    
    return Number(inputString[0])
}

