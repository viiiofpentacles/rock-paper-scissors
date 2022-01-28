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

    if (playerSelection=="rock"&&computerSelection=="paper"){return [computerScore++, console.log("You lose! Paper beats rock.")];} 
    else if (playerSelection=="rock"&& computerSelection=="scissors"){return [playerScore++, console.log("You win! Rock beats scissors.")];}
    else if (playerSelection=="rock"&&computerSelection=="rock"){return console.log("It's a draw!");}
    else if (playerSelection=="paper"&&computerSelection=="paper"){return console.log("It's a draw!");}
    else if (playerSelection=="paper"&&computerSelection=="scissors"){return [computerScore++, console.log("You lose! Scissors beats paper.")];}
    else if (playerSelection=="paper"&&computerSelection=="rock"){return [playerScore++, console.log("You win! Paper beats rock.")];}
    else if (playerSelection=="scissors"&&computerSelection=="paper"){return [playerScore++, console.log("You win! Scissors beats paper.")];}
    else if (playerSelection=="scissors"&&computerSelection=="scssors"){return console.log("It's a draw!");}
    else if (playerSelection=="scissors"&&computerSelection=="rock"){return [computerScore++, console.log("You lose! Rock beats scissors.")];}
    else {return "Error! Please try again.";};

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
   