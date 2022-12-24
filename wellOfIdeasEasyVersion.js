// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

/*
P: an array
R: 'Fail' or 'Publish!' or 'I smell a series!'
E: well(['bad', 'bad', 'bad']), 'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!'
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!'
P: create a goodCount variable
loop through the array
conditonal: for every 'good', add 1 to the goodCount
then use conditional to determine the output 
*/

function well(x){
    let goodCount = 0
    x.forEach(element => {
      if (element === 'good') {
        goodCount ++
      }
    })
    
    if (goodCount === 0) {
      return 'Fail!'
    } else if (goodCount === 1 || goodCount === 2) {
      return 'Publish!'
    } else {
      return 'I smell a series!'
    }
}