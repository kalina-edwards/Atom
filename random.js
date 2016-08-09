var input;
var wrong;
var passcode = "green"

var changeRight = function () {
  console.log("Changing right!")
  document.body.style.backgroundColor = "green"
}

var changeWrong = function () {
  console.log("Changing wrong.")
  document.body.style.backgroundColor = "red"
}

// while (input !== passcode) {
//   changeWrong()
//   input = prompt("Try again kiddo.")
// }
//

do {
  input = prompt("What color is green?");
  changeWrong()
} while (input !== passcode)

document.write("<h1>You got it fam!</h1>")
changeRight()
