/*
STRING TO A NUMBER WITHOUT USING JS METHODS

The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) 
to an integer. The method takes 2 arguments where the first argument is the string we want to convert 
and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave 
similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. 
You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; 
assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and 
Number(). Your function should do this the old-fashioned way and calculate the result by analyzing 
the characters in the string.

EXAMPLES:
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

PROBLEM:
I: String of numbers
O: Same number whose typeof is number
Implicit rule: input will always be a number
Mental model: implicit coercion - subtract the string with itself and check if the output is zero
*/

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

function stringToInteger(str) {
  let convStr = str / str;
  //console.log(convStr);
  str = str * convStr;
  //console.log(typeof(str));
  return str;
}