/*

Right Triangles

Write a function that takes a positive integer, n, as an argument and 
logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) 
should have one end at the lower-left of the triangle, and the other end at the upper-right.

Problem:
1. Assume that input will always be positive number
2. 

Example:
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

Algo:
1. Run two loops: one for " " and other for "*"
2. In row r, the number of " " will be N-r and number of stars will be r, where N is input number
*/

function triangle(number) {
  let result = '';
  for (let index = 1; index <= number; index += 1) {
    //result += printSpecialChars(' ', number - index);
    result = result + printWhiteSpaces(number - index) + printSpecialChars('*', index);
  }
  return result;
}

function printSpecialChars(char, num) {
  let result = '';
  for (let spaceIndex = 0; spaceIndex < num; spaceIndex += 1) {
    result += char;
  }
  result += '\n';
  return result;
}

function printWhiteSpaces(num) {
  let whiteSpace = ' ';
  for (let index = 0; index < num; index += 1) {
    whiteSpace += ' ';
  }
  //whiteSpace += '\n';
  return whiteSpace;
}

console.log(triangle(9));