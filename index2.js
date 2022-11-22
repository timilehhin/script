let firsCard = 10
let secondCard = 4
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
  cardsEl.textContent = "Cards: " + firsCard + "" + secondCard 
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
  console.log("Drawing a new card from the deck")

  newcard = 5

  sum += newcard

  rendergame()
}