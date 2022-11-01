// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // PREP
    // P: dadYearsOld, sonYearsOld
    // R: will always return # > 0
    // E: 
      //  twiceAsOld(60, 30) // 0
      //  twiceAsOld(30, 4) // 26
    // P:
      // return remainder 
      // dadYearsOld - (sonYearsOld * 2)
      // want positive = absolute value
    
    return Math.abs(dadYearsOld - (sonYearsOld * 2))
}