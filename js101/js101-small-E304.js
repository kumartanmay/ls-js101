/*

Fibonacci Number Location By Length

The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers
are 1 by definition, and each subsequent number is the sum of the two previous numbers. 
Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate.
For example, the 100th Fibonacci number is 354,224,848,179,261,915,075. That's enormous, 
especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the 
number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

Problem:
1. Assume the number of elements in fibonacci series is 100

Algo:
1. Define the function of fibonacci series. Return an array of fibonacci series.
2. Determine the length of each element of the fibonacci series3
3. Find first occurrence of the requested length of the 
*/

function fibonacci(length) {
  const lengthFibonacci = length;
  let fibonacciSeries = [1, 1];

  for (let index = 2; index < lengthFibonacci; index += 1) {
    fibonacciSeries[index] = fibonacciSeries[index - 1] + fibonacciSeries[index - 2];
  }
  return fibonacciSeries;
}

/*
function lengthOfFibonacciElements(fibonacciArray) {
  const fibonacciLength = fibonacciArray.length;
  let fibonacciLengthOfElements = [];
  for (let index = 0; index < fibonacciLength; index += 1) {
    fibonacciLengthOfElements.push(fibonacciArray[index].length);
  }
  return fibonacciLengthOfElements;
}
*/

function findFibonacciIndexByLength(num) {
  const fibonacciSeries = fibonacci(5000n);
  console.log(fibonacciSeries);
  for (let index = 0; index < fibonacciSeries.length; index += 1) {
    //find length of each element in the fibonacci series
    //if the length matches the num, then return the index of the element
    //since each element in the array is number, it must be converted to string before
    //calculating the length of each element.

    //console.log(BigInt(fibonacciSeries[index]).toString().length);
    if (BigInt(fibonacciSeries[index]).toString().length === num) {
      console.log(`${index + 1}:`, BigInt(fibonacciSeries[index]));
      return index+1;
    }
  }
  return "not found";
}

console.log(findFibonacciIndexByLength(309));