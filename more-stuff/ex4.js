/* 
Given a list of numbers, write some code to find and display the largest numeric value in the list.
*/

function maxNumber (arr) {
  return arr.reduce(
    (prev, curr) => Math.max(prev, curr))
}

console.log(maxNumber([2,2]))