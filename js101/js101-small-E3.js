/*
Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

PEDA:
Problem (input, output, implicit rules, mental model): 
  1. Input: Range of numbers from 1 to 99
  2. Output: Each even number between the range 1 and 99, each in a new line
  Implicit rule: 
  Mental model: Run a loop on the range in steps of two and check for each number if it even.
  If yes, print each number on a new line.

Examples:
2
4
6
...
96
98

Data Structure & Algo:
*/

for (let i = 1; i < 99; i++) {
  (i % 2 === 0) ? console.log(`${i}`) : console.log(`-`)
}