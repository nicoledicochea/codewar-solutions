// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
    // Input: 42145 Output: 54421
    // Input: 145263 Output: 654321
    // Input: 123456789 Output: 987654321

function descendingOrder(n){
    // P: n > 0
    // R: numbers in descending order
    // E: descendingOrder(123) = 321
       // descendingOrder(65375) = 76553
    // P: 
    // change number to string
    // loop through string to add numbers to an empty array
    // sort the array by descending order
    // return joined array
    
    let stringNum = n.toString()
    let nArray = []
    for (let i = 0; i < stringNum.length; i++) {
      nArray.push(stringNum[i])
    }
    
    let sortedArr = nArray.sort((a, b) => b - a)
    return Number(sortedArr.join(''))
    
}