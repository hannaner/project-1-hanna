/* -- Setting up selectors -- */
const gameBoard = document.querySelector('.board')
const cards = document.querySelectorAll('.card-item')
const restart = document.getElementById('restart')
const lives = document.querySelector('.lives')
const life = document.getElementsByClassName('life')

const messageBoard = document.querySelector('.message')

const msgMatch = "You got a match!"
const msgTryAgain = "Oops, try again!"
const msgLostGame = "You've lost the game"
const msgWin = "Nice, you've matched all pairs!"

/* -- States -- */
let game
let flippedCard = false
let turns = []
let success = []
let selectedCard

/* -- Lives -- */
let chances = 3

function reduceLives(){
    chances--
    if (chances >= 0){
        life[chances].style.backgroundColor = '#808080'
    } else {
        restartGame()
    }
}

/* -- Flip card -- */
function flipCard() {
    this.classList.add('flip')
    if (!flippedCard){
        selectedCard = this
        // flippedCard = true
        turns.push(selectedCard.dataset.cardImg)
    }
    setTimeout(checkCardMatch, 200)
}

/* -- Check to see if two cards match -- */
function checkCardMatch(){
    // makes sure that only the first card can stay selected
    if (turns.length < 2){
        // prevents checking the card match on itself
        disableCards()
        return
    } else if (turns.length == 2 && turns[0] === turns[1]){
        success.push(turns[0], turns[1])
        turns.splice(0, turns.length)
        disableCards()
        messageBoard.innerText = msgMatch
        
        return
    } else {
        unflipCards()
        // need to figure out how to unflip the currently selected card
        turns.pop()
        reduceLives()
        alert("Oops, try again!")
    }
    console.log("end of checkCardMatch")
}

/* -- Remove click eventlistener -- */
function disableCards(){
    selectedCard.removeEventListener('click', flipCard)
}

/* -- Reset the cards back to front side -- */
function unflipCards(){
    selectedCard.classList.remove('flip')
    // console.log("unflip card called")
}

/* -- Restart game -- */
function restartGame() {
    unflipCards()
    success.splice(0, success.length)
    turns.splice(0, turns.length)
    console.log('reset game success')
}
restart.addEventListener('click', restartGame)

cards.forEach(card => card.addEventListener('click', flipCard))



/** BUGS 
 * matched card shows alert before revealing card 
 * after restarting game, unable to click previously clicked cards, and matched pairs don't flip back
    * maybe need to create a game class so taht resetting game will instantiate a new game?
*/

/** NEXT STEPS
 * construct card class
    * randomize/shuffle cards
 */