function computerPlay() {
    let computerOption = Math.floor(Math.random() * 3) + 1;

    if (computerOption === 1)
        return "rock";
    else if (computerOption === 2)
        return "paper";
    else
        return "scissor";
}

function playRound(playerSelection, computerSelection) {
    // if player loses it returns 0 otherwise 1
    // if their is a tie just returns 
    
    if (playerSelection === computerSelection) {
        return;
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return 0;
        } else {
            return 1;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissor") {
            return 0;
        } else {
            return 1;
        }
    }

    if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            return 0;
        } else {
            return 1;
        }
    }
}

function game() {
    let playerSelection, computerSelection;
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter [Rock/Paper/Scissor]");
        computerSelection = computerPlay();
        
        let result = playRound(playerSelection.toLowerCase(), computerSelection);
        
        if (result === 1) {
            player++;
        } else if (result === 0){
            computer++;
        }
    }

    if (player > computer) {
        console.log(`You Win! Player = ${player} | Computer = ${computer}`);
    } else if (player < computer) {
        console.log(`You Lose! Player = ${player} | Computer = ${computer}`);
    } else {
        console.log(`Tie! Player = ${player} | Computer = ${computer}`);
    }
}

game();