/*
function greet(greeting = 'Hello', recepient = 'World') {
  return greeting + ', ' + recepient
}

console.log(greet())
console.log(greet('Saluations'))
console.log(greet('Good morning', 'Launch School'))
*/


function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(greeting()+ ', ' + recipient() + '!');
}

greet()