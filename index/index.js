/* -- Setting up selectors -- */
const gameBoard = document.querySelectorAll('.board')
const cards = document.querySelectorAll('.card-item')
const lives = document.querySelectorAll('.lives')
const life = document.querySelectorAll('.life')
const restart = document.getElementById('restart')


/* -- Match card -- */
let firstCard
let secondCard
let flippedCard = false


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

cards.forEach(card => card.addEventListener('click', flipCard))


/* -- Check to see if two cards match -- */
function checkCardMatch(){
    if(firstCard.dataset.cardImg === secondCard.dataset.cardImg){
        setTimeout(alert("you got a match!"), 0)
        disableCards()
        return
    } 
    unflipCards()
}

/* -- Remove click eventlistener -- */
function disableCards(){
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
    firstCard = null
    secondCard = null
    console.log('reset game success')
}
restart.addEventListener('click', restartGame)