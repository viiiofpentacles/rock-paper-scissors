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

    if (playerSelection=="rock"&&computerSelection=="paper"){return computerScore++;} 
    else if (playerSelection=="rock"&& computerSelection=="scissors"){return playerScore++;}
    else if (playerSelection=="rock"&&computerSelection=="rock"){return "It's a draw!";}
    else if (playerSelection=="paper"&&computerSelection=="paper"){return "It's a draw!";}
    else if (playerSelection=="paper"&&computerSelection=="scissors"){return computerScore++;}
    else if (playerSelection=="paper"&&computerSelection=="rock"){return playerScore++;}
    else if (playerSelection=="scissors"&&computerSelection=="paper"){return playerScore++;}
    else if (playerSelection=="scissors"&&computerSelection=="scssors"){return "It's a draw!";}
    else if (playerSelection=="scissors"&&computerSelection=="rock"){return computerScore++;}
    else {return "Error! Please try again.";}

}


function game(){

    let i=0;
    for (let i=0; i < 5; i++) {
           playRound(playerSelection, computerSelection);
           if(i==4){
            console.log("Game Over!");
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
            
            if (playerScore>computerScore){
                console.log("You win!")
            } else {
                console.log("You lose!")
            }
        }
    }
}

console.log(game())
   