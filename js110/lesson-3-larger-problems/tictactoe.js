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
const GAMES_TO_WIN_MATCH = 2;
const BOARD_SIZE = 9;
let score = { 'computerScore': 0, 'yourScore': 0};
let gameCount = 0;

prompt("Welcome to TicTacToe!");
prompt(`How many games do you want to play in the series? (min ${GAMES_TO_WIN_MATCH} ): `)
let seriesCount = Number(rlsync.question());

while (seriesCount < GAMES_TO_WIN_MATCH) {
  prompt(`Please enter a number greater than ${GAMES_TO_WIN_MATCH}: `);
  seriesCount = Number(rlsync.question());
}

while (gameCount < seriesCount && (score['computerScore'] < GAMES_TO_WIN_MATCH && score['yourScore'] < GAMES_TO_WIN_MATCH)) {  // boolean for user's consent to play again
  
  let board = initializeBoard();
  displayBoard(board); // display blank board
  gameCount += 1;
  //prompt(`Game Number: ${gameCount}`);

  prompt(`Computer Score: ${score['computerScore']}`);
  prompt(`Your Score: ${score['yourScore']}`);

  while(true) {

    prompt(`Game Number: ${gameCount}`);
    prompt(`Computer Score: ${score['computerScore']}`);
    prompt(`Your Score: ${score['yourScore']}`);

    computerBoardMark(board);
    if(someoneWon(board) || isFull(board)) break;

    displayBoard(board);

    userBoardMark(board); // ask for user input
    if(someoneWon(board) || isFull(board)) break;

    displayScore(board);
    displayBoard(board);
    
    /*
    if(score['computerScore'] === GAMES_TO_WIN_MATCH || score['yourScore'] === GAMES_TO_WIN_MATCH) {
      prompt(`Computer Score: ${score['computerScore']}`);
      prompt(`Your Score: ${score['yourScore']}`);
      break;
    } */

  }

  displayBoard(board); // display final output

  if (someoneWon(board)) {
    console.log(`${detectWinner(board)} won!`);
  } else {
    console.log(`it's a tie!`);
  }

  //prompt(`Game Number: ${gameCount}`);

  displayScore(board, score);
  prompt(`It was a series of ${seriesCount} games!`);
  prompt(`Computer Score: ${score['computerScore']}`);
  prompt(`Your Score: ${score['yourScore']}`);


 // + Switching off this block of code
 // + We are now allowing people to play a series of min 5 games

  /*
  prompt("Play again? ");
  let consent = rlsync.question();
  if(consent[0].toLowerCase() !== 'y') break; 
  */

}

function displayBoard (squareMark) {
  //console.clear()
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
  for (let i = 1; i <= BOARD_SIZE; i++) {
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
    //prompt(`Choose the square you want to mark: ${emptySquares(board).join(", ")} `);
    prompt(`Choose the square you want to mark: ${joinOr(emptySquares(board))} `);
    userMark = rlsync.question();

    if(emptySquares(board).includes(userMark)) break; 
    
    prompt(`That square is already taken! Please enter one of the numbers: ${joinOr(emptySquares(board))}`);
    
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
  return emptySquares(board).length === 0;
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

/*
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

Problem
1. Add delimiter and joining word 

What do we have:
+ An array of numbers
+ Delimiter and joining word applies only to elements in the outer level; the nested elements remain
+ Default delimiter is comma (,)
+ Default joining word is "or"

Data Structure and Algo:
======================== 
+ Input: Array
+ Output: String
+ Each element of the array will be appended to a string, one at a time and separated by delimiter
+ If it is last elemet of the array, then joining word replaces the delimiter
+ append the last element of the array to the string
*/

function joinOr(arr, delimiter = ", ", joinWord = "or ") {
  let result = "";

  arr.forEach((elem, index) => {
    if(index < arr.length - 1) {
      result += elem + delimiter;
    } else if((arr.length - 1) !== 0) {
        result += joinWord + elem;
      } else result += elem;
  });
  return result;
}

//console.log(joinOr([1, 2, 3],"; ", "and "));
//console.log(joinOr([1, 2]));
//console.log(joinOr([]));
//console.log(joinOr([5]));

/*
KEEP SCORE
==========

Keep track of how many times the player and computer each win, and report the scores after each game. 
The first player to win 5 games wins the overall match (a series of 2 or more games). 
The score should reset to 0 for each player when beginning a new match. Don't use any global variables. 
However, you may want to use a global constant to represent the number of games needed to win the match.

Problem:
=======
+ Number of games to be played is not known: take user input
+ How to track the game count?
+ Detect winner tells the winner: computer or user 
+ If it is tie, no one gets a score
+ First player to reach a score of 5, wins the match
+ Each series consists of two or more games. (Is it required? A winner cannot be decided before playing 5 games).
+ Score starts from zero

Data Structure and Algo:
========================
+ Input: 
  + How many games you want to play (Min 5)?
+ Track 
  + count of games played
  + Continue with the series if game count is less than series count
  + End series, if count is same as series count
  + scores of players
+ Algo 
  + scores of players after each game
    + No change in score in case of a tie
  + If score of either player is not 5 and count of games less than series, continue with the series
  + Display winner if any one has a score = 5, series end.
  + If game count is same as series count and no score is 5, then display scores (series end)

+ Output: 
  + Scores of players after each game
  + Winner: the first to score 5 wins
*/

function displayScore(board, score) {

  switch(detectWinner(board)){
    case 'Computer':
      score['computerScore'] += 1;
      break;
    case 'You':
      score['yourScore'] += 1;
      break;
    default:
      break;
  };

  return score;
}