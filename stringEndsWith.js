// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

/*
P: 2 strings
      str
      ending
R: true or false
  dependent on if str ends with ending
E: solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
P: split str
use slice
slice (start, end)
  slice(-1) would give last item of array
  slice(-arr.length of ending) would slice off the end
compare the slice (join back to string) to ending
  conditonal for true/false

debugging: need to account for test with input ending = ''
*/

function solution(str, ending){
    return ending.length > 0 ? str
      .split('')
      .slice(-ending.length)
      .join('') === ending : true
}