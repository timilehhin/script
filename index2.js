let firsCard = 10
let secondCard = 4
let sum = firsCard + secondCard 
let hasblackjack = false
let isAlive = true
let  message = ""

function startGame() {
  if (false) {
    message = "Do you want to draw a new card"
  }
  else if(true) {
    message = "Wohoo!, You've got Blackjack"
    hasblackjack = true
  } 
  else if (sum > 21) {
    message = "You're out of the game"
    isAlive = false
  }
  console.log(message)
  }





