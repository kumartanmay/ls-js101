/*
Write a function that takes a number as an argument. 
If the argument is a positive number, return the negative of that number. 
If the argument is a negative number, return it as-is.


Examples:
---------
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

Data & Algo:
------------
1. Convert the input into a Number
2. If the number is less than zero, print it
3. If not, subtract it from zero
*/


const rlSync = require("readline-sync");

const inputNumber = Number(rlSync.question("Please enter a number: "));

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
console.log(negative(inputNumber));

function negative(num) {
  if (num < 0) {
    return num;
  } else {
    return -num;
  }
}