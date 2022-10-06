let rlSync = require('readline-sync');

function evenOrOdd (num) {
  if ((num % 2) !== NaN) {
    console.log (((num % 2) === 0) ? `${num} is even.` : `${num} is odd.`)
  }
  else {
    console.log("Not an integer!") ;
  }
}

let input = Number(rlSync.question("Check whether the input is even: \n"))