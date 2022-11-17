// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

    // name + " plays banjo" 
    // name + " does not play banjo"

// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    // P: a name
    // R: 'name plays banjo' OR 'name does not play banjo'
    // E: 
      // areYouPlayingBanjo('Rocky') = 'Rocky plays banjo'
      // areYouPlayingBanjo('Jane') = 'Jane does not play banjo'
    // P: conditional
      // if name starts with r or R
      // name at index 0 will determine first letter
      // need first letter to not be case-sensitive
    
    return name[0].toUpperCase() === 'R' ? `${name} plays banjo` : `${name} does not play banjo`
}