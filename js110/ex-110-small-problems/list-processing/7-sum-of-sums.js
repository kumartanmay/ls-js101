/*
Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. 
Examine the examples to see what we mean. You may assume that the array always contains at least one number.

Examples:
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
*/

// 1. It is like substrings program but with numbers
// 2. create sub arrays of numbers from it
// 3. concatenate each of the arrays
// 4. sum the elements of the array

function subNumbers(arr) {
  //[1, [1,2], [1,2,3]]

  let nested = arr.map((_, index) => arr.slice(0, index + 1));
  let result = nested.flat().reduce((acc, cur) => acc + cur, 0);

  console.log(result);

}

subNumbers([1, 2, 3]);
subNumbers([3, 5, 2]);
subNumbers([1, 5, 7, 3]);
subNumbers([4]);
subNumbers([1, 2, 3, 4, 5]);