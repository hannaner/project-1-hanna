# Concenration 64

Put your memory to the test! This game will test how well you can remember the location of each card's matching pair.

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

- As a user, I want to start a new game
```js
let game
const buttonStartGame
const message
```
- As a user, I want to view 9 cards that are faced "down"
```js
const board
const cardItem
class Card
    construct domElement and this.value attributes
    Function render
        assign image by random to card
```

- As a user, I want to be able to click on a card to reveal what image it is
```js
cardItem.addEventListener('click', event => {

})
```

- As a user, I want to be able to click on another card while the first card is still revealed

- As a user, I want to know if I've successfully matched the card

- As a user, I want to see the cards disappear if they've successfully matched

- As a user, I want to know if I mismatched a card 

- As a user, I want the cards to be faced down if the 2nd card selected doesn't match

- As a user, I want to have another chance to match the first card if the 2nd card selected doesn't match
- As a user, I want to have a total of 3 chances (lives) to match all cards
- As a user, I want to see how many lives I have left
- As a user, I want to be able to restart the game at any point in time with a brand new set of images
- As a user, I want to see if I've successfully matched all pairs
- As a user, I want to either begin a new game or exit the page when the game's completed
- As a user, I want to see a message saying I didn't complete the game if I lose all lives


### Version 2

- As a user, I want to have the option to set the game to 8, 12, or 18 cards
- As a user, I want to gain a life back if I get 3 matches in a row


### Version 3
- As a user, I want to compete with another player
- As a user, I want to race against a timer to complete the game