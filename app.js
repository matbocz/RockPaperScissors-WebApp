const hands = [...document.querySelectorAll(".left img")];
const computerImg = document.querySelector(".right img");

const gameHands = {
    playerHand: "",
    computerHand: "",
};

const playerChoice = function () {
    gameHands.playerHand = this.dataset.hand;
    hands.forEach((hand) => (hand.style.boxShadow = ""));
    this.style.boxShadow = "0 0 0 4px #0015ff";
    console.log("player: " + gameHands.playerHand);
};

const computerChoice = function () {
    let computerChoice = hands[Math.floor(Math.random() * 3)]; // get computer choice
    gameHands.computerHand = computerChoice.dataset.hand; // set computer choice
    computerImg.src = computerChoice.src; // set computer img
    computerImg.style.display = "inline-block"; // display computer img
    document.getElementById("loader").style.display = "none"; // hide loader

    console.log("comp: " + gameHands.computerHand);
};

const gameStart = function () {
};

computerImg.style.display = "none";
hands.forEach((hand) => hand.addEventListener("click", playerChoice));

// console.log(computerChoice());
// console.log(document.getElementById('loader'));
