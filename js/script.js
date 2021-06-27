import * as variable from './exports/variables.js';
let tour = 0;

variable.rock.addEventListener(('click'), () => {
    let score = game(variable.rock.textContent);
    variable.winner.textContent = score;
});

variable.paper.addEventListener(('click'), () => {
    let score = game(variable.paper.textContent);
    variable.winner.textContent = score;
});

variable.scissors.addEventListener(('click'), () => {
    let score = game(variable.scissors.textContent)
    variable.winner.textContent = score;
});

variable.replay.addEventListener(('click'), () => {
    location.reload();
});

let computerPlay = () => {
    return variable.possibilites[Math.floor(Math.random() * variable.possibilites.length)];
};

let playRound = (playerSelection, computerSelection) => {
    let winnerSentence = '';
    playerSelection = playerSelection.toString().toUpperCase();
    computerSelection = computerSelection.toString().toUpperCase();

    switch (true) {
        case playerSelection === computerSelection:
            winnerSentence = `Your selection is equals to computer.`;
            break;
        case playerSelection === variable.possibilites[0]:
            winnerSentence = computerSelection === variable.possibilites[1] ? `You loose ! ${computerSelection} beats ${playerSelection}` : `You win ! ${playerSelection} beats ${computerSelection}.`;
            break;
        case playerSelection === variable.possibilites[1]:
            winnerSentence = computerSelection === variable.possibilites[0] ? `You win ! ${playerSelection} beats ${computerSelection}` : `You loose ! ${computerSelection} beats ${playerSelection}.`;
            break;
        case playerSelection === variable.possibilites[2]:
            winnerSentence = computerSelection === variable.possibilites[0] ? `You loose ! ${computerSelection} beats ${playerSelection}` : `You win ! ${playerSelection} beats ${computerSelection}.`;
            break;
    }
    return winnerSentence;
};

let game = (playerSelection) => {

    if (tour < 5) {
        let result = playRound(playerSelection, computerPlay());

        if (result.includes('You win')) {
            variable.playerScore.push(1);
            variable.player.textContent = variable.playerScore.length;
            tour++;
            variable.tour.textContent = tour;
        } else {
            variable.computerScore.push(1);
            variable.computer.textContent = variable.computerScore.length;
            tour++;
            variable.tour.textContent = tour;
        }
    } else {
        variable.replay.style.display = 'block';
        variable.buttons.style.display = 'none';
        return variable.playerScore.length > variable.computerScore.length ? `The winner is Player !` : 
        variable.playerScore.length === variable.computerScore.length ? `Nobody won ...` : 
        `The winner is Computer !`;
    }
};