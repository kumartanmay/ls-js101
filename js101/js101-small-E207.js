/*
The || operator returns a truthy value if either or both of its operands are truthy, 
a falsey value if both operands are falsey. 
The && operator returns a truthy value if both of its operands are truthy, 
and a falsey value if either operand is falsey. This works great until you need only one, 
but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, 
and returns true if exactly one of its arguments is truthy, false otherwise. 
Note that we are looking for a boolean result instead of a truthy/falsy value 
as returned by || and &&.

Examples:
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

PEDAC
PROBLEM:
  Input:
  Output:
  Implicit rule: both the inputs need to be coerced into a boolean value. If it is not 1 then it is falsy.
  Both inputs are same? Or Both inputs have different types? 
  Mental model: If either of the inputs is true, but not both, then return true. Else it is false. 

DATA STRUCTURE:
  Both inputs have to be converted into a truthy or falsy. And then compared.

*/

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

// TIL: truthy values are all except: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` and `NaN`.

function xor(arg1, arg2) {
  if (!arg1 && arg2 || arg1 && !arg2) return true;
  else return false;
}

/*
Further Exploration

Can you think of a situation in which a boolean xor function would be useful? 
Suppose you were modeling a light at the top of a flight of stairs wired in 
such a way that the light can be turned on or off using either the switch at 
the bottom of the stairs or the switch at the top of the stairs. 
This is an xor configuration, and it can be modeled in JavaScript using the xor function. 
Think of some additional examples.
*/

