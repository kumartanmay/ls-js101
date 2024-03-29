/*
Write a function that counts the number of occurrences of each element in a given array. 
Once counted, log each element alongside the number of occurrences. 
Consider the words case sensitive e.g. ("suv" !== "SUV").

Example:
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

function countOccurrences (arr) {
  let result = {};
  arr.forEach(elem => {
    elem = elem.toLowerCase();
    return result[elem] ? result[elem] += 1 : result[elem] = 1;
  })
  return result;
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));