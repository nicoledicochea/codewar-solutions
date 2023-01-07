// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'




/*
P: a string
R: a string with only the first word entry
E: removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
    => 'alpha beta gamma delta'
P: split string into array
create variable noDuplicates
  set to empty array
push first of a word into array
*/

function removeDuplicateWords (s) {
    let noDuplicates = []
    s.split(' ').forEach(element => {
      if(!noDuplicates.includes(element)) {
        noDuplicates.push(element)
      }
    })
    return noDuplicates.join(' ')
}


