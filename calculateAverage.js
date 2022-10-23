// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if (array.length === 0) {
      return 0
    } else {
      let sum = 0
      sum = array.reduce((prev, curr)  => prev + curr)
      let product = sum / array.length
      return product
    }
}