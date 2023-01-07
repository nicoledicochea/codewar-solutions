// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.


/*
P: a string, an english-language word
R: the number of consonants in the string
E: consonantCount(''), 0, 'Test string is empty string'
  consonantCount('aaaaa'), 0, 'Test string: "aaaaa"'
  consonantCount('XaeiouX'), 2, 'Test string: "XaeiouX"'
  consonantCount('Bbbbb'), 5, 'Test string: "Bbbbb"'
  consonantCount('helLo world'), 7, 'Test string: "helLo world"'
  consonantCount('h^$&^#$&^elLo world'), 7, 'Test string: "h^$&^#$&^elLo world"'
  consonantCount('0123456789'), 0, 'Test string: "0123456789"'
  consonantCount('012345_Cb'), 2, 'Test string: "012345_Cb"'
P: create string consonants, split to array
create variable count = 0
loop through split input string
  conditional
    if consonant variable includes element, add 1 to count
return count
*/

function consonantCount(str) {
  let consonants = 'bcdfghjklmnpqrstvwxyz'.split('')
  let count = 0
  str
    .toLowerCase()
    .split('')
    .forEach(element => {
      if (consonants.includes(element)) {
        count ++
      }
    })
  return count
}