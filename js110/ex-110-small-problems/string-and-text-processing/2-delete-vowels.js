/*
Write a function that takes an array of strings and returns an array of the same string values, 
but with all vowels (a, e, i, o, u) removed.

Examples:
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
*/

function removeVowels(strArr) {
  return strArr.map(elem => elem.replace(/[a,e,i,o,u]/gi,""))
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));