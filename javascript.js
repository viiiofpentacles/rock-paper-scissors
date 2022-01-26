const actions = ["rock", "paper", "scissors"];

function computerPlay(actions){
    
    return actions[Math.floor(Math.random()*actions.length)];
}

function playRound(playerSelection,computerSelection){

    if (playerSelection=="rock"&&computerSelection=="paper"){return "You lose! Paper beats Rock.";} 
    else if (playerSelection=="rock"&& computerSelection=="scissors"){return "You win! Rock beats Scissors";}
    else if (playerSelection=="rock"&&computerSelection=="rock"){return "It's a draw!";}
    else if (playerSelection=="paper"&&computerSelection=="paper"){return "It's a draw!";}
    else if (playerSelection=="paper"&&computerSelection=="scissors"){return "Your lose! Scissors beats Paper.";}
    else if (playerSelection=="paper"&&computerSelection=="rock"){return "You win! Paper beats Rock,";}
    else if (playerSelection=="scissors"&&computerSelection=="paper"){return "You win! Scissors beats paper.";}
    else if (playerSelection=="scissors"&&computerSelection=="scssors"){return "It's a draw!";}
    else if (playerSelection=="scissors"&&computerSelection=="rock"){return "You lose! Rock beats Scissors.";}
    else {return "Error! Please try again.";}
}

let playerSelection = "ROck";

playerSelection = playerSelection.toLowerCase();


const computerSelection = computerPlay(actions);

console.log(computerSelection)
console.log(playRound(playerSelection,computerSelection))