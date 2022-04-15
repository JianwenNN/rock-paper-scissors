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

//User pick rock, scissor or paper.
    //--Prompt to ask user to enter rock, scissor or paper.
    //--Convert player's selection to lowercase to enable comparison.
function playerPlay() {
    return (prompt(`Please enter your choice:`, `rock`)).toLowerCase();
}

//Compare the user pick and computer pick, determine who wins.
function playRound(playerSelection, computerSelection) {
    const compare = {
        rock: {weakTo: 'paper', strongTo: 'scissors'},
        paper: {weakTo: 'scissors', strongTo: 'rock'},
        scissors: {weekTo: 'rock', strongTo: 'paper'},
    }

    if(compare[playerSelection].weakTo === computerSelection) {
        alert(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        return "lose";
    }

    else if(compare[playerSelection].strongTo === computerSelection) {
        alert(`You WIN! ${playerSelection} beats ${computerSelection}!`)
        return "win";
    }

    else {
        alert("Tie!!");
        return "tie";
    }
}

//Play 5 rounds game.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
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
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    }
    const winner = playerScore > computerScore?"Player won!":"Computer won!";
    console.log(winner);
}

game();