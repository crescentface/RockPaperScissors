console.log("Hello World!");

const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let randomPick = Math.floor(Math.random() * rockPaperScissors.length)
    return rockPaperScissors[randomPick]
}

console.log(getComputerChoice());

