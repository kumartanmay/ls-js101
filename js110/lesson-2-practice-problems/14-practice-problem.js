/*
Given the following data structure write some code to return an array 
containing the colors of the fruits and the sizes of the vegetables. 
The sizes should be uppercase, and the colors should be capitalized.


let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

The return value should look like this:

[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
let output = [];

let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(childObj => {
  if (childObj.type === 'fruit') {
    output.push(childObj.colors.map(char => capitalize(char)));
  } else {
    output.push(childObj.size.toUpperCase());
  }
  return output;
})

console.log(output);