/*
Build a program that randomly generates Teddy's age, and logs it to the console. 
Have the age be a random number between 20 and 120 (inclusive).

Example:
Teddy is 69 years old!

Problem:
How do you introduce a random number between a range?
Explicit rule: The random number should be between 20 and 120, both inclusive
Implicit rule: The output should be a whole number.

Data Structure:
---------------
Call Math.random() function and multiply it with 121. Floor it.
If the age is less than 20, then call the function again.
*/

function age(max) {
  return Math.floor(Math.random() * (max + 1));
  //return Math.round(Math.random() * max);
}

function teddysAge(max) {
  let teddysAge = age(max);
  if (teddysAge < 20) {
    teddysAge = age(max);
  } 
  return `Teddy is ${teddysAge} years old`;
}

console.log(teddysAge(120));
