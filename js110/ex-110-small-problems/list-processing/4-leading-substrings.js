/*
Write a function that takes a string argument and returns a list of substrings of that string. 
Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

Examples:
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
*/

function leadingSubstrings(str) {
  /*
  1. The resulting substring is combination of characters of the string
  2. Possible Substrings are same in count as number of characters in a string

  */

  let arrayOfCharsInString = str.split(""); // [a, b, c]
  let result = [arrayOfCharsInString.shift()];

  arrayOfCharsInString.map((elem, index) => result[index+1] = result[index] + elem);
  /*
  for(let i = 1; i < arrayOfCharsInString.length; i++) {
    result[i] = result[i - 1] + arrayOfCharsInString[i]; 
  }
  */

  return result;
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('xyzzy'));
console.log(leadingSubstrings('a'));