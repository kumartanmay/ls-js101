/*
Build a program that asks the user to enter the length and width of a room in meters, 
and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

PEDA:
Problem (Input, Output, Domain, Implicit rules, Mental model):
  Input: (1) length in meters (2) breadth in meters
  Output: (1) area of room in sq meters (2) area of room in sq ft
  Domain: Mathematics
  Implicit rule: user can input floating and integer values in meters. Reduce negative inputs into positive.
    Reduce the decimals to four for every input.
  Mental model: 
    (1) Convert user input to four decimal places. 
    (2) Multiply the two and then multiply it with 10.7639
Examples (Test cases):
  Input: 10, 20
  Output: 200.00000 sqm, 2152.7800 sqft
  Input: 10.1501909, 10.98989898
  Output: 111.5496 sqm, 1200.7087 sqft

Data Structures & Algo:
  (0) Call the npm package readline-sync to take user inputs
  (1) Take two inputs from the user in meters: length, breadth
  // Convert the inputs into Number
  (2) areaInMeters = length * breadth
  (3) areaInSqft = areaInMeters * 10.6739
*/

let readlineSync = require('readline-sync');

let length = readlineSync.question("Please enter the length of the room in meters: \n");
let breadth = readlineSync.question("Please enter the breadth of the room in meters: \n");

let areaInMeters = parseFloat(length).toFixed(4) * parseFloat(breadth).toFixed(4) ;
let areaInSqft = parseFloat(areaInMeters * 10.7639).toFixed(4)

console.log(`The area of the room is ${areaInMeters} square meters (${areaInSqft} square feet)`)