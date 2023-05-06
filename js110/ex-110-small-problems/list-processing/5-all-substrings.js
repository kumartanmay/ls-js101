/*
Write a function that returns a list of all substrings of a string. 
Order the returned list by where in the string the substring begins. 
This means that all substrings that start at index position 0 should come first, 
then all substrings that start at index position 1, and so on. 
Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

Example:
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/

function leadingSubstrings(str) {

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

function substrings(str) {
  //let charsInString = str.split("");
  let result = [];
  
  // strip the chars from string at the begining
  // call leadsubstrings and concat with result in a new line?

  for(let i = 0; i < str.length; i++) {
    result.push(leadingSubstrings(str.slice(i)));
  }
  // flat method concatenates all the subarrays into a new array upto the specified depth. Default depth is 1.
  return result.flat();
}

console.log(substrings('abcde'))