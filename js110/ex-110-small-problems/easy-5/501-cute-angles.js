/*
Write a function that takes a floating point number representing an angle between 0 and 360 degrees 
and returns a string representing that angle in degrees, minutes, and seconds. 
You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, 
and a double quote (") to represent seconds. 

There are 60 minutes in a degree, and 60 seconds in a minute.

Examples:

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
*/

function dms(floatNum) {
  while (floatNum < 0) {
    floatNum += 360;
  }

  while(floatNum > 360) {
    floatNum -= 360;
  }

  let deg = parseInt(floatNum);
  let decimal = floatNum - parseInt(floatNum);
  let mins = minutes(decimal);
  let secs = seconds(decimal);

  console.log(`${deg}˚${mins}'${secs}"`);
}

function minutes(num) {
  return parseInt(num * 60);
}

function seconds(num) {
  let secFloat = num *60 - parseInt(num * 60);
  return secFloat*60;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(-420);         // 300°00'00"
dms(-40);          // 320°00'00"
dms(400);          // 40°00'00"


/*
Since degrees are normally restricted to the range 0-360, 
can you modify the code so it returns a value in the appropriate range 
when the input is less than 0 or greater than 360?

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"
*/

