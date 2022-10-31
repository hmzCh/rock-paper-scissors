let playerChoice
let computerChoice
let playerScore = 0
let computerScore = 0

var rockButton = document. createElement("button")
var paperButton = document. createElement("button")
var scissorsButton = document. createElement("button")

playerChoice = prompt("Enter rock, paper or scissors").toLowerCase()
computerChoice = (getComputerChoice())
console.log(playRound())
console.log(displayScore())

console.log(determineWinner()) 

function getComputerChoice() {    
    
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

function playRound() {

    switch (playerChoice) {
    case "rock":
            
        switch (computerChoice) {
        case "rock":
            return "Both chose rock, it's a tie."
            break
    
        case "paper":
            computerScore++
            return "Paper beats rock, you lose!"
            break

        case "scissors":
            playerScore++
            return "Rock beats scissors, you win"
            break
        }

    break
        
    case "paper":

        switch (computerChoice) {
        case "rock":
            playerScore++
            return "Paper beat's rock, you win!"
            break
    
        case "paper":
            return "Both chose paper, it's a tie."
            break

        case "scissors":
            computerScore++
            return "Scissors beats paper, you lose!"
            break
        }

    break

    case "scissors":

        switch (computerChoice) {
        case "rock":
            computerScore++
            return "Rock beat's scissors, you lose!" 
            break
    
        case "paper": 
            playerScore++
            return "Scissors beats paper, you win!"
            break

        case "scissors":
            return "Both chose scissors, it's a tie."
            break
        }

    break
    }
}

function displayScore() {
    return ("Score:\n" + "Player " + playerScore + "-" + computerScore + " Computer")
}

function determineWinner () {
    if (playerScore > computerScore) {
        return "The Player wins the game!"
    } else if (computerScore > playerScore) {
        return "The Computer wins the game!"
    } else {
        return "The game was a tie."
    }
}