/* -- Setting up selectors -- */
const gameBoard = document.querySelectorAll('.board')
const cards = document.querySelectorAll('.card-item')
const restart = document.getElementById('restart')
const lives = document.querySelectorAll('.lives')
const life = document.querySelectorAll('.life')


/* -- States -- */
let game
let flippedCard = false
let turns = []
let success = []
let selectedCard

/* -- Lives -- */
let chances = 3

// console.log("this is life " + life)
function checkLives(){
    if (chances == 3) {
        
    } else if (chances == 2) {

    } else if (chances == 1) {

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
    
    checkCardMatch()
}

/* -- Check to see if two cards match -- */
function checkCardMatch(){
    // makes sure that only the first card can stay selected
    if (turns.length < 2){
        // prevents checking the card match on itself
        disableCards()
        console.log("this is the card's data" + selectedCard.dataset.cardImg)
        return
    } else if (turns.length == 2 && turns[0] === turns[1]){
        success.push(turns[0], turns[1])
        turns.splice(0, turns.length)
        disableCards()
        console.log("match pair success")
        alert("You got a match!")
        return
    } else {
        unflipCards()
        // need to figure out how to unflip the currently selected card
        turns.pop()
        alert("Oops, try again!")
        console.log("no match")
    }
    console.log("end of checkCardMatch")
}

/* -- Remove click eventlistener -- */
function disableCards(){
    console.log("disable cards called")
    selectedCard.removeEventListener('click', flipCard)
}

/* -- Reset the cards back to front side -- */
function unflipCards(){
    selectedCard.classList.remove('flip')
    // console.log("unflip card called")
}

/* -- Restart game -- */
function restartGame() {
    console.log('button is pressed')
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