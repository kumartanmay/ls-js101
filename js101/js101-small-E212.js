/*
GET MIDDLE CHARACTER

Write a function that takes a non-empty string argument and returns the middle character(s) of the string. 
If the string has an odd length, you should return exactly one character. 
If the string has an even length, you should return exactly two characters.

PROBLEM

EXAMPLE
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

DATA STRUCTURE:
Input: String
Output: String with a single or two characters

ALGO:
Calculate the length of the string
Divide the length into half and store it
The stored value is the index of the middle char of the input string
In case of even length of the string, it should return the character at the index and preceding it
*/

function centerOf(string) {
  let stringLength = string.length;
  let oddOrEven = isStringLengthOdd(stringLength);
  if (oddOrEven === "even") {
    let midChar = stringLength / 2;
    return string[midChar - 1] + string[midChar];
  } else {
    let midChar = (stringLength - 1) / 2;
    return string[midChar];
  }
}

function isStringLengthOdd(strLength) {
  if ((strLength % 2) === 0) {
    return "even";
  } else return "odd";
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
