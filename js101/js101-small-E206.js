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
  Split the input sentence by " " separator. Print the second last element of the array.
*/

/*
Further Exploration

Our solution ignored a couple of edge cases because we explicitly stated that 
you didn't have to handle them: strings that contain just one word, and strings that contain no words.

Suppose we need a function that retrieves the middle word of a phrase/sentence. 
What edge cases need to be considered? How would you handle those edge cases without ignoring them? 
Write a function that returns the middle word of a phrase or sentence. 
It should handle all of the edge cases you thought of.

PROBLEM:
  Implicit: Input can be of any length. May or may not contain spaces
  Mental model: Check if the word has space. If not, the word or blank space itself is the middle word. 
  In case of blank, print "blank input. there is no middle word". If the count of words in the array is 
  even, then the middle word is length / 2. When it is odd, then (length - 1)/2.
DATA STRUCTURE & ALGO:
  (1) Check if the input has blank space or not. 
  (2) If not, check if it is a single word or not. If not, then print, input is blank
*/

console.log(penultimate("The last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate("last") === "last"); // logs true
console.log(penultimate(" ") === ""); // logs true

function penultimate(word) {
  let array = word.split(' ');
  if (array.length === 1) return array[0];

  // TIL: " ".split(" ") returns ['','']
  else if (array.length % 2 === 0) {
    return array[array.length / 2];
  }
  else {
    return array[(array.length - 1) / 2];
  }
}