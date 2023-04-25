/*
0. Start
1. Display the empty board
2. Take user input
3. Take computer input
4. Display board status
5. Winning board, display winner
6. If board is full, display tie
7. If no winner and board is not full, go to step 2
8. If winner, ask for playing again
9. If yes, go to step 1
10. Stop
*/

const rlsync = require('readline-sync'); 

function displayBoard (squareMark) {
  console.clear()
  console.log(`     |     |`);
  console.log(`     |     |`);
  console.log(`  ${squareMark['1']}  |  ${squareMark['2']}  |  ${squareMark['3']}`);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`)
  console.log(`     |     |`);
  console.log(`     |     |`);
  console.log(`  ${squareMark['4']}  |  ${squareMark['5']}  |  ${squareMark['6']}`);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`)
  console.log(`     |     |`);
  console.log(`  ${squareMark['7']}  |  ${squareMark['8']}  |  ${squareMark['9']}`);
  console.log(`     |     |`);
  console.log(`     |     |`);
}

function initializeBoard () {
  let board = {};
  for (let i = 1; i <= 9; i++) {
    board[String(i)] = ' ';
  }
  return board;
}

function prompt(msg) {
  console.log(`${msg}`);
}

function userBoardMark (board) {
  let userMark;

  while(true) {
    prompt(`Choose the square you want to mark: ${emptySquares(board).join(", ")} `);
    userMark = rlsync.question();

    if(emptySquares(board).includes(userMark)) break; 
    
    prompt("That's not a valid choice");
    
  }
  
  board[userMark] = 'X';
  //return displayBoard(board[userMark]);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === " ");
}

function computerBoardMark (board) {

  let computerMark = emptySquares(board)[Math.floor(Math.random() * emptySquares(board).length)];

  board[computerMark] = 'O';
  //return displayBoard(board[computerMark]);

}

function isFull(board) {
  return !!emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board); // returns null if there is no winner
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  // We are using for loop instead of foreach because we want to return a winner
  // foreach method would return undefined instead
  for (let line = 0; line < winningLines.length; line++) {

    // destructuring the array and assigning the nested array to each variable s1, s2, s3
    let [s1, s2, s3] = winningLines[line];

    if (board[s1] === 'X' &&
        board[s2] === 'X' &&
        board[s3] === 'X') {
          return 'You';
        } else if (
          board[s1] === 'O' &&
          board[s2] === 'O' &&
          board[s3] === 'O'
        ) {
          return 'Computer';
        }
  }
  return null;
}

// main run:

let board = initializeBoard();
displayBoard(board); // display blank board

while(true) {
  displayBoard(board);

  userBoardMark(board); // ask for user input
  if(someoneWon(board) || isFull(board)) break;

  computerBoardMark(board);
  if(someoneWon(board) || isFull(board)) break;
}
displayBoard(board); // display the board after final input

if (someoneWon(board)) {
  console.log(`${detectWinner(board)} won!`);
} else {
  console.log(`it's a tie!`);
}