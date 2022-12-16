/*
ARITHMETIC INTEGER

Write a program that prompts the user for two positive integers, 
and then prints the results of the following operations on those two numbers: 
addition, subtraction, product, quotient, remainder, and power. 
Do not worry about validating the input.

Example
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23

PEDAC:
=====
Example: 
  Input: 10, 9
  Output: 19, 1, 90, 1, 1, 1000000000
  
Problem:(Implicit rule, Mental model)
  Implicit rule: all the inputs are integers greater than zero. Output is always an integer.
  Second input can be bigger than the first one
  Mental model: take inputs and then perform all the operations one by one.

Data Structure and Algo:
  Input: two integers. Convert the input into number.
  Output: 5 integers and a bigInt
*/

let rlSync = require('readline-sync');
let num1 = Number(rlSync.question("==> Please enter the first number: "));
let num2 = Number(rlSync.question("==> Please enter the second number: "));

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);
