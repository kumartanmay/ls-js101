/*
COMBINE TWO LISTS

Write a function that combines two arrays passed as arguments, and r
eturns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

Example:
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

*/

/*
function interleave(arrA, arrB) {
  let result = [];

  if(arrA.length === arrB.length) {
    for(let i = 0; i < arrA.length; i++) {
      result = result.concat(arrA[i], arrB[i]);
    }
  }
  return result;
}
*/

/*
same result using forEach

function interleave(arrA, arrB) {
  let result = [];
  arrA.forEach((elem, index) => {
    result.push(elem, arrB[index]);
  })
  return result;
}
*/

function interleave(arrA, arrB) {
  let result = [];
  arrA.map((elem, index) => {
    result.push(elem, arrB[index]);
  })
  return result;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));