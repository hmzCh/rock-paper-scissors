let playerChoice,
    computerChoice

playerChoice = prompt("Enter rock, paper or scissors").toLowerCase()
computerChoice = (getComputerChoice())

function getComputerChoice() {
    let choice
    
switch (Math.floor(Math.random() * 3)) {
    case 0:
        return "rock"
        break
    case 1:
        return "paper"
        break
    case 2:
        return "scissors"
        break
}
}