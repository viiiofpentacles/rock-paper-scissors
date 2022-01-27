const actions = ["rock", "paper", "scissors"];

function computerPlay(actions){
    
    return actions[Math.floor(Math.random()*actions.length)];
}


let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection,computerSelection){

    playerSelection = window.prompt("Type rock, paper, or scissors.");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay(actions);

    if (playerSelection=="rock"&&computerSelection=="paper"){return "You lose! Paper beats Rock.";} 
    else if (playerSelection=="rock"&& computerSelection=="scissors"){return "You win! Rock beats Scissors";}
    else if (playerSelection=="rock"&&computerSelection=="rock"){return "It's a draw!";}
    else if (playerSelection=="paper"&&computerSelection=="paper"){return "It's a draw!";}
    else if (playerSelection=="paper"&&computerSelection=="scissors"){return "Your lose! Scissors beats Paper.";}
    else if (playerSelection=="paper"&&computerSelection=="rock"){return "You win! Paper beats Rock.";}
    else if (playerSelection=="scissors"&&computerSelection=="paper"){return "You win! Scissors beats paper.";}
    else if (playerSelection=="scissors"&&computerSelection=="scssors"){return "It's a draw!";}
    else if (playerSelection=="scissors"&&computerSelection=="rock"){return "You lose! Rock beats Scissors.";}
    else {return "Error! Please try again.";}

}


function game(){

    let i=0;
    for (let i=0; i < 5; i++) {
           console.log(playRound(playerSelection, computerSelection));
           if(i==4){
            console.log("Game Over!");
        }
    }
}

console.log(game())
   