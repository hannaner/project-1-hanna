/* -- Setting up selectors -- */
const gameBoard = document.querySelector('.board')
const cards = document.querySelectorAll('.card-item')
const restart = document.getElementById('restart')
const life = document.getElementsByClassName('life')

const messageBoard = document.querySelector('.message')
const msgMatch = "You got a match!"
const msgTryAgain = "Oops, try again!"
const msgLostGame = "You've lost the game"
const msgWin = "Nice, you've matched all pairs!"
const msgReset = " "

/* -- States -- */
let flippedCard = false
let turns = []
let success = []
let selectedCard

/* -- Lives -- */
let chances = 3

function reduceLives(){
    chances--
    if (chances >= 1){
        life[chances].style.backgroundColor = '#808080'
    } else {
        life[chances].style.backgroundColor = '#808080'
        messageBoard.innerText = msgLostGame
        setTimeout(restartGame, 5000)
    }
}

/* -- Check win status of game --  */
function checkWinStatus(){
    if (success.length === 8){
        messageBoard.innerText = msgWin
        setTimeout(restartGame, 5000)
    }
}

/* -- Flip card -- */
function flipCard() {
    this.classList.add('flip')
    if (!flippedCard){
        selectedCard = this
        turns.push(selectedCard.dataset.cardImg)
    }
    setTimeout(checkCardMatch, 230)
}

/* -- Check to see if two cards match -- */
function checkCardMatch(){
    if (turns.length < 2){
        messageBoard.innerText = msgReset
        disableCards()
        return
    } else if (turns.length == 2 && turns[0] === turns[1]){
        messageBoard.innerText = msgMatch
        success.push(turns[0], turns[1])
        setTimeout(checkWinStatus, 0)
        turns.splice(0, turns.length)
        disableCards()
        return
    } else {
        unflipCards()
        turns.pop()
        messageBoard.innerText = msgTryAgain
        reduceLives()
        return
    }
}

/* -- Remove click eventlistener -- */
function disableCards(){
    selectedCard.removeEventListener('click', flipCard)
}

/* -- Reset the cards back to front side -- */
function unflipCards(){
    selectedCard.classList.remove('flip')
}

/* -- Restart game -- */
function restartGame() {
    unflipCards()
    success.splice(0, success.length)
    turns.splice(0, turns.length)
    location.reload()
}
restart.addEventListener('click', restartGame)

cards.forEach(card => card.addEventListener('click', flipCard))