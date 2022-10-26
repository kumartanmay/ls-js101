/*
Let's make the problem a little harder. In this problem, we're again interested in even numbers,
but this time the numbers are in nested arrays in a single outer array.
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
*/

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach( function even(element){
  element.forEach (function nestedEven(num) {
    if(num % 2 ===0) console.log(num);
  })
})


// 1. determine the dimension of the array
// 2. if array is not one-dimensional, repeat step 1
// 3. find even numbers in the one-dimensional array

/*
function nDimensionArray(arr) {
  for(let i = 0; i < arr.length; ++i) {
    arr[i].forEach(function even(num) {
      if(num % 2 === 0) {
        console.log(num);
      } 
    })
  }
}

nDimensionArray(myArray);
*/