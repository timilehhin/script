let firsCard = 10
let secondCard = 4
let cards = [firsCard, secondCard]
let sum = firsCard + secondCard 
let hasblackjack = false
let isAlive = true
let  message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startgame () {
  rendergame()
}

function rendergame() {
  cardsEl.textContent = "Cards: " + cards[0] + "" + cards[1]
  sumEl.textContent = "Sum: " + sum 
  if (sum<= 20) {
    message = "Do you want to draw a new card"
  }
  else if(sum === 21) {
    message = "You've got Blackjack"
    hasblackjack = true
  } 
  else if (sum > 21) {
    message = "You're out of the game"
    isAlive = false
  }
  messageEl.textContent = message
}

function newcard() {
  let card = 6
  sum += card
  cards.push(card)
  console.log(cards)
  rendergame()
}