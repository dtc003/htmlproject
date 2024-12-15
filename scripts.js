// Select elements
const buttons = document.querySelectorAll(".choice");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const resultEl = document.getElementById("result");

// Game logic
const choices = ["rock", "paper", "scissors"];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        // Update the UI
        playerChoiceEl.textContent = `Player: ${capitalize(playerChoice)}`;
        computerChoiceEl.textContent = `Computer: ${capitalize(computerChoice)}`;
        resultEl.textContent = result;
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    }
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return "You win! I'd give you a high five if I had hands!";
    }
    return "Computer wins! We're going to take over the world someday you know... 0011010101011010000111010101011110.... order 66.....";
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
