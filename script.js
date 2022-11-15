



console.log(1)

let count = 0

function increment() {
  let countEl = document.getElementById("count-el")
   count += 1
  countEl.textContent = count
}

function save() {
  let saveEl = document.getElementById("save-el")
  let countStr = count + " - "
  saveEl.textContent += countStr
  console.log(count)
  countEl.textContent = 0
  count = 0
}

save()

//let number = document.getElementById("number").value;

// function guessnumber() {
//   let number = document.getElementById("number").value;
//   let guessnumber = 4;
//   if (guessnumber == number) {
//     alert('You are correct')
//   }
//   else {
//     alert('You are incorrect')
//   }
// }



