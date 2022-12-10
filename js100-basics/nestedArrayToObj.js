let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let obj = {};

for(let index = 0; index < nestedArray.length; index++) {
  let innerIndex = 0;
  obj[nestedArray[index][innerIndex]] = nestedArray[index][innerIndex+1];
}
console.log(obj);