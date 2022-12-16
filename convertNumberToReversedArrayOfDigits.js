// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// code provided
    // function digitize(n) {
    //   //code here
    //   n = n + ''
    //   let arr = []
    //   for(let i = n; i < n.length; i++) {
    //     arr += arr[i]
    //   }
    
    //   return arr
    // }

/*
P: a number
R: an array of the digits in reverse order
E: 35231 => [1,3,2,5,3]
0 => [0]
P: convert the number into a string with
create variable arr set to an empty array
loop through string with for each
push items into the array in reverse order, starting from end to index 0
OR unshift 
*/


function digitize(n) {
  let arr = []
  String(n).split('').forEach(digit => arr.unshift(+digit))
  return arr
}


// refractor solution using REVERSE array method

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}