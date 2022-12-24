// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
    // P: a number
    // R: a string
    // E: countSheep(3) => "1 sheep...2 sheep...3 sheep..."
    // P: create numOfSheep variable 
    // loop from 1 to num 
    // for each number add 'num' + sheep... to numOfSheep
    // return string
    
    let numOfSheep = ''
    for (let i = 1; i <= num; i++) {
      numOfSheep += `${i} sheep...`
    }
    return numOfSheep
}