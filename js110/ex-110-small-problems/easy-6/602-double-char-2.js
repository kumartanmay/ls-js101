/*
Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. 
The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Examples:
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
*/

// identify vowels
// identify digits, punctuation & whitespace - use regex

const vowels = ['a', 'e', 'i', 'o', 'u'];
const pattern = /[0-9 _.,!"'/$\s-]/g;

function doubleConsonants(str) {
  let result = '';
  let strSplit = str.split("");

  strSplit.forEach(elem => {
    if (elem.match(pattern) || vowels.includes(elem)) {
      result += elem;
      return;
    }
    result = result + elem + elem;
  })
  return result;
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));