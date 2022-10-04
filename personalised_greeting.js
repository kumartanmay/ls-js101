/*require function imports readline-sync from node module. 
returns library as an object which is assigned to rlSync*/
let rlSync = require('readline-sync')

// calls the question method and wait for user input in a new line
let name = rlSync.question("What is your name? \n")
console.log(`Good morning ${name}!`)