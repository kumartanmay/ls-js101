/*
Write a function that takes one integer argument, which may be positive, negative, or zero. 
This method returns true if the number's absolute value is odd. 
You may assume that the argument is a valid integer value.

Examples:
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

PEDAC
Problem (Input and Output + problem domain):
  Input: integer (positive, negative or zero) 
  Output: true if input is odd, false when input is even
  Domain knowledge: integer, absolute value
  Explicit requirement: input is always a valid integer
  Implicit requirement: 
    1. do not take non-integer values as input
    2. convert floating numbers into an integer
  Mental model: 
  Check input is a valid integer: convert to integer if it is a floating value.
  If not, then prompt a valid input integer
  Divide the input by 2 and check the remainder. Return false, if remainder is zero.
  Return true, if remainder is non-zero

Examples/ Test cases: 
  2 -> false
  5 -> true
  -17 -> true
  -8 -> false
  0 -> false
  7 -> true

Data Structures: How input coverts into output variables

Algorithm in JS
  1. Take input while calling isOdd()
  2. Calculate remainder by %2 and assign it to variable remainder
  3. If remainder is not zero, then return true
  4. Else, return false

Code with intent

*/

function isOdd(number) {
  let remainder = number % 2;

  if(remainder !== 0) {
    return true
  }

  return false;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true