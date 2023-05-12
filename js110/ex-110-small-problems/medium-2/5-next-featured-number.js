/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7,
with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd),
97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. 
Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Examples:
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

Info:
Input: A number
Output: A number

Input will be a number
Largest possible featured number = 9876543201

Rule:
1. odd number
2. multiple of 7
3. none of the digits repeat

Find multiples of 7 greater than the number
For each number in the list,
  check if it is odd
  among the odds, find the first number who digits aren't repeating
*/

const largestFeaturedNumber = 9876543201;

function featured(num) {
  // find multiples of 7 greater than num

  let nextMultiple = Math.floor(num / 7) + 1;

  for(let i = nextMultiple; true; i++) {
    let next = i * 7;
    if (isOdd(next) && !isRepeatDigits(next)) return next;
    if (next >= largestFeaturedNumber) return "There is no possible number that fulfills those requirements."
  }
}

function isOdd(num) {
  return (num % 2 !== 0);
}


function isRepeatDigits(num) {

  let digits = num.toString().split("");

  // check the repeatition until the first match or it is empty
  while(digits.length > 0) {
    let find = digits.shift();
    if (digits.includes(find)) return true;
  }

  return false;
}

console.log(featured(12));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(102347));
console.log(featured(9876543201));
