let rlSync = require('readline-sync');
let currentAge = Number(rlSync.question('What is your age? \n'));

console.log(`You are ${currentAge} years old.`)
console.log(`In 10 years, you will be ${currentAge + 10} years old.`)
console.log(`In 20 years, you will be ${currentAge + 20} years old.`)
console.log(`In 30 years, you will be ${currentAge + 30} years old.`)
console.log(`In 40 years, you will be ${currentAge + 40} years old.`)
