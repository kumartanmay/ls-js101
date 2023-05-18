/*
Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, 
and returns the result as a new matrix. The function should not mutate the original matrix.

Examples:

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 4, 1],
  [9, 7, 5]
];

let transposed1= [
  [],[],[]
]

let transposed2 = [
  [],[],[]
]
transposed1[0][0] = matrix1[2][0];
transposed1[0][1] = matrix1[1][0];
transposed1[0][2] = matrix1[0][0];
transposed1[1][0] = matrix1[2][1];
transposed1[1][1] = matrix1[1][1];
transposed1[1][2] = matrix1[0][1];
transposed1[2][0] = matrix1[2][2];
transposed1[2][1] = matrix1[1][2];
transposed1[2][2] = matrix1[0][2];

transposed2[0][0] = matrix2[1][0];
transposed2[0][1] = matrix2[0][0];
transposed2[1][0] = matrix2[1][1];
transposed2[1][1] = matrix2[0][1];
transposed2[2][0] = matrix2[1][2];
transposed2[2][1] = matrix2[0][2];

console.log(transposed1);
console.log(transposed2);
*/

function rotate90(matrix) {
  let transposed = [];
  let rows = matrix.length;
  let cols = matrix[0].length;

  for(let r = 0; r < cols; r++) {
    transposed[r] = [];
    let transposedCols = 0;
    for (let c = rows - 1; c >= 0; c--) {
      transposed[r][transposedCols] = matrix[c][r];
      transposedCols += 1;
    }
  }
  return transposed;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(rotate90(rotate90(rotate90(matrix2))));
// console.log(rotate90(rotate90(matrix2)));
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
