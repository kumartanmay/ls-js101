let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let nestedPerson = [];

for(let prop in person) {
  nestedPerson.push([prop, person[prop]])
}

console.log(nestedPerson);