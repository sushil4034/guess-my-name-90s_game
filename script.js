'use strict';
let score = 20;
let highscore = 0;
let secretnumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretnumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'NO number value';
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = '🎊 you won';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretnumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '⬆ too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game😢';
    }
  } else if (guess < secretnumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '⬇ too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game😢';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
