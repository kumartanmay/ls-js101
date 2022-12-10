/*
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, 
that are multiples of 3 or 5. For instance, if the supplied number is 20, 
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Examples:
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

Problem (input, output, implicit rule, mental model):
-----------------------------------------------------

Implicit rule: all input is integer > 1.
If the number the number is less than 3 then the result = 0;
Mental model:
Determine all the multiples of 3 and 5 and compare it with the input. 
If the multiple is less than the input, place it in a list. 
Do not double count the multiples of both 5 and 3.
Add all the elements in the list.

Examples: 
(1) Input: 3
(2) Output: 3
(3) Input: 15
(4) Output: 3+5+6+9+10+12+15 = 60

Data Structures and Algorithm:
(1) Convert the input from string to number
(2) Create an empty array, find all the multiples of 3 and 5 less than the input.
(3) Push all the multiples into the array
(4) Remove all the duplicates from the array
(5) Add all the elements of the array

Pseudocode:
START

GET input = the number from user
SET array = []
SET multiple = 3
WHILE multiple < input, 
  IF multiple is divisible by 5
    SET multiple into array
  IF multiple is divisible by 3
    READ multiple is already in the array
    IF yes continue
    ELSE
      SET multiple into array
  ELSE 
    multiple = multiple + 1

SET iterator = 1
SET result = 0

WHILE iterator < length of array
  result = result + array[iterator]

PRINT result
END

*/

const rlSync = require('readline-sync');
let result = 0;

let input = Number(rlSync.question('Please enter a number greater than 1: '));

function multisum(input) {

  let multiples = []
  if (input < 3) return result;

  for (let iter = 5; iter <= input; iter += 5) {
    multiples.push(iter);
  }

  for (let iter = 3; iter <= input; iter += 3) {
    if (multiples.includes(iter)) {
      continue;
    }
    else {
      multiples.push(iter);
    }
  }

  for(let iter = 0; iter < multiples.length; iter++) {
    result += multiples[iter]
  }
  return result;
}

console.log(multisum(input));
