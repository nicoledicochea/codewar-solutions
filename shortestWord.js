// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

/*
P: a string of words
R: a number, the length of the shortest word
E: findShort("Let's travel abroad shall we") = 2
findShort("bitcoin take over the world maybe who knows perhaps") = 3
P: split string
loop through array
save length of each index into a helper array, length
return Math.min of helper array
*/

function findShort(s){
  
  let lengths = []
  
  s.split(' ').forEach(element => lengths.push(element.length))
  
  return Math.min(...lengths)
  
}