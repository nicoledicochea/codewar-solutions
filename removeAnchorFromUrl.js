// Complete the function/method so that it returns the url with anything after the anchor (#) removed.



/*
P: a string, url
R: remove everything after the '#' anchor tag
E: "www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
P: split array
map array
  conditional
    return all elements that don't include '#'
return joined array
*/

function removeUrlAnchor(url){
    let anchorIndex = url.split('').indexOf('#')
    return url
      .split('')
      .map((element, index) => {
        if (anchorIndex === -1 || index < anchorIndex) {
          return element
        }
      }).join('')
}




// using split at #
// return the first item
    // this would be everything before the #

function removeUrlAnchor2(url){
    return url.split('#')[0]
}