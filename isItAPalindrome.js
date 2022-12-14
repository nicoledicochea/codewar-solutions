// Write a function that checks if a given string (case insensitive) is a palindrome.

/*
P: a string
R: true or false
E: abba; true
abac; false
P: turn string, x, into array
reverse x
join to create reversed string
toLowerCase for both x and reverse
if reverse input equals x, then it is a palindrome

*/


function isPalindrome(x) {
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
}