// Create a method to see whether the string is ALL CAPS.

    // Examples (input -> output)
    // "c" -> False
    // "C" -> True
    // "hello I AM DONALD" -> False
    // "HELLO I AM DONALD" -> True
    // "ACSKLDFJSgSKLDFJSKLDFJ" -> False
    // "ACSKLDFJSGSKLDFJSKLDFJ" -> True

    // In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.



/*
P: a string
R: true or false
E: (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
P: true: must not contain ANY lowercase letters
make variable, uppercase = true
must check each letter against toLowercase
  need to account for non letters
  create helper abcs array
  then check if abc.includes()
loop through the string array forEach
  if lowercase, return uppercase = false
return uppercase
*/

String.prototype.isUpperCase = function() {
    const abc = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let uppercase = true
    this.split('').forEach(element => {
      if (!abc.includes(element)) {
        return
      } else if (element === element.toLowerCase()) {
        uppercase = false
      }
    })
    return uppercase
}