function computerPlay() {
    let computerOption = Math.floor(Math.random() * 3) + 1;

    if (computerOption === 1)
        return "Rock";
    else if (computerOption === 2)
        return "Paper";
    else
        return "Scissor";
}
