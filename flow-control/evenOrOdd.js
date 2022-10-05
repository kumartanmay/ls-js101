let rlSync = require('readline-sync');

function evenOrOdd (num) {
  console.log (((num % 2) === 0) ? `${num} is even.` : `${num} is odd.`)
}

let input = Number(rlSync.question("Check whether the input is even: \n"))
evenOrOdd(input)