// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

    // humanYears >= 1
    // humanYears are whole numbers only

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that



// my attempt

/*
P: a number
  - >= 1
  - whole number
R: the array of [humanYears,catYears,dogYears]
P: create variables, catYears, dogYears
loop 
use conditional
  for catYears:
    if humanYears = 2, + 9
    if humanYears > 2, + 4
  same for dog.
return array with variables
*/

let humanYearsCatYearsDogYears = function(humanYears) {
  
    let catYears = 15
    let dogYears = 15
    
    for (let i = 2; i <= humanYears; i++) {
      if (i === 2) {
        catYears += 9
        dogYears += 9
      } else {
        catYears += 4
        dogYears += 5
      }
    }
    
    return [humanYears, catYears, dogYears]
}
  

// other solution

let humanYearsCatYearsDogYears = function(humanYears) {
    
    let catYears = 0
    let dogYears = 0
  
    if (humanYears === 1) {
      catYears = 15
      dogYears = 15
    } else if (humanYears === 2) {
      catYears = 24
      dogYears = 24
    } else {
      catYears = 4 * (humanYears - 2) + 24
      dogYears = 5 * (humanYears - 2) + 24
    }
  
  return [humanYears, catYears, dogYears]
}
