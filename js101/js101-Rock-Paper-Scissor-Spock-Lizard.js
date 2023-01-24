/*
ROCK PAPER SCISSOR SPOCK LIZARD

Rock crushes scissor and lizard
Paper covers rock and disproves spock
Scissor cuts paper and decapitates lizard
Spock vaporises rock and smashes scissors
Lizard poisons spock and eats paper

What all actions does the game need to perform?

1. Display Welcome message
2. Take user input to play a game or round of five:
3. If it is a game
    Take use input: validate it;
    Display computer's choice
    Display who won the game;
4. Take user permission to repeat the game or play a round:
  if yes, go to 1
  if no, break from the game
5. If it is a round, show game number:
  play the game, go to 2.
6. Display the score after every round
7. If a player score is 3 or it is the fifth round, display the winner

*/

const rlSync = require('readline-sync');
const LIST = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const GAME_ROUNDS = ['1', '5'];

//let myScore = 0;
//let computerScore = 0;
//let gameNumber = 0;
//let result = '';

prompt("Welcome to the game of Rock Paper Scissor Spock Lizard!");
prompt("=======================================================");

gameRounds();

//repeatGame();


function prompt (message) {
  console.log(`=> ${message}`);
}

function gameRounds() {
  prompt(`Do you want to play single game or a round of five game?: ${GAME_ROUNDS.join("/ ")}  `);
  let gameChoice = rlSync.question().toLowerCase();
  
  while (!GAME_ROUNDS.includes(gameChoice)) {
    prompt("Invalid input!");
    gameChoice = rlSync.question("Please enter again: ");
  }

  if (gameChoice === '1') {
    singleRoundGame();
  } else {
    roundOfFive(gameChoice);
  }
  //return gameChoice;
}

// take a valid user input
function playerOneChoice() {
  prompt(`please choose one from: ${LIST.join(", ")}`);
  let myChoice = rlSync.question().toLowerCase();
  
  while (!LIST.includes(myChoice)) {
    prompt("Invalid input!");
    myChoice = rlSync.question("Please enter again: ").toLowerCase();
  }
  return myChoice;
}

//displays yours and computers choice
function displayChoices(userChoice) {
  let computersChoice = LIST[Math.floor(Math.random() * LIST.length)];
  console.log(`Your choice is ${userChoice} and computer is ${computersChoice}`);
  return computersChoice;
}

//displays winner of single round game
function singleRoundGame() {
  let myChoice = playerOneChoice();
  let computersChoice = displayChoices(myChoice);
  let result = theGameLogic(myChoice, computersChoice);
  console.log(result);
  repeatGame();
}

function megaWinner(playerOneScore, playerTwoScore, gameCount) {
  if ( playerOneScore === 3 || playerTwoScore === 3 || gameCount === 5) {
    if (playerOneScore > playerTwoScore) {
      console.log("YOU are the megawinner!");
    } else if (playerTwoScore > playerOneScore) {
      console.log("COMPUTER is the megawinner!");
    } else {
      console.log("We have a MEGATIE!");
    }
    repeatGame();
  }
}
// Scores at the end of each round
function roundOfFive(count) {
  let gameNumber = 0;
  let myScore = 0;
  let computerScore = 0;
  let result = '';

  while (gameNumber < Number(count) && myScore < 3 && computerScore < 3) {
    gameNumber += 1;

    let myChoice = playerOneChoice();
    let computersChoice = displayChoices(myChoice);

    result = theGameLogic(myChoice, computersChoice);
    console.log(result);
    if (result === "\n YOU WIN! \n") {
      myScore += 1;
    } else if (result === "\n Computer wins \n") {
      computerScore += 1;
    }
    console.log(`Game Number: ${gameNumber}: `);
    console.log(`My Score: ${myScore}`);
    console.log(`Computer Score: ${computerScore}`);
    megaWinner(myScore, computerScore, gameNumber);
  }
}

function repeatGame() {
  let playAgain = rlSync.question("Do you want to play again? (yes/no): ").toLowerCase();
  if (playAgain[0] !== 'y') {
    console.clear();
    //return;
  } else {
    console.clear();
    console.log(`Yay! Let us play again!`);
    console.log(`=======================`);
    gameRounds();
  }
}
/*
while (gameNumber < MAX_GAMES) {
  console.log(userInput())
  prompt(`please choose one from: ${LIST.join(", ")}`);

  let myChoice = rlSync.question().toLowerCase();

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

  if (result === "YOU WIN!") {
    myScore += 1;
  }
  else if (result === "Computer wins") {
    computerScore += 1
  };

  console.log(`Score after ${gameNumber}: You = ${myScore}; Computer: ${computerScore}`)
  // if it is the fifth game, then print the megawinner
  // Often one or two of the five ends in a tie, then we don't get a megawinner.
  // Hence I decided to get a megawinner despite winning 3 of the five games.
  if (gameNumber === 5) {
    if (myScore > computerScore) {
      console.log("You are the megawinner!");
    }
    else if (computerScore > myScore) {
      console.log("Computer is the megawinner!");
    }
    else console.log("WE have a MEGATIE!");
  }

  /*
  if (myScore === 3 || computerScore === 3) {
    if (myScore ===3) prompt("You are the megawinner");
    else prompt("Computer is the megawinner!")
  }
  */

  /* switching off to accomodate best of five games
  let playAgain = rlSync.question("Do you want to play again? (y/n): ").toLowerCase();
  if (playAgain[0] !== 'y') {
    break;
  }
  */
/*
function theGameLogic (playerOne, playerTwo) {
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
        return "\n YOU WIN! \n";
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
        return "\n Computer wins \n";
      } else {
        return "\n Its a tie! \n";
      }
}
*/
/* Another logic to reduce the complexity */

function theGameLogic (playerOneMove, playerTwoMove) {
  let defeatingMoves = {
    rock: ['paper', 'spock'],
    paper: ['scissors', 'lizard'],
    scissors: ['rock', 'spock'],
    spock: ['lizard', 'paper'],
    lizard: ['rock', 'scissors']
  };
  // 1. match the player one's move with a key of defeating value.
  // 2. check if the player two's move is one the values of that key.
  //      if yes, player two wins
  //      else, player one wins
  // 3. player one's move is same as player two then it's a tie
  if (defeatingMoves[playerOneMove].includes(playerTwoMove)) {
    return "\n Computer wins \n";
  } else if (defeatingMoves[playerTwoMove].includes(playerOneMove)) {
    return "\n YOU WIN! \n";
  } else {
    return "\n Its a tie! \n";
  }
}