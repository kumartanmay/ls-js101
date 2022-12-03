/*
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console.
You can ignore input validation and assume that the user will enter numbers.

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00


PEDA:
Problem (Input, output, implicit rule, mental model)
====================================================
  Input: Bill, tip rate
  Output: tip amount, Total bill (bill + tip amount)
  Implicit rule: 
    Bill amount is in $
    Tip rate is in percentage. 
    Bill amount and tip rate are always greater than zero
  Mental model: Convert the tip rate by dividing by 100. Calculate the tip amount by multiplying it with bill
  Calculate total bill by adding the tip to it.

Example:
========
  Input:
  -----
  Bill Amount: 100
  Tip rate: 10
  Output:
  ------
  Tip amount: 10
  Total Bill: 110

  Input:
  -----
  Bill Amount: 500
  Tip rate: 20
  Output:
  ------
  Tip amount: 100
  Total Bill: 600
  Input:
  -----
  Bill Amount: 100.5
  Tip rate: 10.5
  Output:
  ------
  Tip amount: 10.5525
  Total Bill: 111.0525
Data Structure:
===============
  Input:
  -----
  billAmount
  tipRate
  
  Output:
  ------
  tipAmount
  totalBill
Algorithm:
=========
  (1) Require readline-sync from npm package. Install npm before calling readline-sync
  (2) Take billAmount and tipRate as input from the user. Convert it into Number
  (3) tipAmount = tipRate * billAmount / 100
  (4) totalBill = billAmount + tipAmount
*/

let rlSync = require('readline-Sync');

/*
If we user parseInt instead of Number, then floating inputs are converted into whole numbers.
*/
let billAmount = Number(rlSync.question('What is the bill amount: '));
let tipRate = Number(rlSync.question('What is tip rate in percentage?: '))

function tipCalculator(billAmount, tipRate) {
  return tipRate * billAmount / 100;
}

let tipAmount = tipCalculator(billAmount, tipRate);
console.log(`The tip amount is: ${tipAmount}`)
console.log(`Total bill is: ${tipAmount + billAmount}`)