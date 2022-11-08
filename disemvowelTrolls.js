// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    // PREP
    // P: a string, str
    // R: remove all vowels
    // E: disemvowel('hello') = 'hll'
       // dismvowel('hi') = 'h'
    // P: create variable strArr
       // loop through str and push all non-vowels into strArr
       // return joined strArr
    
    let string = str.toLowerCase()
    
    let strArr = []
    for (let i = 0; i < str.length; i++) {
      if(string[i] !== 'a' &&
        string[i] !== 'e' &&
        string[i] !== 'i' &&
        string[i] !== 'o' &&
        string[i] !== 'u') {
         strArr.push(str[i])
         }
    }
  
    return strArr.join('')
}