/*
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4,
unless the year is also divisible by 100. 
If the year is evenly divisible by 100, then it is not a leap year, 
unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. 
Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, 
or false if it is not a leap year.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. 
Prior to 1752, they used the Julian Calendar. 
Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years 
both before and after 1752.

Examples:

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

PEDAC:
Problem: (Input, output, implicit rule, mental model)
-----------------------------------------------------
  (1) Input: 
  (2) Output: true / false
  (3) Implicit rule: all the input years will be positive whole numbers only
  (4) Mental model: if the year is less than 1752 and divisible by four then it is . 

Examples:
---------
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

Data Structure:
 (1) Input Year is Number
 (2) Output is boolean value

Algorithm:
  (1) Divide the input by 4 and 400 in that order
  (2) If the remainder is non-zero, then return false, else return true
*/

// using conditional ternary operator
function isLeapYear(year) {
  if (year < 1752) return year % 4 === 0;
  else return (year % 400 === 0) || (year % 4 === 0 && year % 100 != 0)
}

console.log(isLeapYear(2016))
console.log(isLeapYear(1752))
console.log(isLeapYear(100))
console.log(isLeapYear(2000))
console.log(isLeapYear(2100))
console.log(isLeapYear(1700))