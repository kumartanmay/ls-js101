/*
Currently, our calculator asks the user for two numbers and an operation and 
then exits after displaying the result. Wouldn't it be nice if we could ask the user 
if they wanted to perform another calculation and start a new calculation when they respond with yes?

PROBLEM:
Input: 
  (1) 7,8,sum
  (2) 9,7,subtract
  (3) 22,5, multiply
  (4) 10,2 divide
Ouptput: 
  (1) 15
  (2) 2
  (3) 110
  (4) 5
Mental model: Take two user inputs and the operation to be performed. Give the desired result. Ask if the
user wants to continue with another operation. If no, exit; else, take user inputs again.
Implicit rule: all the inputs are integers only

DATA STRUCTURE AND ALGORITHM:
(1) Input: convert all the inputs into Numbers. All the operations will be assigned to a numeric code.
(2) Based on the code, perform the calculation
(3) Ask if the user wants to perform another operation. If yes, repeat Step 1.
(4) If no, exit.
*/

let rlSync = require('readline-sync');
//const MESSAGE = require('./calculator_messages.json');
//prompt(MESSAGE['es']['welcome']);

function calculator() {
  
  let operand1 = Number(rlSync.question("Please enter the first number: "));
  let operand2 = Number(rlSync.question("Please enter the second number: "));
  let operation = rlSync.question("What operation do you want to perform? \nPlease enter \n1 for Addition \n2 for Subtraction \n3 for Multiplication \n4 for Division \n");
  
  let result = calculatorInput(operand1, operand2, operation);

  let operator = {
    1: 'Addition',
    2: 'Subtraction',
    3: 'Multiplication',
    4: 'Division'
  };
  console.log(`The result of ${operator[operation]} of ${operand1} and ${operand2} is: ${result}`);
  anotherCalculation();
}

function calculatorInput(num1, num2, operand) {
  let result;
  switch (operand) {
    case '1':
      result = num1 + num2;
      break;
    case '2':
      result = num1 - num2;
      break;
    case '3':
      result = num1 * num2;
      break;
    case '4':
      result = num1 / num2;
      break;
  }
  return result;
}

calculator();

function anotherCalculation() {
  let anotherCalc = rlSync.question('Do you want to perform another calculation? (y/n) ');
  console.log(anotherCalc);
  return (anotherCalc !== 'y') ? false : calculator();
}
