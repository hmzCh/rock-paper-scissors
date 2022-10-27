let playerChoice,
    computerChoice,
    playerScore = 0,
    computerScore = 0

game()

function game () {
    for (let looper = 0; looper < 5; looper++) {
        playerChoice = prompt("Enter rock, paper or scissors").toLowerCase()
        computerChoice = (getComputerChoice())
        playRound(playerChoice, computerChoice)
     }
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

function playRound(playerChoice, computerChoice) {

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