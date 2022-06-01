var array = ["rock", "paper", "scissors"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var result = getRandomInt(3);
var randomComputer = array[result];
console.log("Computer choice: " + randomComputer);

var result = getRandomInt(3);
var randomUser = array[result];
console.log("User choice: " + randomUser);

//"rock", "paper", "scissors" algorithm
function play(computer, user) {
  if (
    (computer === "rock" && user === "rock") ||
    (computer === "paper" && user === "paper") ||
    (computer === "scissors" && user === "scissors")
  ) {
    console.log("Draw");
    return "Draw";
  } else {
    if (computer === "rock" && user === "paper") {
      console.log("Computer wins!");
      return "Computer wins!";
    } else if (computer === "rock" && user === "scissors") {
      console.log("Computer wins!");
      return "Computer wins!";
    } else if (computer === "paper" && user === "rock") {
      console.log("User wins!");
      return "User wins!";
    } else if (computer === "paper" && user === "scissors") {
      console.log("User wins!");
      return "User wins!";
    } else if (computer === "scissors" && user === "rock") {
      console.log("User wins!");
      return "User wins!";
    } else if (computer === "scissors" && user === "paper") {
      console.log("Computer wins!");
      return "Computer wins!";
    }
  }
}
// play("rock", "scissors")
// play ( randomComputer, randomUser )

function playGame() {
  var result = getRandomInt(3);
  var computer = array[result];

  var computerChoice = document.getElementById("computerChoice");
  computerChoice.innerHTML = "<p> Computer choice: " + computer + "</p>";
  var userChoice = document.getElementById("userChoice");
  var user = userChoice.value;

  var gameResult = document.getElementById("gameResult");
  gameResult.innerHTML = "<p>Game Result: " + play(computer, user) + "</p>";
}
