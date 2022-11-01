const message = document.querySelector(".message");
const modal = document.getElementById("modal");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`my secret number is ${secretNumber}`);

let score = 20;
let highscore = 0;

function displayMessage(messageContent) {
  message.textContent = messageContent;
}

function errorMessage() {
  message.style.color = "rgb(255, 2, 192)";
  message.style.transition = "color 1s";
  setTimeout(function () {
    message.style.color = "white";
  }, 3000);
}

function togglePopup() {
  modal.classList.toggle("active");
  modal.style.transition = "all .3s";
}
modal.addEventListener("click", function () {
  modal.classList.remove("active");
});

function checkNo() {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No number was selected!");
    errorMessage();
  } else if (secretNumber === guess) {
    displayMessage("Correct!");
    // document.querySelector(".message").style.color = "rgb(26, 179, 166)";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = secretNumber;
    togglePopup();

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
}

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Enter") {
    checkNo();
  }
});

document.querySelector(".check").addEventListener("click", function () {
  checkNo();
});

//again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`my new secret number is ${secretNumber}`);
  displayMessage("Start again");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "10rem";
  document.querySelector(".guess").value = "";
});
