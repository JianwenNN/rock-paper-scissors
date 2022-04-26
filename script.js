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

let round = 1;

//Compare the user pick and computer pick, determine who wins.
function playRound(playerSelection, computerSelection) {
    const history = document.getElementById('history');
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

const buttons = document.querySelectorAll('button');
//Play 5 rounds game.
let i = 0;
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener('click', game));
        
function game(e) {
    
        let playerSelection = e.target.id;
        let computerSelection = computerPlay();
        const displayPlayer = document.getElementById('playerScore');
        const displayComputer = document.getElementById('computerScore');

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
            const result = document.createElement('div');
            result.innerHTML = winner;
            document.body.appendChild(result);
            buttons.forEach(button => button.removeEventListener('click', game));
        }
        
}

