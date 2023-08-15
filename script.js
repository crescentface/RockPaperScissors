const rockPaperScissors = ["rock", "paper", "scissors"];
const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;


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
    return "You lose! Paper beats rock!";
 } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    alert("The current score is: Player: " + playerScore + " vs Computer: " + computerScore);
    return "You lose! Scissors beats rock!";
 } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    alert("The current score is: Player: " + playerScore + " vs Computer: " + computerScore);
    return "You lose! Scissors beats paper!";
 } else {
    playerScore++;
    alert("The current score is: Player: " + playerScore + " vs Computer: " + computerScore);
    return "You win! " + playerSelection + " beats " + computerSelection + "!";
}
}

function game() {
    while (playerScore <=5 || computerScore <=5) {
        playRound(playerSelection, computerSelection);
      }
}

console.log(playRound(playerSelection, computerSelection));