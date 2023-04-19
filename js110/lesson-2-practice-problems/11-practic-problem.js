/*
Given the following data structure, use a combination of methods, including filter, 
to return a new array identical in structure to the original, 
but containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
*/


let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// filter and return an array with same structure
// array contains multiples of three only.

console.log(arr.map(subarr => {
  let output = [];
  subarr.filter(elem => { 
    if (elem % 3 === 0) {
      output.push(elem);
    }
  })
  return(output);
  }));