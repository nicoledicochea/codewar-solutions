// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
//     "This is an example!" ==> "sihT si na !elpmaxe"
//     "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // P: a string
    // R: reverse each word in a string
    // E: reverseWords("This is an example!") ==> "sihT si na !elpmaxe"
    // P: 
      // split each word at a space
      // save new split array into a variable
      // use map on the split array
        // split the string and reverse and join it
      // join the split array with a space
    
    let splitArr = str.split(' ')
    
    splitArr = splitArr.map(element => element.split('').reverse().join(''))
    
    return splitArr.join(' ')
}



// improve function formatting

function reverseWords(str) {
    // P: a string
    // R: reverse each word in a string
    // E: reverseWords("This is an example!") ==> "sihT si na !elpmaxe"
    // P: 
      // split each word at a space
      // save new split array into a variable
      // use map on the split array
        // split the string and reverse and join it
      // join the split array with a space
    
    return str.split(' ').map(element => {
        return element.split('').reverse().join('')
    }).join(' ')
}