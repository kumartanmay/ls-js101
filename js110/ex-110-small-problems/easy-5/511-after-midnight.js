/*
The time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Y
our function should work with any integer input.

You may not use javascript's Date class methods.

Examples:
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
*/

const MINUTES_IN_A_DAY = 24*60;
const MINUTES_IN_AN_HOUR = 60;
const HOURS_IN_A_DAY = 24;

function timeOfDay(num) {
  // when num > 1440; restart the counter after subtracting from 1440 until the number is < 1440
  // when num < 0; 
  // when num < -1440
  while (num > 1440) {
    num = num - 1440;
    while (num<1440){
      return timeAfterMidnight(num);
    }
  }

  while (num < 0) {
    num = 1440 + num;
    while (num > 0) {
      return timeAfterMidnight(num);
    }
  }

  return timeAfterMidnight(num);
}

function timeAfterMidnight(num) {
  let hours = Math.floor(num / 60).toString();
  let minutes = (num - hours* MINUTES_IN_AN_HOUR).toString();
  if (hours.length === 1) hours = '0' + hours;
  if (minutes.length === 1) minutes = '0' + minutes;
  return `${hours}:${minutes}`;
}

console.log(timeOfDay(0));
console.log(timeOfDay(35));
console.log(timeOfDay(800));
console.log(timeOfDay(3000));
console.log(timeOfDay(-1437));
console.log(timeOfDay(-3));
console.log(timeOfDay(-4231));