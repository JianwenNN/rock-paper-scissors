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

console.log(computerPlay());
//User pick rock, scissor or paper.
    //--Prompt to ask user to enter rock, scissor or paper.
    //--Convert player's selection to lowercase to enable comparison.

//Compare the user pick and computer pick, determine who wins.
function playRound(playerSelection, computerSelection) {
    const compare = {
        rock: {weakTo: 'paper', strongTo: 'scissors'},
        paper: {weakTo: 'scissors', strongTo: 'rock'},
        scissors: {weekTo: 'rock', strongTo: 'paper'}
    }

    if(compare[playerSelection].weakTo === computerSelection) {
        alert(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    }

    else if(compare[playerSelection].strongTo === computerSelection) {
        alert(`You WIN! ${playerSelection} beats ${computerSelection}!`)
    }

    else {
        alert("Tie!!");
    }
}

