let rlSync = require('readline-sync');

function firstName() {
  let firstName = rlSync.question('What is your first name? \n');
  return firstName;
}

function lastName() {
  let lastName = rlSync.question('What is your last name? \n');
  return lastName;
}

console.log(`Good Morning, ${firstName()} ${lastName()}! \n`)