/*

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

function palindromes(str) {
  let listOfSubwords = substrings(str);

  let substringsTwoOrMoreChars = listOfSubwords.filter(elem => elem.length > 1);

  let result = substringsTwoOrMoreChars.filter(word => word.split("").reverse().join("") === word);

  console.log(result);
}

palindromes('hello-madam-did-madam-goodbye');
palindromes('abcd');
palindromes('madam');
palindromes('knitting cassettes');