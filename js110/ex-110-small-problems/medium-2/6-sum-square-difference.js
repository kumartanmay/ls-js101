/*
Write a function that computes the difference between the square of the sum of the first count positive integers 
and the sum of the squares of the first count positive integers.

Examples:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

Algo:
Compute the sum of numbers until the input. Square it.
Square each number and add it.
Return the difference between both the sums
*/

function sumSquareDifference(num) {
  return sum(num)**2 - squareAndSum(num);
}

function sum(num) {
  if (num === 1) return 1;
  else {
    return num + sum(num - 1);
  }
}

function squareAndSum(num) {
  if (num === 1) return 1;
  else {
    return num ** 2 + squareAndSum(num - 1);
  }
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));