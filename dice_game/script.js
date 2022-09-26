'use strict';

const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

let scores, currentScore, activePlayer, playing 

// Initialize the game
const init = function() {
    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0

    // store the scores for both players
    scores = [0, 0]
    currentScore = 0
    //identify which is the active player
    activePlayer = 0
    // Hide Dice at the beginning
    diceEl.classList.add('hidden')
    // control if the game is still going on
    playing = true

    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    document.querySelector('#name--0').textContent = 'Player 1'
    document.querySelector('#name--1').textContent = 'Player 2'
}
init()

// Function to switch the player
const switchPlayer = function() {
    // Set current score to 0
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    // Switch the player to roll the dice
    activePlayer = activePlayer === 0 ? 1 : 0; // or activePlayer = 1 - activePlayer or activePlayer = (activePlayer + 1) % 2
    // Change the active--player to make the highlight style in the current active player 
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

//Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if(playing){
        // dice number form 1 to 6
        const dice = Math.trunc(Math.random() * 6) + 1
        // display dice
        diceEl.src = `dice-${dice}.png`
        diceEl.classList.remove('hidden')
        // If the dice is 1, clear the current score, change the player
        if(dice !== 1) {
            currentScore += dice
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        } else {
            switchPlayer()
        }   
    }
    
})

// Hold button functionality
btnHold.addEventListener('click', function() {
    if(playing){
        // Add the current score to the active_player's total score and show
        document.querySelector(`#score--${activePlayer}`).textContent =  scores[activePlayer] += currentScore
        // Check if play's total score is >= 100, which means win
        if(scores[activePlayer] >= 100) {
            //Finish the game
            playing = false
            diceEl.classList.add('hidden')

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            document.querySelector(`#name--${activePlayer}`).textContent = 'WINNER'
        }else {
            switchPlayer()
        }
    }
})

//NewGame button functionality
btnNew.addEventListener('click', init)







