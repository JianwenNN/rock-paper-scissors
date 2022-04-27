//Computer generate a random number, correspond to rock, scissor, paper.
function computerPlay() {
    let rand = Math.floor(Math.random()*3);
    switch(rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

//Compare the user pick and computer pick, determine who wins, and log it in history
let round = 1;
const history = document.getElementById('history');

function playRound(playerSelection, computerSelection) {
    
    const compare = {
        rock: {weakTo: 'paper', strongTo: 'scissors'},
        paper: {weakTo: 'scissors', strongTo: 'rock'},
        scissors: {weekTo: 'rock', strongTo: 'paper'},
    }

    if(compare[playerSelection].weakTo === computerSelection) {
        history.innerHTML += `Round ${round}: You Lose! ${computerSelection} beats ${playerSelection}!<br>`;
        round++;
        return "lose";
    }

    else if(compare[playerSelection].strongTo === computerSelection) {
        history.innerHTML += `Round ${round}: You WIN! ${playerSelection} beats ${computerSelection}!<br>`;
        round++;
        return "win";
    }

    else {
        history.innerHTML += `Round ${round}: Tie!<br>`;
        round++;
        return "tie";
    }
    
}

//Reset function

const reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    i = 0;
    round = 1;
    displayPlayer.innerHTML = 'Player Score: 0';
    displayComputer.innerHTML = 'Computer Score: 0';
    history.innerHTML = 'History: <br>';
    buttons.forEach(button => button.addEventListener('click', game));
    result.innerHTML = '';
    result.removeAttribute('id');
    playerScore = 0;
    computerScore = 0;
})

//Play 5 rounds game.
let i = 0;
let playerScore = 0;
let computerScore = 0;
const displayPlayer = document.getElementById('playerScore');
const displayComputer = document.getElementById('computerScore');
const result = document.createElement('div');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game));

function game(e) {

        let playerSelection = e.target.id;
        let computerSelection = computerPlay();

        let outcome = playRound(playerSelection, computerSelection);
        switch(outcome) {
            case "win":
                playerScore++;
                break;
            case "lose":
                computerScore++;
                break;
            case "tie":
                break;
        }

        displayPlayer.innerHTML = `Player Score: ${playerScore}`;
        displayComputer.innerHTML = `Computer Score: ${computerScore}`;
        i++;
        if (i == 5) {
            const winner = playerScore > computerScore?"Player won!":
            playerScore == computerScore?"Tie!":"Computer won!";
            result.setAttribute('id', 'result');
            result.innerHTML = winner;
            document.body.appendChild(result);
            buttons.forEach(button => button.removeEventListener('click', game));
        }
        
}

