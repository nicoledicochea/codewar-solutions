// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
//     4 --> 3 (1, 2, 4)
//     5 --> 2 (1, 5)
//     12 --> 6 (1, 2, 3, 4, 6, 12)
//     30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

/*
P: a number, n
R: the number of divisors
E: getDivisorsCnt(4) = 3
getDivisorsCnt(2) = 2
P: divisors = use modulus
loop through i = 1 to the input number, n
conditional
  if n % 2 = 0
  add to count
so need variable count
count ++ in conditional
*/

function getDivisorsCnt(n) {
  
    let count = 0
    
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count ++
      }
    }
    
  return count
  
}