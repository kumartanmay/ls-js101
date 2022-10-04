let rlSync = require('readline-sync');
function forMultiplication(input) {
  let number = rlSync.question(input);
  return number;
}

let firstNumber = Number(forMultiplication('What is the first number: \n'))
let secondNumber = Number(forMultiplication('What is the second number: \n'))
console.log(`${firstNumber} * ${secondNumber}: ` , firstNumber * secondNumber)