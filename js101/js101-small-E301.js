/*
Write a function that takes a string argument and returns a new string that contains 
the value of the original string with all consecutive duplicate characters collapsed 
into a single character.


Problem:
=======
  1. Input is any string which may or may not be in dictionary.
  2. Find all the consecutive duplicate chars
EXAMPLES:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Data Structure:
  1. Input: String
  3. Intermediate variables:
    3.1 new string =''
  2. Output: New String

Algo:
  1. Run a loop on each char of the string.
  2. If the current char is same as prev char, then continue with the loop. 
  3. Append each unique char in the resulting string
*/

function crunch(str) {
  let result = '';
  for (let index = 0; index < str.length; index += 1) {
    if (str[index + 1] === str[index]) {
      continue;
    } else {
      result += str[index];
    }
  }
  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""