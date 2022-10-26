/*
Log all of the even values from myArray to the console.
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
*/

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
myArray.forEach(function even(num) {
  if(num%2 == 0) console.log(num);
}
)