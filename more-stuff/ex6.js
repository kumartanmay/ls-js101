/*
Write a function that searches an array of strings for every element that matches the regular expression 
given by its argument. The function should return all matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
*/

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let result = []

function allMatches(words, regExp) {
  result = words.filter(word => word.match(regExp));
  return result;
}

console.log(allMatches(words, /lab/g));