
const rock_btn = document.querySelector('.rock');
const paper_btn = document.querySelector('.paper');
const scissors_btn = document.querySelector('.scissor');
const print_span = document.getElementById('print_lbl');
const print_player = document.getElementById('player_lbl');
const print_computer = document.getElementById('computer_lbl');
const turn_lbl = document.getElementById('turn')
const player_score = document.getElementById('player_score');
const computer_score = document.getElementById('computer_score');
const container_restart = document.querySelector('.container__restart');
const container_choiceBtns = document.querySelector('.container__gameBtns');
const restart_btn = document.getElementById('restart_btn');

const FAIL = 0;
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const COMPUTER_NAME = 'computer';
const PLAYER_NAME = 'player';

let computerPoints = 0;
let playerPoints = 0;
let userChoice = 0;
let cpt = 0;

const TURN_NB = 5;

rock_btn.addEventListener("click", () => {
    game(++cpt, 1);
})

paper_btn.addEventListener("click", () => {
    game(++cpt, 2);

})

scissors_btn.addEventListener("click", () => {
    game(++cpt, 3);

})

restart_btn.addEventListener('click', () => {
    restartGame();
});

container_restart.style.display = "none";

function game(turn, userChoice) {
  
    if (turn <= TURN_NB) {
        const computeurRandomChoice = Math.floor((Math.random() * 3)) + 1;

        print_player.textContent = getChoiceFromInteger(userChoice);
        print_computer.textContent = getChoiceFromInteger(computeurRandomChoice);

        turn_lbl.textContent = turn;
   
        let winner = getTheTurnWinner(userChoice, computeurRandomChoice);

        printTheWinner(winner, computeurRandomChoice, userChoice);

        incrementPoints(winner, userChoice, computeurRandomChoice);

        if (turn === TURN_NB) {
            printTheGameWinner();
        }
    } 
}

function restartGame() {
    container_choiceBtns.style.display = "flex";
    container_restart.style.display = "none";

    const rock_btn = document.querySelector('.rock');
    const paper_btn = document.querySelector('.paper');
    const scissors_btn = document.querySelector('.scissor');

    let cpt = 0;

    rock_btn.addEventListener("click", () => {
        game(++cpt, 1);
    })

    paper_btn.addEventListener("click", () => {
        game(++cpt, 2);

    })

    scissors_btn.addEventListener("click", () => {
        game(++cpt, 3);

    })
    turn = 0;
    playerPoints = 0;
    computerPoints = 0;
    turn_lbl.textContent = 0;
    computer_score.textContent = 0;
    player_score.textContent = 0;
    print_span.textContent = 'game restarted!';
}



function incrementPoints(winner, p, c) {
    if(p !== c) {
        if (winner === COMPUTER_NAME) {
            computerPoints++;
        } else {
            playerPoints++;
        }
    }
    
    player_score.textContent =  playerPoints;
    computer_score.textContent = computerPoints; 
}

function getTheTurnWinner(p, c) {

    if (p === PAPER && c === ROCK || p === ROCK && c === SCISSORS || p === SCISSORS && c === PAPER) {
        return PLAYER_NAME;
    } else {
        return COMPUTER_NAME;
    }
}


function printTheGameWinner() {
    container_restart.style.display = "flex";
    container_choiceBtns.style.display = "none";

    if (playerPoints > computerPoints) {
        print_span.textContent = `${PLAYER_NAME} won this game with ${playerPoints} points. ${COMPUTER_NAME} loose this game with ${computerPoints} `;
    } else if (playerPoints < computerPoints) {
        print_span.textContent = `${COMPUTER_NAME} won this game with ${computerPoints} points. ${PLAYER_NAME} loose this game with ${playerPoints} `;
    } else {
        print_span.textContent = 'No winner, it is a draw';
    }
}


function printTheWinner(winner, c, p) {
    if (p === c) {
        print_span.textContent = 'draw';
    }
    else if (winner === COMPUTER_NAME) {
        print_span.textContent = `computer win the turn! ${getChoiceFromInteger(c)} won ${getChoiceFromInteger(p)}`;
    } else {
        print_span.textContent = `player win the turn! ${getChoiceFromInteger(p)} won ${getChoiceFromInteger(c)}`;
    }

}

function getChoiceFromInteger(n) {

    const valueAttribution = {
        [FAIL]: 'an error occur',
        [ROCK]: 'rock',
        [PAPER]: 'paper',
        [SCISSORS]: 'scissors'
    }

    return valueAttribution[n];
}