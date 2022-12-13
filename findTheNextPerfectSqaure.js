// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

    // 121 --> 144
    // 625 --> 676
    // 114 --> -1 since 114 is not a perfect square





/*
P: a number
R: the next square if sq is a perfect square, -1 otherwise
E:121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
P: conditional
  if not perfect sqaure, return -1
  if perfect sqaure continue
to determine a perfect sqaure
  Math.sqrt(of number) - isInteger
to find next square
  take square root and add 1 to get to next number
  then sqaure that value
*/

function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    return (Math.sqrt(sq) + 1) ** 2
  } else {
    return -1
  }
}