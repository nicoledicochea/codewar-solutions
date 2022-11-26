// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


/*
P: a string
R: an object
E: count(aba) = {'a': 2, 'b': 1}
P: for of loop through string
add element to object
add element[count] to object
*/

function count (string) {  
  
    let strCount = {}
    
    for (const letter of string) {
      if (strCount[letter]) {
        strCount[letter] ++
      } else {
        strCount[letter] = 1
      }
    }
    
    return strCount
}