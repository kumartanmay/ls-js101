/*

Searching 101

Write a program that solicits six numbers from the user and logs a message
that describes whether the sixth number appears among the first five numbers.

Examples:
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

Algo:
1. Place all the five user inputs into an array
2. Search whether the array INCLUDES the sixth input
*/

const rlSync = require('readline-sync');

function input() {
  let array = [];
  for (let count = 1; count <= 5; count++) {
    let input = rlSync.question(`Enter the ${count} number: `);
    array.push(input);
  }
  return array;
}

function searchInput() {
  const inputArray = input();
  let lastNumber = rlSync.question("Enter the last number: ");
  if (inputArray.includes(lastNumber) === true) {
    console.log(`The number ${lastNumber} appears in ${inputArray}`);
  } else {
    console.log(`The number ${lastNumber} does not appear in ${inputArray}`);
  }
}

console.log(searchInput());