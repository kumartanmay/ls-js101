




function multiply(arr, num) {
  let multiple = []
  for (let i = 0; i < arr.length; i += 1) {
    multiple.push(num * arr[i]);
  }
  return multiple;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); 

console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]