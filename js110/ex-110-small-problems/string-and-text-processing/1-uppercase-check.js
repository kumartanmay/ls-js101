/*
Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; 
false otherwise. Ignore characters that are not alphabetic.

Examples:
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
*/

function isUppercase(str) {
  // strip string of non-alphabetical chars
  // check every char is uppercase or not
  let alphabets = str.replace(/[^A-Za-z]/g,'');
  return alphabets.split("").every(elem => elem === elem.toUpperCase());
}

console.log(isUppercase('4SCORE!'));
console.log(isUppercase('FOUR SCOre- '));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('T'));
console.log(isUppercase('h'));
console.log(isUppercase(''));