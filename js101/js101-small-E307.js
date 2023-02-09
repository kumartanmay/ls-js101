/*
DOUBLE DOUBLES

A double number is an even-length number whose left-side digits are exactly 
the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, 
whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, 
unless the argument is a double number; otherwise, return the double number as-is.

Problem:
Assume all the input is integers, not BigInt.

Algo:
1. Check whether the number has even or odd number of digits
2. If it has odd number of digits, double it and return
3. If it has even number of digits, split it into two equal strings
4. If both strings are equal, return the original number
5. Else double the number and return

Examples:
========
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
*/

function twice(number) {
  let numberLength = number.toString().length;
  if (numberLength % 2 > 0) {
    return number * 2;
  } else {
    const index = numberLength / 2;
    const firstHalfNumber = number.toString().substring(0, index);
    const secondHalfNumber = number.toString().substring(index);
    if (firstHalfNumber === secondHalfNumber) {
      return number;
    } else {
      return number * 2;
    }
  }
}

console.log(twice(37));          // 74
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(207));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));