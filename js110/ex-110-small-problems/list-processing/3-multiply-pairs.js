/*
Write a function that takes two array arguments, each containing a list of numbers, 
and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. 
The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Example:
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
*/

function multiplyAllPairs(arrA, arrB) {
  let result = [];

  for (let indexA = 0; indexA < arrA.length; indexA++) {
    for (let indexB = 0; indexB < arrB.length; indexB++) {
      result.push(arrA[indexA]*arrB[indexB]);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));