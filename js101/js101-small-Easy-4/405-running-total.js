/*
Write a function that takes an array of numbers and returns an array with the same number of elements, 
but with each element's value being the running total from the original array.

Examples:

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

1. Input array
2. Start a loop on the array and assign first element to a new array
3. Subsequent elements are sum of the current 
*/

function runningTotal(array) {
  let result = [];
  
  if(array.length) result = [array[0]];

  for (let i = 1; i < array.length; i++) {
    result.push(result[i-1] + array[i]);
  }

  return result;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));