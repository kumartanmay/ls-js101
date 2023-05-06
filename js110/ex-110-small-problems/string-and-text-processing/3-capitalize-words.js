/*
Write a function that takes a string as an argument and returns that string with the first character of every word capitalized 
and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

Examples:
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
*/

function wordCap(str) {
  // conver string into an array
  // take the first char of every element and capitalise it
  // concatenate it with rest of the string
  // Join the array

  let strArr = str.split(" ");

  let capitalise = strArr.map(elem => elem[0].toUpperCase() + elem.slice(1));

  return capitalise.join(" ");
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));