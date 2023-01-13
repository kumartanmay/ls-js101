/*
ROCK PAPER SCISSOR SPOCK LIZARD

Rock crushes scissor and lizard
Paper covers rock and disproves spock
Scissor cuts paper and decapitates lizard
Spock vaporises rock and smashes scissors
Lizard poisons spock and eats paper

*/

const rlSync = require('readline-sync');
const LIST = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const MAX_GAMES = 5;

let myScore = 0;
let computerScore = 0;
let gameNumber = 0;
let result = '';

function prompt (message) {
  console.log(`=> ${message}`);
}

prompt("Welcome to the game of Rock Paper Scissor Spock Lizard!");

while (gameNumber < MAX_GAMES) {
  prompt(`please choose one from: ${LIST.join(", ")}`);

  let myChoice = rlSync.question();

  // if we use if instead of while-loop then this block will only execute once. The loop ensures that
  // user input is valid and then only computer gets it chance to play

  while (!LIST.includes(myChoice)) {
    prompt("Invalid input!");
    myChoice = rlSync.question("Please enter again: ");
  }

  let computersChoice = LIST[Math.floor(Math.random() * LIST.length)];
  console.log(`Your choice is ${myChoice} and computer is ${computersChoice}`);
  
  gameNumber += 1;
  console.log(`Game Number: ${gameNumber}`)
  result = (rockPaperScissorsSpockLizard(myChoice, computersChoice));

  if (result === "YOU WIN!") myScore += 1;
  else if (result === "Computer wins") {computerScore += 1};

  console.log(`Score after ${gameNumber}: You = ${myScore}; Computer: ${computerScore}`)

  if (myScore === 3 || computerScore === 3) {
    if (myScore ===3) prompt("You are the megawinner");
    else prompt("Computer is the megawinner!")
  }

  /* switching off to accomodate best of five games
  let playAgain = rlSync.question("Do you want to play again? (y/n): ").toLowerCase();
  if (playAgain[0] !== 'y') {
    break;
  }
  */
}

function rockPaperScissorsSpockLizard (playerOne, playerTwo, playerOneScore, playerTwoScore) {
  if ((playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "rock" && playerTwo === "lizard") || 
      (playerOne === "paper" && playerTwo === "rock") ||
      (playerOne === "paper" && playerTwo === "spock") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "scissors" && playerTwo === "lizard") || 
      (playerOne === "spock" && playerTwo === "rock") ||
      (playerOne === "spock" && playerTwo === "scissors") ||
      (playerOne === "lizard" && playerTwo === "paper") ||
      (playerOne === "lizard" && playerTwo === "spock")) {
        return "YOU WIN!";
      } else if ((playerTwo === "rock" && playerOne === "scissors") ||
      (playerTwo === "rock" && playerOne === "lizard") || 
      (playerTwo === "paper" && playerOne === "rock") ||
      (playerTwo === "paper" && playerOne === "spock") ||
      (playerTwo === "scissors" && playerOne === "paper") ||
      (playerTwo === "scissors" && playerOne === "lizard") || 
      (playerTwo === "spock" && playerOne === "rock") ||
      (playerTwo === "spock" && playerOne === "scissors") ||
      (playerTwo === "lizard" && playerOne === "paper") ||
      (playerTwo === "lizard" && playerOne === "spock")) {
        return "Computer wins";
      } else {
        return "Its a tie!";
      }

} 