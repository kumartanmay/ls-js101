/*
WHEN WILL I RETIRE

Build a program that logs when the user will retire and how many more years the user has to work 
until retirement.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

Problem:
========
Implicit rule: 
--------------
The person has not retired. Person's age will always be less than retirement age.
All the inputs will be whole number only.

Data Structure:
---------------
Convert all user input into numbers.
*/

const rlSync = require("readline-sync");

const age = Number(rlSync.question("What is your age? "));
const retirementAge = Number(rlSync.question("At what age would you like to retire? "));
const currentYear = new Date().getFullYear();
const yearsToRetire = retirementAge - age;
console.log();

console.log(`It is ${currentYear}. You will retire in ${currentYear + yearsToRetire}.`);
console.log(`You have only ${yearsToRetire} years of work to go!`);
console.log();