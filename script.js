'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
console.log(secretNumber);

document.querySelector('#check').addEventListener('click', checkTheNumber);
function checkTheNumber() {
  const number = Number(document.querySelector('#number1').value);
  if (score > 1) {
    if (!number) {
      document.querySelector('.message').textContent =
        'No Number ! Please Enter a number....';
    }
    //When number matches the secret number
    else if (number === secretNumber) {
      document.querySelector('.message').textContent =
        'Awesome !! Correct Number';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      document
        .querySelector('#check')
        .removeEventListener('click', checkTheNumber);
      if (score > highScore) {
        highScore = score;
        document.getElementById('highscore').textContent = highScore;
      }
    }
    // When number is too high
    else if (number > secretNumber) {
      document.querySelector('.message').textContent = '😱 !! Too high';
      score--;
      document.querySelector('.score').textContent = score;
    }
    // When number is too low
    else if (number < secretNumber) {
      document.querySelector('.message').textContent = '😱 !! Too low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '☠️ You lost the game ';
    document.querySelector('.score').textContent = 0;
  }
}

//When clicked on Again
document
  .querySelector('#againBtn')
  .addEventListener('click', startTheGameAgain);
function startTheGameAgain() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector('#number1').value = null;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('#check').addEventListener('click', checkTheNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
}
