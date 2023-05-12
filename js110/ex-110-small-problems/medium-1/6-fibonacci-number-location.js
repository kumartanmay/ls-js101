/*
Write a function that calculates and returns the index of the first Fibonacci number that has 
the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.
--

MAX_SAFE_INTEGER
JavaScript's normal Number type can represent integers accurate up to the value of Number.MAX_SAFE_INTEGER, 
which is the 16-digit value 9007199254740991. Any integer larger than that value loses accuracy. 

BigInt:
To use BigInt integers in your solution, simply append the letter n to any numbers you use in your solution: 1n, 
1234567890123456789012345678901234567890n, and so on. JavaScript will take care of the rest.

---

Inpupt: BigInt, number of digits in the 
Output: BigInt, index of the element in the fibonacci series

Rule: 
  1. First two elements are 1 and 1
  2. Each element is sum of previous two elemnts, except the first two
  3. 

*/

function fibonacci(count) {
  let series = [1n, 1n]
  let index = 2n;
  
  while (index < count) {
    series.push(BigInt(series[index - 2n]) + BigInt(series[index - 1n]))
    index += 1n;
  }
  return series;
}

// console.log(fibonacci(5000n));

function findFibonacciIndexByLength(countOfDigits) {
  // iterate through the fibonacci series and find length of each element
  // compare the length of each element with the argument, 
  //    if it is a match, break the loop
  //    if not, iterate through the next element
  // assume that number of elements in the fibonacci is at least 5 times more than the count of digits

  let countFibonacciElements = countOfDigits * 5n;



  let fibonacciSeries = fibonacci(countFibonacciElements);
  // console.log(fibonacciSeries);

  let lenghtOfElements = fibonacciSeries.map(elem => elem.toString().split("").length);
  // console.log(lenghtOfElements);

  return lenghtOfElements.findIndex((elem) => BigInt(elem) === countOfDigits) + 1;

}


console.log(findFibonacciIndexByLength(2n));
console.log(findFibonacciIndexByLength(3n));
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));
console.log(findFibonacciIndexByLength(10000n));