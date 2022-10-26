/*
Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
*/

let array = [3,5,7]
let squares = array.map(num => num * num);
let result = squares.reduce(
  (previousValue, currentValue) => previousValue + currentValue);
console.log(result);