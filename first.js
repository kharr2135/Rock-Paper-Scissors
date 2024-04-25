
let audio = new Audio("resources/youtube_sXhx9hX58cY_audio.mp3")

//JSON.parse will parse a string back to an object, 
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function scoreReset() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score')
    updateScoreElement()
}

let result = '';
let computerMove = '';

function pickComputerMove() {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber >= 0 && randomNumber < 3) {
        computerMove = 'rock'
    } else if (randomNumber >= 3 && randomNumber < 6) {
        computerMove = 'paper'
    } else if (randomNumber >= 6 && randomNumber < 9) {
        computerMove = 'scissors'
    } 
}

function computerGeneratorRock() { 

    audio.play()

    pickComputerMove();

    if (computerMove === 'rock') {
        result = 'Tie game.';
        document.querySelector('.js-result').innerHTML = result
        document.querySelector('.js-moves').innerHTML = `You <img src='./resources/rock-emoji.png'> <img src="./resources/${computerMove}-emoji.png"> Computer`
    } else if (computerMove === 'scissors') {
        result = 'You win.';
        document.querySelector('.js-result').innerHTML = result
        document.querySelector('.js-moves').innerHTML = `You <img src='./resources/rock-emoji.png'> <img src="./resources/${computerMove}-emoji.png"> Computer`
    }
    else if (computerMove === 'paper') {
        result = 'You lose.';
        document.querySelector('.js-result').innerHTML = result
        document.querySelector('.js-moves').innerHTML = `You <img src='./resources/rock-emoji.png'> <img src="./resources/${computerMove}-emoji.png"> Computer`
        }
    
    if (computerMove === 'paper') {
        score.losses += 1;
    } else if (computerMove === 'rock') {
        score.ties += 1;
    } else if (computerMove === 'scissors') {
        score.wins += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement()
}
function computerGeneratorPaper() { 
    audio.play()
    pickComputerMove();

    if (computerMove === 'rock') {
        result = 'You win.';
        document.querySelector('.js-result').innerHTML = result
        document.querySelector('.js-moves').innerHTML = `You <img src='./resources/paper-emoji.png'> <img src="./resources/${computerMove}-emoji.png"> Computer`
    } else if (computerMove === 'scissors') {
        result = 'You lose.';
        document.querySelector('.js-result').innerHTML = result
        document.querySelector('.js-moves').innerHTML = `You <img src='./resources/paper-emoji.png'> <img src="./resources/${computerMove}-emoji.png"> Computer`
    }
    else if (computerMove === 'paper') {
        result = 'Tie game.';
        document.querySelector('.js-result').innerHTML = result
        document.querySelector('.js-moves').innerHTML = `You <img src='./resources/paper-emoji.png'> <img src="./resources/${computerMove}-emoji.png"> Computer`
        }

    if (computerMove === 'paper') {
        score.ties += 1;
    } else if (computerMove === 'rock') {
        score.wins += 1;
    } else if (computerMove === 'scissors') {
        score.losses += 1;
    }


    //JSON.setItem will update the score object that we had previously declared, both items in parameters have to be string, score is what its called and JSON.stringify is making the score objecet a string
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement()
    
}
function computerGeneratorScissors() { 
    audio.play()
    pickComputerMove();

    if (computerMove === 'rock') {
        result = 'You lose.';
        document.querySelector('.js-result').innerHTML = result
        updateMoves()
    } else if (computerMove === 'scissors') {
        result = 'Tie game.';
        document.querySelector('.js-result').innerHTML = result
        updateMoves()
    }
    else if (computerMove === 'paper') {
        result = 'You win.';
        document.querySelector('.js-result').innerHTML = result
        updateMoves()
        }

    if (computerMove === 'paper') {
        score.wins += 1;
    } else if (computerMove === 'rock') {
        score.losses += 1;
    } else if (computerMove === 'scissors') {
        score.ties += 1;
        
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement()

}
let rock = document.getElementsByClassName('rock')[0];
let paper = document.getElementsByClassName('paper')[0];
let scissors = document.getElementsByClassName('scissors')[0];
let resetScore = document.getElementsByClassName('reset-score')[0];
rock.addEventListener('click', computerGeneratorRock);
paper.addEventListener('click', computerGeneratorPaper);
scissors.addEventListener('click', computerGeneratorScissors);
resetScore.addEventListener('click', scoreReset);


function updateResultElement() {
    document.querySelector('.js-result').innerHTML = result
}

function updateMoves() {
    document.querySelector('.js-moves').innerHTML = `You <img src='./resources/rock-emoji.png'> <img src="./resources/${computerMove}-emoji.png"> Computer`
}

updateScoreElement();
function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = 'Wins: '+ score.wins + ' ' + 'Losses: ' + score.losses + ' ' + 'Ties: ' + score.ties;
}