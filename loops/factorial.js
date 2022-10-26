/*
Write a function that computes and returns the factorial of a number by using a for loop. 
The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 
1 and n, inclusive:
*/

/*
function factorial(n) {
  if (n < 1) {
    console.log(`Please enter values greater than 1.`)
  }

  let result = 1;

  for (let i = n; i > 1 ; --i) {
    result = result * i;
    //console.log(`N is ${n}; Result is ${result}`)
  }
  //console.log(`N (outside) is ${n}`);
  console.log(`The factorial of ${n}! is ${result}`);
}

factorial(5);
factorial(8);
factorial(3);
factorial(4);

*/


/*
Reimplement the factorial function from exercise 2 using recursion. 
Once again, you may assume that the argument is always a positive integer.
*/


function factorial(num) {
  if (num <= 1) return num;
  return num * factorial(num-1);
}


console.log(factorial(8));