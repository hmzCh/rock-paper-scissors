game()

function game () {

    let playerChoice
    let computerChoice
    let playerScore = 0
    let computerScore = 0

    for (let looper = 0; looper < 5; looper++) {
        playerChoice = prompt("Enter rock, paper or scissors").toLowerCase()
        computerChoice = (getComputerChoice())
        console.log(playRound(playerChoice, computerChoice, playerScore, computerScore))
        console.log(displayScore(playerScore, computerScore))
     }

    console.log(determineWinner(playerScore, computerScore)) 
}

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

function playRound(playerChoice, computerChoice, playerScore, computerScore) {

    switch (playerChoice) {
    case "rock":
            
        switch (computerChoice) {
        case "rock":
                return "Both chose rock, it's a tie."
                break
    
        case "paper":
                return "Paper beats rock, you lose!"
                computerScore++
                break

        case "scissors":
                return "Rock beats scissors, you win"
                playerScore++
                break
        }

    break
        
    case "paper":

        switch (computerChoice) {
        case "rock":
                return "Paper beat's rock, you win!"
                playerScore++
                break
    
        case "paper":
                return "Both chose paper, it's a tie."
                break

        case "scissors":
                return "Scissors beats paper, you lose!"
                computerScore++
                break
        }

    break

    case "scissors":

        switch (computerChoice) {
        case "rock":
                return "Rock beat's scissors, you lose!"
                computerScore++
                break
    
        case "paper":
                return "Scissors beats paper, you win!"
                playerScore++
                break

        case "scissors":
                return "Both chose scissors, it's a tie."
                break
        }

    break
    }
}

function displayScore(playerScore, computerScore) {
    return ("Score:\n" + "Player " + playerScore + "-" + computerScore + " Computer")
}

function determineWinner (playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "The Player wins the game!"
    } else if (computerScore > playerScore) {
        return "The Computer wins the game!"
    } else {
        return "The game was a tie."
    }
}