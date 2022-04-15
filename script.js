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
//Compare the user pick and computer pick, determine who wins.
