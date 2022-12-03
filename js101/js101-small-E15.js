/*
Write a program that asks the user to enter an integer greater than 0, 
then asks whether the user wants to determine the sum or 
the product of all numbers between 1 and the entered integer, inclusive.

Examples:
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
---

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.


PEDAC:
Problem (Input, Output, Implicit rule, Domain, Mental model):
  Input: 5 , p
  Output: 720
  Input: 10, s
  Output: 55
  Implicit rule: The input from the user is text by default. Convert it into number before summing it.
  Mental model:
    (1) Convert the integer input into number.
    (2) Check whether the request is 's' or 'p'
    (3) 's': Run a loop in steps of one until the input number is reach.
    (4) sum the number in every loop
    (5) 'p': multiply the number in every loop
Examples (Test cases):
  Input: 5 , p
  Output: 720
  Input: 10, s
  Output: 55
Data Structure:
  s:
  1 -> 1
  2 -> 1+2
  5 -> 1+2+3+4+5

  p:

Algo:
  (1) include readline-sync method from npm package
  (2) number = Number(user input)
  (3) for(counter < number)
  (4) s: result = result + counter
  (5) p: result = result * counter
  (6) log result
*/


let readlineSync = require('readline-sync');

let number = Number(readlineSync.question("Please enter a number greater than zero: \n"));
let input = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product: \n');

let pResult = 1;
let sResult = 0;

for (let ctr = 1; ctr <= number; ctr++) {
  switch (input) {
    case 's':
      sResult += ctr;
      break;
    case 'p':
      pResult *= ctr;
      break;
  }
}

input === 's'? console.log(`The sum of numbers between 1 and ${number} is: ${sResult}`) : console.log(`The product of numbers between 1 and ${number} is: ${pResult}`)
