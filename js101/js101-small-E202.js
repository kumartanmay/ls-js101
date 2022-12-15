/*
Write a program that will ask for user's name. The program will then greet the user. 
If the user writes "name!" then the computer yells back to the user.

Example:
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

PEDAC:
======
Problem:
--------
(1) Input: Kumar
Output: Hello Kumar
Input: Kumar!
Output: HELLO KUMAR. WHY ARE WE SCREAMING?
(2) Implicit rule: User can either enter first name or full name or call name
(3) Mental Model: if the last char in the string is not "!" then print, Hello name. Else print 
HELLO {name}. WHY ARE WE SCREAMING?

Example:
  Input: Kumar
  Output: Hello Kumar
  Input: Kumar!
  Output: HELLO KUMAR. WHY ARE WE SCREAMING?

Data Structure:
(1) Input string
(2) Output string

Algorithm:
(1) Check the last char of the input string if it is "!"
(2) If it is not "!", then print hello name
(3) Else print, HELLO NAME. WHY ARE WE SCREAMING?
*/

let rlSync = require('readline-sync');

let name = rlSync.question("What is your name?: ");
console.log(name[-1])
if (name[name.length-1] !== "!") {
  console.log(`Hello ${name}.`);
}
else {
  name = name.toUpperCase();

  //trim() only works in removing whitespace. 
  console.log(`HELLO ${name.slice(0,-1)}. WHY ARE WE SCREAMING?`);
}