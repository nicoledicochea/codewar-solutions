// When provided with a number between 0-9, return it in words.

// Input :: 1
// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number){
    // PREP
    // P: a number 0 - 9
    // R: the number in words
    // E: swithItUp(3) = 'three'
      // swithItUp(0) = 'zero'
    // P: use a switch statement for each number
    
    switch (number) {
        case 0: return 'Zero'
        case 1: return 'One'
        case 2: return 'Two'
        case 3: return 'Three'
        case 4: return 'Four'
        case 5: return 'Five'
        case 6: return 'Six'
        case 7: return 'Seven'
        case 8: return 'Eight'
        case 9: return 'Nine'
    }
}