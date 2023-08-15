const rockPaperScissors = ["rock", "paper", "scissors"];
const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
const playGame = playRound(playerSelection, computerSelection);


function getComputerChoice() {
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}


function playRound(playerSelection, computerSelection) {
 if (playerSelection === computerSelection) {
    alert("The current score is: Player: " + playerScore + " vs Computer: " + computerScore);
    computerScore++;
    playerScore++;
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

function game() {
   for (let i = 0; i < 5; i++) {
      playGame; 
      console.log(playRound(playerSelection, computerSelection))
}
} 

game();
