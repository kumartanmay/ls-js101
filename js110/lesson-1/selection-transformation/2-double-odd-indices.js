/*
suppose we wanted to transform the numbers based on their position in the array rather than their value? 
Try coding a solution that doubles the numbers that have odd indices:
*/


function doubleOddIndices(arr) {
  for (let i = 1; i < arr.length; i += 2) {
    arr[i] = 2 * arr[i];
  }
  return arr;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndices(myNumbers));  // => [1, 8, 3, 14, 2, 12]

// not mutated
myNumbers;                    // => [1, 4, 3, 7, 2, 6]