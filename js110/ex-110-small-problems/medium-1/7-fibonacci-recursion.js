/*
Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765
*/

function fibonacci(index) {

  if (index > 2) {
    return fibonacci(index - 2) + fibonacci(index - 1);
  }
  return 1;
}



console.log(fibonacci(2));
console.log(fibonacci(20));
// console.log(fibonacci(19));