/* -- Setting up selectors -- */ // lovely section comment
const gameBoard = document.querySelector('.board')
const cards = document.querySelectorAll('.card-item')
const restart = document.getElementById('restart') // name is ambiguous consider restartButton ?
const life = document.getElementsByClassName('life') // name is ambiguous, especially since it can easily be confused with chances in this context, consider make clear this holds an html element by doing something like lifeDisplay, lifeElement etc

const messageBoard = document.querySelector('.message')
const msgMatch = "You got a match!"
const msgTryAgain = "Oops, try again!"
const msgLostGame = "You've lost the game"
const msgWin = "Nice, you've matched all pairs!"
const msgReset = " "

/* -- States -- */
let flippedCard = false // consider changing name to be more semantic with holding a boolean ( try having it start with is, like isAnyCardFlipped). Currently when read without context one might think it's supposed to hold the DOM element of a flipped card
let turns = [] // use const when declaring reference types unless you want to be able to change it to say, an object or null. ( hint: you don't )
let success = [] // see 16
let selectedCard // would be more intentional to use null here than leaving it undefined 

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
    this.classList.add('flip') // nice use of `this`
    if (!flippedCard){
        selectedCard = this
        turns.push(selectedCard.dataset.cardImg)
    }
    setTimeout(checkCardMatch, 230) // very fast. why not run all of this logic right away and just delay the unflip ?
}

/* -- Check to see if two cards match -- */
function checkCardMatch(){ // to continue following the functional programming paradigm, I think you could go just 1 step further and make a `handleClick` function which would take a good amount of this logic here, and bring all the different function calls together instead of 'daisy chaining'(flip' to check' to disable') them. It make it easier to read and to make changes in the future if needed. 
    if (turns.length < 2){
        messageBoard.innerText = msgReset
        disableCards() // see 75
        return // none of your other functions have return undefined ( a default behavior btw ), either add to others or remove form here ( the other code blocks will not run because of the way you set up your conditional already )
    } else if (turns.length == 2 && turns[0] === turns[1]){
        messageBoard.innerText = msgMatch
        success.push(turns[0], turns[1])
        setTimeout(checkWinStatus, 0) // why use setTimeout with 0 seconds ?
        turns.splice(0, turns.length)
        disableCards() // see 75
        return
    } else {
        unflipCards() // see 80
        turns.pop()
        messageBoard.innerText = msgTryAgain
        reduceLives()
        return
    }
}

/* -- Remove click eventlistener -- */
function disableCards(){ // named plural but only effects 1 ? + see 80
    selectedCard.removeEventListener('click', flipCard)
}

/* -- Reset the cards back to front side -- */
function unflipCards(){ // named plural but only effects 1 ? consider adding a parameter to increase use cases ( like resetting all the cards by doing a loop of all the cards )
    selectedCard.classList.remove('flip')
}

/* -- Restart game -- */
function restartGame() {
    unflipCards() // see 80 + without a selected card this doesn't do anything does it, 
    success.splice(0, success.length)
    turns.splice(0, turns.length) 
    location.reload() //<- this is doing you no favors, just a fancy way to refresh the page which will NOT help us in the future. we'll lose all the cached data and we'll send another get request plus. I strongly suggest a Refactor this function
}
restart.addEventListener('click', restartGame)

cards.forEach(card => card.addEventListener('click', flipCard))