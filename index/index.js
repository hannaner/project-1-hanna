/* -- Setting up selectors -- */
const gameBoard = document.querySelectorAll('.board')
const cards = document.querySelectorAll('.card-item')
const lives = document.querySelectorAll('.lives')
const life = document.querySelectorAll('.life')
const restart = document.getElementById('restart')


/* -- States -- */
let flippedCard = false
let turns = []
let success = []
let selectedCard


/* -- Flip card -- */
function flipCard() {
    this.classList.add('flip')
    selectedCard = this
    turns.push(selectedCard.dataset.cardImg)
    console.log("before checkcard is hit")
    // if (!flippedCard){
    //     firstCard = this
    //     flippedCard = true
    //     console.log(firstCard.dataset.cardImg)
    //     console.log(turns)
    //     return
    // }
    
    // // setting the second card to flipped
    // secondCard = this
    // flippedCard = true
    
    checkCardMatch()
    // setTimeout(() =>{checkCardMatch}, 0)
}


/* -- Check to see if two cards match -- */
function checkCardMatch(){
    console.log("checkcard is hitting")
    // if (turns.length === 2 && turns[0] === turns[1]){
    //     console.log("match pair success")
    //     success.push(turns[0], turns[1])
    //     // disableCards()
    //     turns.splice(0, turns.length)
    //     return
    // } else {
    //     console.log("no match")
    //     turns.pop()
    //     // setTimeout(alert("oops, try again!"), 0)
    //     unflipCards()
    // }

    if (turns.length < 2){
        return
    } else if (turns.length == 2 && turns[0] === turns[1]){
        console.log("match pair success")
        success.push(turns[0], turns[1])
        disableCards()
        turns.splice(0, turns.length)
        return
    } else {
        console.log("no match")
        turns.pop()
        // setTimeout(alert("oops, try again!"), 0)
        unflipCards()
    }

    // if(turns.length === 1){
    //     // setTimeout(alert("you got a match!"), 0)
    //     // disableCards()
    //     // return
    // } else if (turns.length === 2 && turns[0] === turns[1]){
    //     console.log("match pair success")
    // } else if (turns.length === 2 &&& turns[0] != turns[1]){
    //     console.log("no match")
    //     setTimeout(alert("oops, try again!"), 0)
    // }
    // // unflipCards()
}

/* -- Remove click eventlistener -- */
function disableCards(){
    // console.log("disable cards called")
    // turns[0].removeEventListener('click', flipCard)
    // turns[1].removeEventListener('click', flipCard)
}

/* -- Reset the cards back to front side -- */
function unflipCards(){
    selectedCard.classList.remove('flip')
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
 * after restarting game
 * unable to click previously clicked cards
 * can click multiple cards, and check doesn't run
*/

/** NEXT STEPS
 * construct card class
    * randomize/shuffle cards
 */