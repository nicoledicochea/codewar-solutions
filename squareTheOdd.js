// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


/*
P: an array of numbers

R: sort array in ascending order for ODDS
and EVENS stay in original order

E: [7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

P: create variable oddArray
filter out odds
sort odds in ascending orders
map original array
conditional
  if odd, return number from oddArray
    use shift to return number from oddArr
  if even, return itself
*/

function sortArray(array) {
    const oddArray = array
      .filter(number => number % 2 !== 0)
      .sort((a, b) => (a - b))
    
    return array.map((number) => {
      if (number % 2 === 0) {
        return number
      } else {
        return oddArray.shift()
      }
    })
}