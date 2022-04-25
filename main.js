function computerPlay() {
    let computerOption = Math.floor(Math.random() * 3) + 1;

    if (computerOption === 1)
        return "rock";
    else if (computerOption === 2)
        return "paper";
    else
        return "scissor";
}

function playRound(e) {
    // if player loses it returns 0 otherwise 1
    // if their is a tie just returns

    let playerSelection = e.target.classList.value;
    let computerSelection = computerPlay();

    display.textContent = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`;
    
    if ((computer === 5) || (player === 5)) {
        if (computer > player) {
            display.textContent = "COMPUTER WINS";
            return;
        } else if (player > computer) {
            display.textContent = "PLAYER WINS";
            return;
        } else {
            display.textContent = "TIE";
            return;
        }
    }

    if (playerSelection === computerSelection) return;

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computer++;
        } else {
            player++;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissor") {
            computer++;
        } else {
            player++;
        }
    }

    if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            computer++;
        } else {
            player++;
        }
    }

    playerScore.textContent = `PLAYER: ${player}`;
    computerScore.textContent = `COMPUTER: ${computer}`;
}

const btns = Array.from(document.querySelectorAll("button"));
btns.forEach((btn) => btn.addEventListener("click", playRound));
const display = document.querySelector(".display");
const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");

let player = 0;
let computer = 0;