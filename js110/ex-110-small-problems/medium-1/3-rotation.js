/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. 
Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. 
Keep the first two digits fixed in place and rotate again to get 321759. 
Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. 
The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. 
You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Examples:
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
*/

// determine the count of rotations: count of digits minus one
// keep the count of rotation, the count is the position of the digit to be rotated
// the number must be modified at every rotation
// Input is a number
// Output is a number

function maxRotation(num) {
  let digits = num.toString().split(""); // creates a list of digits of the number, ordered by index
  const countOfRotation = digits.length - 1;
  let targetDigitIndex = 0;

  //the loop counts the rotation until the max rotation
  while (targetDigitIndex < countOfRotation) {
    let targetDigit = digits[targetDigitIndex];
    digits.splice(targetDigitIndex,1);
    digits.push(targetDigit);
    targetDigitIndex += 1;
  }
  return Number(digits.join(""));
}

console.log(maxRotation(735291));
console.log(maxRotation(3));
console.log(maxRotation(53));
console.log(maxRotation(105));
console.log(maxRotation(8703529146));