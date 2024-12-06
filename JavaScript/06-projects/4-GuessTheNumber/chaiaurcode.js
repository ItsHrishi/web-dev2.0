let min = 1;
let max = 100;
let randomNumber = parseInt(Math.round(Math.random() * (max - min + 1) + min));

const submitButton = document.querySelector("#subt");
const remainingGuesses = document.querySelector(".lastResult");
const textMessage = document.querySelector(".lowOrHi");
const allGuesses = document.querySelector(".guesses");
const userInput = document.getElementById("guessField");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let totalGuesses = 10;

console.log(randomNumber);

let previousGuess = [];

let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter valid number");
  } else if (guess > 100) {
    alert("Enter number lower than 100");
  } else if (guess < 1) {
    alert("Enter number greater than 1");
  } else {
    previousGuess.push(guess);
    if (totalGuesses < 1) {
      displayGuess(guess);
      displayMessage(`Game over random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You have guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is TOO LOW");
  } else if (guess > randomNumber) {
    displayMessage("Number is TOO HIGH");
  }
}

function displayGuess() {
  userInput.value = "";
  totalGuesses--;
  updateAllGuesses();
  remainingGuesses.innerHTML = `${totalGuesses}`;
}

function displayMessage(message) {
  textMessage.innerText = `${message}`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    e.preventDefault();
    randomNumber = Math.round(Math.random() * (max - min + 1) + min);
    previousGuess = [];
    totalGuesses = 10;
    updateAllGuesses();
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}

function updateAllGuesses() {
  console.log(previousGuess);
  allGuesses.innerHTML = `${previousGuess}`;
}
