/*for (let count = 10; count < 21; count += 1 ) {

    console.log(count)
} */

/*for (let count= 10; 
       count < 101; 
       count += 10
       ) {

    console.log(count)
}*/

/*for (let i = 0; i < 6; i += 1) {
    console.log(i)
} */

/*let messages = [
    "Hey how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my porfolio lately",
    "Same here!",
    "nice"
]

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}*/

//let  cards = [7, 3, 9]

/*for (let i = 0; i < cards.length; i++ ) {
    console.log(cards[i])
} */

let sentence = ["Hello ", "my ", "name ", "is ", "Timi"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i]
}