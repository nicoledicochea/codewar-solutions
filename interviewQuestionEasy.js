// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"





/*
P: a string 
  - the name of a city
R: a string that shows how many times a letter shows up
  - only include letters
E: "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
P: create an empty object literal, letters
create empty array, cityCount
toLowerCase city
split city
forEach city
  conditional: if value is in [abcde...]
    input asterisks count into object
for in loop letters object
  for each key value pair, input into array cityCount in proper format
    (letter: letters[letter])
join cityCount with comma
return cityCount
*/

function getStrings(city){
  
    let letters = {}
    let cityCount = []
    
    city.toLowerCase().split('').forEach((element) => {
      if ('abcdefghijklmnopqrstuvwxyz'.split('').includes(element)) {
        if (!letters[element]) {
          letters[element] = '*'
        } else {
          letters[element] += '*'
        }
      }
    })
    
    for (const letter in letters) {
      cityCount.push(`${letter}: ${letters[letter]}`)
    }
    return cityCount.join(',').split(' ').join('')
}