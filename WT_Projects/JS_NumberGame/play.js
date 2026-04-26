let randomNum;
let attemptsLeft;
let highScore = 0;
let currentRound = 0;

const gameArea = document.getElementById("gameArea");
const msg = document.getElementById("msg");
const attemptsText = document.getElementById("attempts");
const scoreEl = document.getElementById("gameScore");
const popup = document.getElementById("popup");

function getRoundScore(round) {
  if (round === 1) return 100;
  if (round === 2) return 70;
  if (round === 3) return 50;
  return 0;
}

function showPopup(message) {
  popup.textContent = message;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000); 
}

function startGame(rounds) {
  currentRound = rounds;
  randomNum = Math.floor(Math.random() * 100);
  attemptsLeft = rounds * 3; 
  gameArea.style.display = "block";
  msg.textContent = "Guess a number between 0-100";
  attemptsText.textContent = "Attempts left: " + attemptsLeft;
  showPopup("Game started! You have " + attemptsLeft + " attempts.");
}

function checkGuess() {
  const input = document.getElementById("guessInput");
  const value = input.value.trim();

  if (value === "") {
    showPopup("Please enter a number!");
    return; 
  }

  const userGuess = Number(value);
  if (isNaN(userGuess)) {
    showPopup("Enter a valid number!");
    return;
  }

  attemptsLeft--;

  if (userGuess === randomNum) {
    const score = getRoundScore(currentRound);
    highScore += score;
    scoreEl.textContent = highScore;
    msg.textContent = "Correct! You won!";
    showPopup("Correct! You got it right!");
    gameArea.style.display = "none";
  } else {
    const diff = Math.abs(userGuess - randomNum);

    if (userGuess > randomNum) {
      if (diff <= 5) {
        msg.textContent = "Very close! Try a smaller number.";
        showPopup("Very close! Try a smaller number. Attempts left: " + attemptsLeft);
      } else if (diff <= 15) {
        msg.textContent = "Close! Number is smaller.";
        showPopup("Close! Try a smaller number. Attempts left: " + attemptsLeft);
      } else if (diff > 30) {
        msg.textContent = "Your guess is too big.";
        showPopup("Too big! Try a smaller number. Attempts left: " + attemptsLeft);
      } else {
        msg.textContent = "Your guess is high.";
        showPopup("High! Try a smaller number. Attempts left: " + attemptsLeft);
      }
    } else {
      if (diff <= 5) {
        msg.textContent = "Very close! Try a bigger number.";
        showPopup("Very close! Try a bigger number. Attempts left: " + attemptsLeft);
      } else if (diff <= 15) {
        msg.textContent = "Close! Number is bigger.";
        showPopup("Close! Try a bigger number. Attempts left: " + attemptsLeft);
      } else if (diff > 30) {
        msg.textContent = "Your guess is too small.";
        showPopup("Too small! Try a bigger number. Attempts left: " + attemptsLeft);
      } else {
        msg.textContent = "Your guess is low.";
        showPopup("Low! Try a bigger number. Attempts left: " + attemptsLeft);
      }
    }
  }

  attemptsText.textContent = "Attempts left: " + attemptsLeft;

  if (attemptsLeft === 0 && userGuess !== randomNum) {
    msg.textContent = "You lost! The number was " + randomNum;
    showPopup("You lost! The number was " + randomNum);
    gameArea.style.display = "none";
  }

  input.value = "";
}

function restartGame() {
  highScore = 0;
  scoreEl.textContent = highScore;
  msg.textContent = "Game Restarted! Choose a round to play again.";
  gameArea.style.display = "none";
  showPopup("Game Restarted! High Score reset.");
}
