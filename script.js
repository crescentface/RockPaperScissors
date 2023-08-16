const rockPaperScissors = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

//Function to randomise the computer pick of rock, paper, scissors
function getComputerChoice() {
   return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

//Gets the winner at the end of the game
function getWinner() {
   if (playerScore < computerScore) {
     alert ("You lose!");
     return "You lose!";
   } else if (playerScore == computerScore) {
     alert ("Draw!");
     return "Draw!";
   } else {
     alert ("You win!");
     return "You win!";
   }
}


//Plays a round of rock, paper, scissors. Alerting players of the current score and
//who won that round. Could be tidier?
function playRound(playerSelection, computerSelection)
{
 playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
 computerSelection = getComputerChoice();
 if (playerSelection === computerSelection) {
     computerScore++;
     playerScore++;
     alert("The current score is: Player: " + playerScore + " vs Computer: " + computerScore);
     return "Draw! You both selected " + playerSelection; 
 } else if (playerSelection === "rock" && computerSelection === "paper") {
     computerScore++;
     alert("The current score is: Player: " + playerScore + " vs Computer: " + computerScore);
     return "You lose! Paper beat rock!";
 } else if (playerSelection === "scissors" && computerSelection === "rock") {
     computerScore++;
     alert("The current score is: Player: " + playerScore + " vs Computer: " + computerScore);
     return "You lose! Scissors beat rock!";
 } else if (playerSelection === "paper" && computerSelection === "scissors") {
     computerScore++;
     alert("The current score is: Player: " + playerScore + " vs Computer: " + computerScore);
     return "You lose! Scissors beat paper!";
 } else {
     playerScore++;
     alert("The current score is: Player: " + playerScore + " vs Computer: " + computerScore);
     return "You win! " + playerSelection + " beats " + computerSelection + "!";
  } 
}


//Iterates through i and plays 5 rounds of the game. Try to integrate
//getWinner() function into this, not worked correctly as of yet.
function game() {
   for (let i = 0; i < 5; i++) {
        console.log(playRound());     
   }
}


//Having to call game then getWinner due to not being able to integrate
//described in game().
game();
console.log(getWinner());