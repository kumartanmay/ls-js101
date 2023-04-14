/*
Let's look at an example with objects. In this example, 
we want to select the key-value pairs where the value is 'Fruit'.

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

*/

function selectFruit(obj) {
  let objKeys = Object.keys(obj);
  console.log(`Object Keys: ${objKeys}`)
  let result = {};

  for (let i = 0; i < objKeys.length; i++) {
    if(obj[objKeys[i]] === "Fruit") {
      result[objKeys[i]] = 'Fruit';
    }
  }
  return result;
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }