/*
Write a function that takes a string argument containing one or more words and returns a new string containing the words 
from the string argument. All five-or-more letter words should have their letters in reverse order. 
The string argument will consist of only letters and spaces. Words will be separated by a single space.

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
*/

// create an array consisting of words in a sentence
// reverse the letters of words with length > 5
// return a new string with the modified words

function reverseWords(sentence) {
  let copySentence = sentence.slice(); // creates a copy of setence
  let words = copySentence.split(" ").map(word => {
    if (word.length > 4) return word.split('').reverse().join('');
    return word;
  });

  console.log(sentence);

  console.log(words.join(" "));
}

reverseWords('Launch School');
reverseWords('Professional');
reverseWords('Walk around the block');