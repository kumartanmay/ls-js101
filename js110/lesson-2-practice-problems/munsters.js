/*
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

Compute the total age of male members of the family
*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAge = 0;

for (let member in munsters) {
  if(munsters[member].gender === 'male') {
    totalAge += munsters[member].age;
  }
}
console.log(totalAge); 

// alternate solution

let munstersValues = Object.values(munsters);
let sum = munstersValues.filter(elem => elem.gender === 'male').map(value => value.age).reduce((a,b)=> a +b);
console.log(sum);