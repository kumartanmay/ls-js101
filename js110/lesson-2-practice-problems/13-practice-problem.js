/*
Given the following data structure, sort the array so that the sub-arrays are 
ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
*/

/*
Problem:
========
1. We have a nested array of elements, all elements are numbers
2. Since we have to find the sum of odd numbers and then sort, I am assuming all elements are non-negative
3. If there are no odd elements, the sum will be zero 

Data Structure & Algo:
======================
1. Input: array of arrays consisting of numbers
2. Output: array of arrays consisting of numbers, sorted. The input is mutated.
3. Intermediate data types:
  1. Boolean: are there odd elements in the sub array?
  2. if not, sum is zero - assume there are no such sub arrays yet
  3. if yes, sum the odd numbers and map it to the original array
  4. sort the sum of odd numbers and reorder the original array corresponding to the sums?
  5. use the indices of sub arrays to map
*/

function sortFilteredArray(arr) {
  let indicesOfOdds = {};

  arr.sort((a,b) => {
    let sumOfAs = a.filter(elem => elem % 2 === 1).reduce((sum, ini) => sum + ini);
    let sumofBs = b.filter(elem => elem % 2 === 1).reduce((sum, ini) => sum + ini);
    return sumOfAs - sumofBs;
  })
  return arr;
}

console.log(sortFilteredArray([[1, 6, 7], [1, 5, 3], [1, 8, 3]]));
console.log(sortFilteredArray([[1, 6, -3], [1, 5, 3], [1, 8, 3]]));