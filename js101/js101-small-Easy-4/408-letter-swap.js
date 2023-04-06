/*
Given a string of words separated by spaces, write a function that swaps the first 
and last letters of every word.

You may assume that every word contains at least one letter, and 
that the string will always contain at least one word. 
You may also assume that each string contains nothing but words and spaces, 
and that there are no leading, trailing, or repeated spaces.

Examples:
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
*/

function swap(sentence) {
  //split the sentence into an array of words
  //reverse the first and elements of the array
    //split the first and last elements of the array
    //reverse it and join
  //join the mutated array and return it
  
  let words = sentence.split(" ");

  if (words.length > 1) {
    words[0] = reverseWord(words[0]);
    words[words.length - 1] = reverseWord(words[words.length - 1]);
  } else {
    return reverseWord(sentence);
  }
  return words.join(" ");
}


function reverseWord(word) {
  return word.split("").reverse().join("");
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"