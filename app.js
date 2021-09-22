
const FAIL = 0;
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const COMPUTER_NAME = 'computer';
const PLAYER_NAME = 'player';
const TURN_NB = 5;
computerPoints = 0;
playerPoints = 0;


//game boucle
for(let i = 1; i <= TURN_NB; i++) {
    game(i);
}


function game(turn) {
    
    const computeurRandomChoice = Math.floor((Math.random() * 3)) + 1;

    let playerInput = prompt('Rock, Paper or Scissors?').toLocaleLowerCase().trim();

    if (playerInput !== null) {
        let winner = getTheTurnWinner(getPlayerChoice(playerInput), computeurRandomChoice);

        printTheWinner(winner, computeurRandomChoice, getPlayerChoice(playerInput));

        incrementPoints(winner);

        if(turn === TURN_NB) {
            printTheGameWinner();
        }
        
        console.log('turn : ', turn);
        console.log('player :', playerPoints);
        console.log('computer :', computerPoints);
    } 
}

/**
 * a function to manage 
 * @param {} winner 
 */
function incrementPoints(winner) {
    if(winner !== null) {
        if(winner === COMPUTER_NAME) {
            computerPoints++; 
        } else {
            playerPoints++;
        }
    }
}

function getTheTurnWinner (p, c) {
    if ( p === c ) {
        console.log('draw');
        return null;
    } else if ( p === PAPER && c === ROCK || p === ROCK && c === SCISSORS || p === SCISSORS && c === PAPER ) {
        return PLAYER_NAME;
    } else {
        return COMPUTER_NAME;
    }
}


function printTheGameWinner() {
    if(playerPoints > computerPoints) {
        console.log(`${PLAYER_NAME} won this game with ${playerPoints} points. ${COMPUTER_NAME} loose this game with ${computerPoints} `);
    } else if (playerPoints < computerPoints){
        console.log(`${COMPUTER_NAME} won this game with ${computerPoints} points. ${PLAYER_NAME} loose this game with ${playerPoints} `);
    } else {
        console.log('No winner, it is a draw');
    }
}


function printTheWinner(winner, c, p) {
    if(winner !== null) {
        if (winner === COMPUTER_NAME) {
            console.log(`computer win the turn! ${getChoiceFromInteger(c)} won ${getChoiceFromInteger(p)}`) 
        } else {
            console.log(`player win the turn! ${getChoiceFromInteger(p)} won ${getChoiceFromInteger(c)}`);
        } 
    }
}

/**
 * @param {*} n 
 * @returns 
 */
function getChoiceFromInteger(n){
    
    const valueAttribution = {
        [FAIL]: 'an error occur',
        [ROCK]: 'rock',
        [PAPER]: 'paper',
        [SCISSORS]: 'scissors'
    }
    return valueAttribution[n];
}

/**
 * Convert the input from the user to an integer who represents the right objet of the game
 * @param {*} input 
 * @returns int
 */
function getPlayerChoice(input) {
    const rockWords = ['rock', 'r', 'rok', 'roc', 'pierre', 'stone', 'ston', 'ro', '1', 'rck', 'sto'];
    const paperWords = ['paper', 'p', 'pap', 'sheet', '2', 'pa', 'poper', 'piper', 'psper'];
    const scissorsWords = ['scissors', 'scissor', 'scisso', 'sissor', 'siso', 's', '3', 'sisccor', 'scis'];
    let numberAction = FAIL;

    rockWords.forEach(e => {
        if(input === e) 
          numberAction = ROCK;
          return;
    });

    if(numberAction === FAIL) {
        paperWords.forEach(e => {
            if(input === e) 
              numberAction = PAPER;
              return;
        });
    }
    
    if(numberAction === FAIL) {
        scissorsWords.forEach(e => {
            if(input === e) 
              numberAction = SCISSORS;
              return;
        });
    }

    return numberAction;
}