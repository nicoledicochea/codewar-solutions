// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

/*
P: a string of letters, (a - z, A - Z)
R: each letter repeated depdendent on its index
E: accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
P: split input string, s
turn to all uppercase
map array
for each item, repeat it index + 1 times
join items with -
*/
function accum(s) {
	return s
    .toUpperCase()
    .split('')
    .map((element, index) => {
      let letter = element
      for (i = 0; i < index; i++) {
        letter += element.toLowerCase()
      }
      return letter
    }).join('-')
}