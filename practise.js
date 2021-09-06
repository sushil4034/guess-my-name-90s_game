let guess_number = document.querySelector('.number');
let score = 20;
let highscore = 0;
guess_number = Math.trunc(Math.random() * 20 + 1);
console.log(guess_number);

document.querySelector('.check').addEventListener('click', function () {
  const choosen_number = Number(document.querySelector('.guess').value);
  console.log(choosen_number);
  // if(!choosen_number)
  if (!choosen_number) {
    document.querySelector('.message').textContent = 'Enter some value';
  } else if (choosen_number === guess_number) {
    document.querySelector('.message').textContent = 'YOU WON ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess_number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (choosen_number > guess_number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'To high ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost ';
    }
  } else if (choosen_number < guess_number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'To low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost ';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
