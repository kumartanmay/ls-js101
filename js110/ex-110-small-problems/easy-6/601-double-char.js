/*
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

Examples:
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
*/

function repeater(str) {
  let result = "";

  str.split("").forEach(elem => {
    result += duplicateChar(elem);
  })
  return result;
}

function duplicateChar(character) {
  return character + character;
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));