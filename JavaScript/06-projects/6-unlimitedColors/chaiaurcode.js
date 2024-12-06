function randomNumberGenerator() {
  let randNum = Math.round(Math.random() * 1000000 + 1);

  console.log(randNum);
  if (randNum <= 99999) {
    randNum = randNum + 99999;
  }
  return randNum;
}

function randomNumberGenerator2() {
  const hexValues = "0123456789ABCDEF";
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const randNum = Math.floor(Math.random() * 16);
    hex += hexValues[randNum];
  }
  return hex;
}

console.log(randomNumberGenerator2());

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const body = document.querySelector("body");
let trigger;

startButton.addEventListener("click", function () {
  if (!trigger) {
    trigger = setInterval(function () {
      const randomNumber = randomNumberGenerator2();
      body.style.backgroundColor = `${randomNumber}`;
      console.log("color change started");
    }, 1000);
  }
});

stopButton.addEventListener("click", function () {
  console.log("color change stopped");
  clearInterval(trigger);
  trigger = null;
});

console.log(randomNumberGenerator());
