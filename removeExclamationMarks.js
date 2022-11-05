// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


function removeExclamationMarks(s) {
    // PREP
    // P: a string with exclamation marks
    // R: a new string with all exclamations removed
    // E: removeExclamationMarks('hello!!!!') = 'hello'
    //    removeExclamationMarks('hi!!!! there') = 'hi there'
    // P: loop through the string indeces
    //    if value doesn't equal ! push value into empty array
    //    join array ('')
    //    return joined array (ie. string)
    
    removeExclamationArray = []
    
    for(let i = 0; i < s.length; i++) {
      if (s[i] !== '!') {
        removeExclamationArray.push(s[i])
      }
    }
    
    return removeExclamationArray.join('')
}