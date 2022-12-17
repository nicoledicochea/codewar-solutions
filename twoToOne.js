// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

/*
P: 2 strings of letters
R: a sorted string of a to z using letters contained in a or b
P: convert string to array. split
check if array includes letter,
if so, filter out
sort through array
*/

function longest(s1, s2) {
  
    let arr = []
    
    let split = (s1 + s2).split('').forEach((element) => {
      if (!arr.includes(element)) {
        arr.push(element)
      }
    })
  
      
    return arr
      .sort()
      .join('')

}


// using SET method

// A Set is a collection of unique values. To remove duplicates from an array:

    // First, convert an array of duplicates to a Set. The new Set will implicitly remove duplicate elements.
    // Then, convert the set back to an array.

function longest(s1, s2) {
    return [... new Set ((s1 + s2).split(''))]
      .sort()
      .join('')
}


// SET can be used without split

function longest(s1, s2) {
  return [... new Set (s1 + s2)]
    .sort()
    .join('')
}