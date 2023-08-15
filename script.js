const rockPaperScissors = ["rock", "paper", "scissors"];
const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
     return "Draw! You both selected " + playerSelection; 
   } else if (playerSelection === "rock" && computerSelection === "paper") {
     return "You lose! Paper beats rock!";
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
     return "You lose! Scissors beats rock!";
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
     return "You lose! Scissors beats paper!";
   } else {
     return "You win! " + playerSelection + " beats " + computerSelection + "!";
   }
}

console.log(playRound(playerSelection, computerSelection));