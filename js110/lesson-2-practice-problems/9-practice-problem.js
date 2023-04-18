/*
Given the following data structure, return a new array with the same structure, 
but with the values in each subarray ordered -- 
alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(elem => {
  if (typeof elem[0] === 'string') {
    return elem.slice().sort();
  } else {
    return elem.slice().sort((a,b) => a-b);
  } 
});

console.log(newArr);
console.log(arr);