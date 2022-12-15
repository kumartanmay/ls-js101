/*
Create a function that takes two arguments, multiplies them together, and returns the result.

Example:
console.log(multiply(5, 3) === 15); // logs true
*/

function multiply(num1, num2) {
  return num1 * num2;
}

const square = (num) => multiply(num, num);

console.log(square(8));
console.log(square(-8));