/*
Refactor the following code so that it works for negative numbers and zero.
This code right now does not work for 0 and negative numbers.
Do not use do-while loop.

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
*/

function factors(number) {
  let divisor = number;
  let factors = [];

  for(divisor = number; divisor > 0; divisor--) {
    if (number % divisor === 0) { // purpose: to check whether divisor is a factor of the number
      factors.push(number / divisor);
    }
  }
  return factors;
}

console.log(factors(12));
console.log(factors(13));
console.log(factors(14));
console.log(factors(15));
console.log(factors(0));
console.log(factors(-12));