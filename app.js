const hands = [...document.querySelectorAll(".left img")];
const computerImg = document.querySelector(".right img");

const gameHands = {
    playerHand: "",
    computerHand: "",
};

const playerChoice = function () {
    gameHands.playerHand = this.dataset.hand; // get player choice
    hands.forEach((hand) => (hand.style.boxShadow = "")); // remove box shadow from all imgs
    this.style.boxShadow = "0 0 0 4px #0015ff"; // set box shadow to chosen img
    
    console.log("Player: " + gameHands.playerHand);
};

const computerChoice = function () {
    let computerChoice = hands[Math.floor(Math.random() * 3)]; // get computer choice
    gameHands.computerHand = computerChoice.dataset.hand; // set computer choice
    computerImg.src = computerChoice.src; // set computer img
    computerImg.style.display = "inline-block"; // display computer img
    document.getElementById("loader").style.display = "none"; // hide loader

    console.log("Computer: " + gameHands.computerHand);
};

function checkResult(player, computer) {
    if (player === computer) {
        return "Draw";
    } else if (
        (player === "paper" && computer === "rock") ||
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

const gameStart = function () {
};

computerImg.style.display = "none";
hands.forEach((hand) => hand.addEventListener("click", playerChoice));

document.getElementById("playButton").addEventListener("click", gameStart);
