/* -- Setting up selectors -- */
const gameBoard = document.querySelectorAll('.board')
const cards = document.querySelectorAll('.card-item')
const lives = document.querySelectorAll('.lives')
const life = document.querySelectorAll('.life')
const restart = document.getElementById('restart')


/* -- States -- */
let firstCard
let secondCard
let flippedCard = false
let turns = 0


/* -- Flip card -- */
function flipCard() {
    this.classList.add('flip')

    if (!flippedCard){
        firstCard = this
        flippedCard = true
        console.log(firstCard.dataset.cardImg)
        return
    }
    
    // setting the second card to flipped
    secondCard = this
    flippedCard = true
    
    setTimeout(checkCardMatch(), 0)
}


/* -- Check to see if two cards match -- */
function checkCardMatch(){
    if(firstCard.dataset.cardImg === secondCard.dataset.cardImg){
        // setTimeout(alert("you got a match!"), 0)
        disableCards()
        return
    } else {
        setTimeout(alert("oops, try again!"), 0)
    }
    unflipCards()
}

/* -- Remove click eventlistener -- */
function disableCards(){
    console.log("disable cards called")
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
}

/* -- Reset the cards back to front side -- */
function unflipCards(){
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
}


/* -- Restart game -- */
function restartGame() {
    console.log('button is pressed')
    unflipCards()
    firstCard = null
    secondCard = null
    console.log('reset game success')
}
restart.addEventListener('click', restartGame)


cards.forEach(card => card.addEventListener('click', flipCard))



/** BUGS 
 * matched card shows alert before revealing card 
 * after restarting game
 * unable to click previously clicked cards
 * can click multiple cards, and check doesn't run
*/

/** NEXT STEPS
 * construct card class
    * randomize/shuffle cards
 */