// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


// P: an array, of numbers or empty
// R: a new array with the lowest number removed
//   caveats:
//     - if multiple of the lowest number, remove one with lowest index
//     - if given an empty array, return an empty array
// Examples: 
//   removeSmallest([1, 2, 3, 4, 5]) = [2, 3, 4, 5]
//   removeSmallest([5, 3, 2, 1, 4]) = [5, 3, 2, 4]
//   removeSmallest([2, 2, 1, 2, 1]) = [2, 2, 2, 1]
// Psuedo Code:
//   use Math.min on the array
//   use (...array) - spread operator - to turn array into a regular set of numbers
//   save the min number to variable, setMin
//   use findIndex to search the array for the index of setMin
//   filter array
//   return all elements that don't equal minIndex
//   conditional: if findIndex = -1 return []
//   return numbers.filter result

function removeSmallest(numbers) {
  
    let min = Math.min(...numbers)
    let minIndex = numbers.findIndex((element) => element === min)
    
    return minIndex > -1 ? numbers.filter((element, i) => i !== minIndex) : []
    
}