function getComputerChoice() {
    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * computerChoices.length) + 1;

    if (randomChoice === 1) {
        return "Rock";
    }
    else if (randomChoice === 2) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}
getComputerChoice()

print(getComputerChoice)
