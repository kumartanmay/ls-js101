/*
As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, 
respectively. Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.

Examples:
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
*/

const HOURS_IN_A_DAY = 24;
const MINUTES_IN_AN_HOUR = 60;
const MINUTES_IN_A_DAY = MINUTES_IN_AN_HOUR * HOURS_IN_A_DAY;

function afterMidnight(strTime) {
  let time = strTime.split(":");
  let minutes = Number(time[0]) * MINUTES_IN_AN_HOUR + Number(time[1]);
  minutes = minutes >= 1440 ? minutes -= 1440 : minutes;
  return minutes;
} 

function beforeMidnight(strTime) {
  let time = strTime.split(":");
  let minutes = MINUTES_IN_A_DAY - (Number(time[0]) * MINUTES_IN_AN_HOUR + Number(time[1]));
  minutes = minutes >= 1440 ? minutes -= 1440 : minutes;
  return minutes;
} 

console.log(afterMidnight("00:00"));
console.log(afterMidnight("12:34"));
console.log(afterMidnight("24:00"));
console.log(beforeMidnight("24:00"));
console.log(beforeMidnight("0:00"));
console.log(beforeMidnight("12:34"));