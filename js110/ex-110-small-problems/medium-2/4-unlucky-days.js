/*
Some people believe that Fridays that fall on the 13th day of the month are unlucky days. 
Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. 
You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. 
You may also assume that the same calendar will remain in use for the foreseeable future.

Examples:
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

Input: A number = an year
Output: A number = count of months when 13th is a friday

Rule:
1. All years are greater than 1752

Algo:
1. Find the days of 13th of every month
2. Count the fridays

*/

function fridayThe13ths(year) {
  let date = 13;
  let months = ['Jan', 'Feb', "Mar", 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // make a list of all the 13th day of the month in year
  // note that the we are concatenating and passing the date to the Date constructor
  let day13thOfMonths = months.map(month => new Date(date + month + year));

  // find the weekday of 13th of every month
  // filter the fridays from the list and return the count
  console.log(day13thOfMonths.map(weekday => weekday.getDay()).filter(friday => friday === 5).length);
}

fridayThe13ths(1986);
fridayThe13ths(2015);
fridayThe13ths(2017);