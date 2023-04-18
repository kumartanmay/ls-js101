/*
Using the forEach method, write some code to output all vowels from the strings in the arrays. 
Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

*/


let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
let strings = Object.values(obj);
let vowels = ['a', 'e', 'i', 'o', 'u']

strings.forEach(elem => elem.forEach(word => {
  let output = [];
  output = word.split("").filter(letter => vowels.includes(letter));
  console.log(output);
} ))