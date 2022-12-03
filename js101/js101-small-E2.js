/*
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

PEDAC:
Problem (Input, Output, Domain, Mental Model):
  Input: All numbers between 1 and 99, inclusive
  Output: All odd numbers between 1 and 99, inclusive; each number should be on a separate line
  Implicit rule: all the numbers are absolute positive integers between 1 and 99
Examples (Test cases): 
1
3
5
...
97
99

Data Structures & Algo:
  1. start a do loop where the initiator is 1
  2. returns an odd value on a new line when the remainder after %2 is non-zero
  3. increment the initiator by 2
  4. Repeat the loop until the initiator is less than 100
*/

let startingNumber = 1;

do {
  (startingNumber % 2 === 1) ? console.log(`${startingNumber} \n`) : startingNumber += 2;
  startingNumber += 2;
} while(startingNumber < 100);