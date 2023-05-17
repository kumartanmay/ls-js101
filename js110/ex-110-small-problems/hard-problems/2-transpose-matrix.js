/*
Transpose a matrix:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

transposed matrix = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
];

all the rows of the matrix convert into column values and vice versa

trnasposed matrix[0][0] = 1
trnasposed matrix[0][1] = 4
trnasposed matrix[0][2] = 7
trnasposed matrix[1][0] = 2
trnasposed matrix[1][1] = 5
trnasposed matrix[1][2] = 8
trnasposed matrix[2][0] = 3
trnasposed matrix[2][1] = 6
trnasposed matrix[2][2] = 9

1. determine the no of rows and col of the matrix
2. donot mutate the original matrix
*/

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

function transpose(matrix) {
  let transposed = [];

// JS does not allow declaring multi-dimensional arrays
// hence declare another empty array before the loop enters the next dimension of the array

/*
  for(let r = 0; r < rows; r++) {
    transposed[r] = [];
    for (let c = 0; c < cols; c++) {
      transposed[r][c] = matrix[c][r];
    }
  }
*/

  matrix.map((subarr,rIndex) => {
    transposed[rIndex] = [];
    subarr.map((_elem, cIndex) => {
      return transposed[rIndex].push(matrix[cIndex][rIndex])
    })
  })

  console.log(matrix);
  console.log(transposed);
}

transpose(matrix);