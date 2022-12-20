/*
ODD LISTS

Write a function that returns an Array that contains every other element of an Array 
that is passed in as an argument. The values in the returned list should be those values 
that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

Examples:
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

PROBLEM:
  Input: An array of elements
  Output: Odd indexed elements of the array
  Implicit rule: One dimensional array. 
  Explicit rule: Empty array will print itself
  Mental model: Run a loop and assign the odd indexed elements to a new array. Print the new array after
  the loop is over.

DATA STRUCTURE:
  Input: Array
  Output: Array: sub array of odd indexed elements of parent array

ALGO:
  1. Create an empty array which will hold the odd indexed values of input array
  2. Run a loop on the parent array
  3. Store the odd indexed elements of parent array in the new array
  4. Print the new array after the loop is over
*/

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(eventies([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(eventies([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(eventies(["abc", "def"])); // logs ['def']
console.log(eventies([123])); // logs []
console.log(eventies([])); // logs []

function oddities (array) {
  let result = [];

  for(let index = 0; index < array.length; index++) {
    if (index % 2 === 0) result.push(array[index]);
    continue;
  }

  return result;
}

function eventies (array) {
  let evenElements = [];

  for(let index = 1; index < array.length; index += 2) {
    evenElements.push(array[index]);
  }

  return evenElements;
}