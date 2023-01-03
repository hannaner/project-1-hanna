# Concenration 64

Put your memory to the test! This game will test how well you can remember the location of each card's matching pair.

## How to
- Select a card and find its matching pair
- You have 3 chances (lives) to match all pairs
 _Version 2_
- Gain a life back by matching 3 pairs in a row


---

## Wireframes

<figure>
    <figcaption>Beginning a new game</figcaption>
    <img alt="Beginning a new game" src="/images/step1_intro.jpg" width="50%" height="50%">
</figure>

<figure>
    <figcaption>Start of the game</figcaption>
    <img alt="Start of game" src="/images/step2_begin-game.jpg" width="50%" height="50%">
</figure>

<figure>
    <figcaption>Creating a successful match</figcaption>
    <img alt="Match success" src="/images/step3_match-success.jpg" width="50%" height="50%">
</figure>

<figure>
    <figcaption>How the game looks as you continue to match cards</figcaption>
    <img alt="Continuing game" src="/images/step4_continuing-game.jpg" width="50%" height="50%">
</figure>

<figure>
    <figcaption>When you lose all lives</figcaption>
    <img alt="Lose game" src="/images/step5_lose-game.jpg" width="50%" height="50%">
</figure>

---

## User stories

### Version 1

1. As a user, I want to start a new game
```js
let game
const buttonStartGame
const messagePrompt
const lives
const images = []
```

2. As a user, I want to have a total of 3 chances (lives) to match all cards
```js
let chances = []
```

3. As a user, I want to view 9 cards that are faced "down"
```js
const board
const cardItem
class Card
    construct domElement and this.value attributes
    FUNCTION render
        assign image by random to card
```

4. As a user, I want to be able to click on a card to reveal what image it is
```js
const firstCard
const secondCard

class memoryGame
    FUNCTION play

    cardItem.addEventListener('click', event => {
    })
```

5. As a user, I want to be able to click on another card while the first card is still revealed
```js
(adding to memoryGame class play function)
WHILE firstCard is still showing
```

6. As a user, I want to know if I've successfully matched the card
```js
IF firstCard matches secondCard
    show success message
```

7. As a user, I want to see the cards disappear if they've successfully matched
```js
(in previous IF statement)
 OUTPUT hide firstCard and secondCard
```

8. As a user, I want to know if I mismatched a card 
```js
ELSE
    chances.push('mismatch')
```

9. As a user, I want to see how many lives I have left
```js
(add to ELSE statement)
    change domElement of life circles to grey color
```

10. As a user, I want the cards to be faced down if the 2nd card selected doesn't match
```js
(add to ELSE statement)
change firstCard and secondCard background color back to original to conceal image
```

11. As a user, I want to have another chance to match the first card if the 2nd card selected doesn't match
```js
IF chances.length != 3
function play
```

12. As a user, I want to be able to restart the game at any point in time with a brand new set of images
```js
const restartButton
restartButton.addEventListenter('click', event => {
    set chances to empty array
    cardItems background color set to randomized images
})
```

13. As a user, I want to begin a new game when the game's completed
```js
(in memoryGame class)
FUNCTION getWinner
```

14. As a user, I want to see a message saying I didn't complete the game if I lose all lives
```js
(within render function of memoryGame class)
IF chances.length === 3
alert to restart game
```

### Version 2
1. As a user, I want to gain a life back if I get 3 matches in a row
```js
const matches = ''
(set as a counter)
const turn
(on the secondCard)
IF turn is 1
    matches ++
ELSE
    matches --
```
*need to revisit how to only track secondCard turn for consecutive wins*


2. As a user, I want to race against a timer to complete the game
```js
const timer
(add to IF chances.length === 3 statement)
|| setTimeout(FUNCTION, time length)
```


### Version 3
1. As a user, I want to compete with another player
```js
const playerOne
const playerTwo
```