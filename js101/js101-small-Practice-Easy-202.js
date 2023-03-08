/*
The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.
sort can rearrange the elements in a variety of ways, including descending. 
Both of these methods mutate the original array as shown below. 
Write two distinct ways of reversing the array without mutating the original array. 
Use reverse for the first solution, and sort for the second.

PROBLEM:
-------
Cannot use explicit JS methods to mutate the array.

Example:
-------
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

Algo:
----------------
First algo for reversing:
1. Use a for loop on the array, starting from the last element in the array
2. store the resulting array in a new array

Second algo for sorting:

*/

/*
function reverse(array) {
  let result = [];

  for(let index = 0; index < array.length; index += 1) {
    result[index] = array[array.length - index - 1];
  }
  return result;
}



function larger(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
*/

let numbers = [ 1, 2, 3, 4, 90, 80, 99, 92, 70, 5];
//console.log(reverse(numbers));
// console.log(numbers);
console.log([...numbers].sort((a,b) => b - a));
console.log(numbers.slice().reverse());

let arr = [];
numbers.forEach(function(element, index) {
  arr[numbers.length - index - 1] = element;
});
console.log(arr);

console.log(numbers);