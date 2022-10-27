let playerChoice,
    computerChoice

game()

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
                console.log("Both chose rock, it's a tie.")
                break
    
        case "paper":
                console.log("Paper beats rock, you lose!")
                break

        case "scissors":
                console.log("Rock beats scissors, you win")
                break
        }

    break
        
    case "paper":

        switch (computerChoice) {
        case "rock":
                console.log("Paper beat's rock, you win!")
                break
    
        case "paper":
                console.log("Both chose paper, it's a tie.")
                break

        case "scissors":
                console.log("Scissors beats paper, you lose!")
                break
        }

    break

    case "scissors":

        switch (computerChoice) {
        case "rock":
                console.log("Rock beat's scissors, you lose!")
                break
    
        case "paper":
                console.log("Scissors beats paper, you win!")
                break

        case "scissors":
                console.log("Both chose scissors, it's a tie.")
                break
        }

    break
    }
}

function game () {
    for (let looper = 0; looper < 5; looper++) {
        playerChoice = prompt("Enter rock, paper or scissors").toLowerCase()
        computerChoice = (getComputerChoice())

        playRound(playerChoice, computerChoice)
     }
}