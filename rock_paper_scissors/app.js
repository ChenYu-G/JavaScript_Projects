const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let computerChoice;
let userChoice;
let gameMap = new Map();
gameMap.set(1,'rock'); 
gameMap.set(2,'paper'); 
gameMap.set(3,'scissors'); 
function getKey(value) {
    return [...gameMap].find(([key, val]) => val == value)[0];
  }

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    compareResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    computerChoice = randomNumber;
    computerChoiceDisplay.innerHTML = gameMap.get(computerChoice);
}

function compareResult() {
    userChoice = getKey(userChoice);
    if (userChoice == computerChoice) {
        resultDisplay.innerHTML = 'Draw';
    }
    else if (userChoice % 3 + 1 == computerChoice) {
        resultDisplay.innerHTML = 'You lose.';
    }
    else {
        resultDisplay.innerHTML = 'You win.';
    }
}

