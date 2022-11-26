// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false




// P: a string, single word or empty
// R: true or false
// E:isIsogram("Dermatoglyphics") = true
  // isIsogram("moose") = false
  // isIsogram("aba") = false
// P: save key value pair for each letter in an object
  // letter: count
  // return true or false if all counts are 1
  // use the for in function to loop through object

function isIsogram(str){
  
  let stringUpperCase = str.toUpperCase()
  
  let count = {}
  
  for (const element of stringUpperCase) {
    if (count[element]) {
      count[element] ++
    } else {
      count[element] = 1
    }
  }
  
  let countArr = []
  
  for (const num in count) {
    if (count[num] > 1) {
      countArr.push(count[num])
    } 
  }
  
  return countArr.length < 1
  
}

// great resource/tutorial for counting the number of times a character appears in a string https://bobbyhadz.com/blog/javascript-count-occurrences-of-each-element-in-array#:~:text=To%20count%20the%20occurrences%20of,initialize%20the%20count%20to%201%20.