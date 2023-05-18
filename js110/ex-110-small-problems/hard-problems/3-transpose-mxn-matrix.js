/*
TRANSPOSE A MXN MATRIX
*/


const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1],
];

function transpose(matrix) {
  let transposed = [];
  let rows = matrix.length;
  let cols = matrix[0].length;

// JS does not allow declaring multi-dimensional arrays
// hence declare another empty array before the loop enters the next dimension of the array


  for(let r = 0; r < cols; r++) {
    transposed[r] = [];
    for (let c = 0; c < rows; c++) {
      transposed[r][c] = matrix[c][r];
    }
  }

/*
  matrix.forEach((subarr,rIndex) => {
    transposed[rIndex] = [];
    subarr.forEach((_elem, cIndex) => {
      console.log(transposed);
      transposed[rIndex].push(matrix[cIndex][rIndex])
    })
  })
*/
  console.log(matrix);
  console.log(transposed);
}

transpose(matrix);