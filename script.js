'Use strict';
//testing stage
console.log(document.querySelector('.message').textContent);
// displayMessages('Start Guessing...');
document.querySelector('.score').textContent = 30;
document.querySelector('.number').textContent;
document.querySelector('.guess').value
console.log(document.querySelector('.guess').value)
//work begins
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highscore = 0;
const displayMessages = (message) => {
    document.querySelector('.message').textContent = message;
}
const guess = Number(document.querySelector('.guess').value)
const action = function () {
    const guess = Number(document.querySelector('.guess').value)
    //when player has no number
    if (!guess) {
        displayMessages('⛔ No Number')
    }
    //when player wins
    else if (guess === secretNumber) {
        displayMessages('🎉 Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //when player guess wrong and lose
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessages(guess > secretNumber ? '📈Too High' : '📉Too Low');
            score--
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessages('💥You Lost the Game');
            document.querySelector('.score').textContent = 0;
        }
    }
}
document.querySelector('.check').addEventListener('click', action)
/* else if (guess > secretNumber) {
     if (score > 1) {
         document.querySelector('.message').textContent = '📈Too High';
         score--
         document.querySelector('.score').textContent = score;
     }
     else {
         document.querySelector('.message').textContent = '💥You Lost the Game'
         document.querySelector('.score').textContent = 0;
     }
 }
 
 else if (guess < secretNumber) {
     if (score > 1) {
         document.querySelector('.message').textContent = '📉Too Low';
         score--;
         document.querySelector('.score').textContent = score;
     }
     else {
         document.querySelector('.message').textContent = '💥You Lost the Game'
         document.querySelector('.score').textContent = 0;
     }
 }
});*/
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && guess > 0 && guess < 30) {
        console.log(e.key)
        action()
    }
})
document.querySelector('.again').addEventListener('click', function () {
    displayMessages('Start Guessing...')
    score = 30;
    secretNumber = Math.trunc(Math.random() * 30) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
});