let userguess;
let result = document.querySelector("#result");
let submit = document.querySelector("#submit");
let guessSlot = document.querySelector(".guess-list"); // Corrected variable name
let remainGuess = document.querySelector(".remainingGuess");
let numlowheigh = document.querySelector(".low-Heigh");
let playgame = true;

let numGuess = 1;
let computeNumber = Math.floor(Math.random() * 100);
let prevGuess = [];

document.addEventListener("DOMContentLoaded", function () {
  if (playgame) {
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      userguess = parseInt(document.querySelector("#userguess").value); // Capture latest value
      validateguess(userguess);
    });
  }
});

function validateguess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid guess");
  } else if (guess > 100) {
    alert("Entered number is too large");
  } else if (guess < 1) {
    alert("Entered number is too small");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${computeNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === computeNumber) {
    result.innerText = "Congratulations! You guessed it right!";
  } else if (guess < computeNumber) {
    result.innerText = "Number is Too low";
  } else if (guess > computeNumber) {
    result.innerText = "Number is Too High";
  }
}

function displayGuess(guess) {
  document.querySelector("#userguess").value = ""; // Clear input field
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remainGuess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  numlowheigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  playgame = false; // Stop the game
  submit.disabled = true; // Disable the submit button
}
