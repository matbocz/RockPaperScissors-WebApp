const game = {
    playerHand: "",
    computerHand: "",
};

function playerChoice() {
    game.playerHand = this.dataset.hand;
    console.log(game.playerHand);
}

// const hands = [...document.querySelectorAll('')];