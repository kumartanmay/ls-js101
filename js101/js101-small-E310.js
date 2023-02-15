/*
WHAT CENTURY IS THAT?

Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. 
So, the years 1901 - 2000 comprise the 20th century.


Examples:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

Algo:
1. Store the quotient and remainder of the year by 100 in separate variables
2. If the remainder is 0, the quotient is the century
3. if remainder is non-zero, then quotient + 1 is the century
4. If the last digit of century is:
  1: add 'st'
  2: add 'nd'
  3: add 'rd'
  rest: add 'th'

Data structure:
1. Input: year (int)
2. Other variables: 
  quotient of the year (int); 
  remainder of the year by 100 (int); 
  remainder of the century by 10 (int);
3. Output: string - century + 'st / nd / rd / th'
*/

function century(year) {
  let yearRemainder = year % 100;
  let yearQuotient = Math.floor(year / 100);
  let yearCentury = ' ';

  if (yearRemainder === 0) {
    yearCentury = yearQuotient;
  } else {
    yearCentury = yearQuotient + 1;
  }
  console.log(appendCentury(yearCentury));
}

function appendCentury (yearCentury) {
  console.log(yearCentury % 100);
  let remainder = yearCentury % 100;
  if (remainder < 20) {
    // 1,2,3 = 1st, 2nd, 3rd
    // teens + th
    switch(remainder) {
      case 1:
        yearCentury += 'st';
        break;
      case 2:
        yearCentury += 'nd';
        break;
      case 3:
        yearCentury += 'rd';
        break;
      default:
        yearCentury += 'th';
        break;
    }
  } else {
    let remainder10 = remainder % 10;
    switch(remainder10) {
      case 1:
        yearCentury += 'st';
        break;
      case 2:
        yearCentury += 'nd';
        break;
      case 3:
        yearCentury += 'rd';
        break;
      default:
        yearCentury += 'th';
        break;
    }
  }
  return yearCentury;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(2101);        // "22nd"
century(2201);        // "23rd"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(11103);       // "112th"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
century(12001);       // "121st"
century(12101);       // "122nd"