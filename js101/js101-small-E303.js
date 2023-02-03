/*

Stringy Strings

Write a function that takes one argument, a positive integer, and returns a string of alternating '1's 
and '0's, always starting with a '1'. The length of the string should match the given integer.

Problem:

Example:
=======
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

Data Structure & Algo:
 1. Input: a number
 2. Output: String of alternating numbers, length equal to input
*/

function stringy(length) {
  let result = "";
  for (let index = 0; index < length; index += 1) {
    if (index % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));