/*
Write a function that returns true if the string passed as an argument is a palindrome,
or false otherwise. A palindrome reads the same forwards and backwards. For this problem,
the case matters and all characters matter.

Examples:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

Algo:
1. Create a new string which is reverse of the original, including the characters and cases
2. Compare the two, if they are strictly equal then it is a palindrome.
*/


function isPalindrome(string) {
  let reversedString = reverse(string);
  if (reversedString === string) {
    return true;
  } else {
    return false
  }
}

function reverse(string) {
  const stringLength = string.length;
  let reversedString = '';
  for (let index = stringLength - 1; index >= 0; index--) {
    reversedString += string[index];
  }
  return reversedString;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));