// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


/*
P: a string of a word or words
R: the string with the words in reverse order
E:  reverseWords("hello world!"                 ),  "world! hello"
    reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda"
    reverseWords("foobar"                       ),  "foobar"
    reverseWords("kata editor"                  ),  "editor kata"
    reverseWords("row row row your boat"        ),  "boat your row row row"
P: split string @ space
for loop
start from last index to first
join array
*/


function reverseWords(str){
    str = str.split(' ')
    let reverse = []
    for(let i = (str.length - 1); i >= 0; i--){
      reverse.push(str[i])
    }
    return reverse.join(' ')
}
