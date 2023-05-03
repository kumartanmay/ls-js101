/*
MULTIPLICATIVE AVERAGE
Write a function that takes an array of integers as input, multiplies all of the integers together, 
divides the result by the number of entries in the array, and 
returns the result as a string with the value rounded to three decimal places.

Examples:
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
*/

function multiplicativeAverage(arr) {
  return (arr.reduce((acc, curv) => acc * curv, 1) / arr.length).toFixed(3).toString();
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));