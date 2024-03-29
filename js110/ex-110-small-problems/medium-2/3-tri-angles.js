/*
A triangle is classified as follows:

    Right: One angle is a right angle (exactly 90 degrees).
    Acute: All three angles are less than 90 degrees.
    Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. 
If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following 
four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. 
You may also assume that the arguments are in degrees.

Examples:
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

Info:
1. Input: three numbers representing angles of a triangle
2. Output: a string: "acute" or "right" or "obtuse" or "invalid"

Rule:
Valid triangle:
1. Sum of all three sides must be 180
2. Smallest angle must be greater zero
3. Right: one angle is 180
4. Acute: all angles less than 180
5. Obtuse: one angle greater than 180
*/

function triangle(angleA, angleB, angleC) {
  let angles = [angleA, angleB, angleC];
  if (angles.reduce((acc, cur) => acc+cur) === 180 && Math.min(...angles) > 0 ) {
    return right(angles) || obtuse(angles) || `acute`;
  }
  return `invalid`;
}

function right(angles) {
  // console.log(angles.filter(angle => angle === 90));
  if (angles.filter(angle => angle === 90).length) return `right`;
}

function obtuse(angles) {
  if (angles.filter(angle => angle > 90).length) return `obtuse`;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(60, 30, 90));       // "right"
console.log(triangle(120, 10, 50));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));      // "invalid"