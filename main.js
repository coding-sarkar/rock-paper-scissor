function computerPlay() {
    let computerOption = Math.floor(Math.random() * 3) + 1;

    if (computerOption === 1)
        return "Rock";
    else if (computerOption === 2)
        return "Paper";
    else
        return "Scissor";
}

function playRound(playerSelection, computerSelection) {
    let playerOpt = playerSelection.toLowerCase();
    let compOpt = computerSelection.toLowerCase();

    if (playerOpt === compOpt) {
        return `Tie! ${playerSelection} can't beat ${computerSelection}`;
    }

    if (playerOpt === "rock") {
        if (compOpt === "paper") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }

    if (playerOpt === "paper") {
        if (compOpt === "scissor") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }

    if (playerOpt === "scissor") {
        if (compOpt === "rock") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
}