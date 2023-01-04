// console.log("js file is linked")

const game = document.querySelectorAll('.board')

// flip card when clicked
const cards = document.querySelectorAll('.card-item')

function flipCard() {
    this.classList.toggle('flip')

}

cards.forEach(card => card.addEventListener('click', flipCard))

