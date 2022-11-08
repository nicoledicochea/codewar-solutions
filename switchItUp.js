// When provided with a number between 0-9, return it in words.

// Input :: 1
// Output :: "One".

// If your language supports it, try using a switch statement.

function swap (string) {
    // PREP
    // P: string
    // R: string with all vowels capitalized
    // E: swap('hello') = 'hEllO'
      //  swap('hi') = 'hI'
    // P: create variable stringArr
      //  loop through string
      //  push values to stringArr
      //  conditonal: if vowel, do toUpperCase before pushing
      //  join stringArr ('') to create a string
      //  return joined stringArr
    
    let stringArr = []
    for (let i = 0; i < string.length; i++) {
      if(string[i] === 'a' ||
        string[i] === 'e' ||
        string[i] === 'i' ||
        string[i] === 'o' ||
        string[i] === 'u'){
        stringArr.push(string[i].toUpperCase())
        } else {
          stringArr.push(string[i])
        }
      }
      return stringArr.join('')
}