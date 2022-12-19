/*
Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

Examples:
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

PROBLEM
  Input: 
  Ouput:
  Implicit rule: Min two words in the input. Max one blank char between words.
  Mental model: split the list of words by space and put them in an array. Print the
  second last element of the array

DATA STRUCTURE:
  Input: A string separated by spaces
  Ouput: String extracted from array of elements consisting of words in the input
ALGO:

*/

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

function penultimate(word) {
  let array = word.split(' ');
  return array[array.length - 2];
}