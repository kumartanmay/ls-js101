/*
Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. 
The UTF-16 string value is the sum of the UTF-16 values of every character in the string. 
(You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

Examples:
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
*/

let rlSync = require('readline-sync');

let strArg = rlSync.question('Please enter a string: ')

function utf16Value(strArg) {
  let result = 0;

  for(let iter = 0; iter < strArg.length; iter++) {
    result += strArg.charCodeAt(iter);
  }

  return result;
}

console.log(utf16Value(strArg))