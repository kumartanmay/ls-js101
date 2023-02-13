/*
Clean up the words

Given a string that consists of some words and an assortment of non-alphabetic characters, 
write a function that returns that string with all of the non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in a row, you should only have one space in the result 
(i.e., the result string should never have consecutive spaces).

Example:
cleanUp("---what's my +*& line?");    // " what s my line "

Algo:
1. Find all the alphanumeric chars and negate it /[^\w]/g
2. Replace all the non-alphanumeric chars with whitespaces
3. Trim the extra white spaces and replace it with single space
*/

function cleanUp(string) {
  let result = ' ';
  let strReplace = string.replace(/[^\w]/g, " ");
  result = strReplace.replace(/\s+/g, " ");
  return result;
}

console.log(cleanUp("---what's my +*& line?"));