/*
Write a function that takes a string and returns an object containing the following three properties:

    the percentage of characters in the string that are lowercase letters
    the percentage of characters that are uppercase letters
    the percentage of characters that are neither

You may assume that the string will always contain at least one character.

Examples:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Problem:
Input:
  1. A string
Output:
  1. Object

Rules:
  1. Input string will contain at least one char
  2. String consists of uppercase, lowercase and non-alphabets only

Algo:
  1. Split the string into an array of characters; the length of array is the length of string
  2. Count the chars in uppercase, lowercase and the rest
  3. Calculate the percentages and assign it to the output object

Data Structure:
1. Input: A string
2. Array: Store the characters of string
3. Object with properties: lowercase, uppercase, neither, each intialised to 0.00
4. 
*/

function letterPercentages(sentence) {
  let charsInSentence = sentence.split("");
  const sentenceLength = sentence.length;
  let percentages = {};
  let upperCase = [];
  let lowerCase = [];
  let neither = [];

  charsInSentence.forEach(char => {
    if (char.match(/[A-Z]/g)) {
      upperCase.push(char);
    } else if (char.match(/[a-z]/g)) {
      lowerCase.push(char);
    } else {
      neither.push(char);
    }
  })

  percentages["uppercase"] = (upperCase.length / sentenceLength * 100).toFixed(2);
  percentages["lowercase"] = (lowerCase.length / sentenceLength * 100).toFixed(2);
  percentages["neither"] = (neither.length / sentenceLength * 100).toFixed(2);

  return percentages;
}

console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('123'));