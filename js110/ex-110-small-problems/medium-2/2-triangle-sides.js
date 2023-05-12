/*
A triangle is classified as follows:

    Equilateral: All three sides are of equal length.
    Isosceles: Two sides are of equal length, while the third is different.
    Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, 
and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns 
one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Examples:
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

Info:
Input: three numbers representing the length of sides of a triangle
Output: a string

Equilateral: all three numbers are equal
Isoceles: Two numbers are equal 
Scalene: All three are different

Rules:
A valid triangle is valid:
1. Sum of lengths of two shorter sides should be greater than the third
2. Every side is greater than zero

Algo:
1. Check if all the sides are greater than zero, if not then it is not a valid triangle
2. Find the longest side, and compare the sum of the other two numbers with the longest side
  2.1 If the sum is greater, then continue
  2.2 If not, then it is not a valid triangle
3. Find if two numbers are equal among three,
  3.1 If yes, is the third number equal -> equilateral; if not -> isoceles
  3.2 If not -> scalene triangle
*/

function triangle(sideA, sideB, sideC) {
  if (sideA <= 0 || sideB <= 0 || sideC <= 0 ) return `invalid`;
  else{
    let sortedSidesDesc = [sideA, sideB, sideC].sort((a, b) => b - a);
    if(sortedSidesDesc[1] + sortedSidesDesc[2] <= sortedSidesDesc[0]) return `invalid`;
    else {
      // are two numbers equal? 
      // order of operands in OR operator is mandatory, else an equilateral triangle will return isoceles
      return equilateral(sortedSidesDesc) || isoceles(sortedSidesDesc) || `scalene`;
    }
  }
}

function isoceles(sidesArray) {
  if(sidesArray[0] === sidesArray[1] || sidesArray[1] === sidesArray[2] || sidesArray[2] === sidesArray[0]) return `isoceles`;
}

function equilateral(sidesArray) {
  let longestSide = sidesArray[0];
  if(sidesArray.every(side => side === longestSide)) return `equilateral`;
}


console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 3, 3));
console.log(triangle(3, 4, 5));
console.log(triangle(3, 4, 0));
console.log(triangle(3, 4, 1));
console.log(triangle(3, 1, 1));