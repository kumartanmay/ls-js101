/*
Write another function that returns true if the string passed as an argument
is a palindrome, or false otherwise. This time, however, your function should
be case-insensitive, and should ignore all non-alphanumeric characters.
If you wish, you may simplify things by calling the isPalindrome function you
wrote in the previous exercise.

Examples:
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

*/

function isPalindrome(string) {
  let lowerCasedString = string.toLowerCase().replace(/\W/g, "");
  let reversedString = reverse(lowerCasedString);
  return reversedString === lowerCasedString;
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
console.log(isPalindrome("Madam I'm Adam"));
console.log(isPalindrome('356653'));
console.log(isPalindrome('123ab321'));
console.log(isPalindrome('356a653'));