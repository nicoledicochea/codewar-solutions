// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


function filter_list(l) {
    // P: an array
    // R: a new array with the strings filtered out
    // E: 
      // filter_list([1,2,'a','b']) == [1,2]
      // filter_list([1,'a','b',0,15]) == [1,0,15]
      // filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
    // P:
      // for loop through array
      // coniditonal: push any array[i] that typeof != string
    
    let newList = []
    
    for (let i = 0; i < l.length; i++) {
      
      if (typeof l[i] !== 'string') {
        newList.push(l[i])
      } 
    }
    
    return newList
    
}


// using filter array method

function filter_list(l) {
    
      // filter array by condition: typeof !== 'string'
  
  return l.filter((element) => typeof element !== 'string')
    
}