function errorMessage() {
  document.querySelector(".message").style.color = "rgb(255, 2, 192)";
  document.querySelector(".message").style.transition = "all 1s";
  setTimeout(function () {
    document.querySelector(".message").style.color = "white";
  }, 3000);
}

function togglePopup() {
  document.getElementById("modal").classList.toggle("active");
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    displayMessage("No number was selected!");
    errorMessage();
  } else if (secretNumber === guess) {
    displayMessage("Correct!");
    // document.querySelector(".message").style.color = "rgb(26, 179, 166)";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = secretNumber;
    document.getElementById("modal").classList.toggle("active");

    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (secretNumber !== guess) {
    if (score > 1) {
      if (guess <= 20) {
        displayMessage(secretNumber > guess ? "Too low" : "Too high");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("Select number between 1 and 20");
        errorMessage();
      }
    } else {
      displayMessage("You lost");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  displayMessage("Start again");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "10rem";
  document.querySelector(".guess").value = "";
});
