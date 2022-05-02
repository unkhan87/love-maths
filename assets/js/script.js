// Wait fior the DOM to finish to load up before running the game
// Get the button elements and add event listenerts to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * the main game "loop", called when the srcipt is first loaded
 * and after the user's answer has been processed
 */
function runGame() {

    //create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAddtionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}