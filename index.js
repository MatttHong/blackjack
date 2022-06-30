let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sumEl")
let cardsEl = document.getElementById("cardsEl")
let playerEl = document.getElementById("player-el")

// 2. Store the cards paragraph in a variable called cardsEl

let player = {
    name: "Per",
    chips: 200
}

playerEl.textContent = player.name + ": $" + player.chips



function getRandomCard() {
    let randNum =  Math.floor( Math.random()*13) +1
    if(randNum > 10) {
        return 10
    } else if(randNum === 1) {
        return 11
    } else {
        return randNum
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0]
    for(let i = 1; i < cards.length; i++){
        cardsEl.textContent += ", " + cards[i]
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    console.log(cards)
console.log(isAlive +"")

    if(isAlive === true && hasBlackJack ===false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }

}