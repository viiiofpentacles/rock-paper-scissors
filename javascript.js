const actions = ["rock", "paper", "scissors"];

function computerPlay(actions){
    
    return actions[Math.floor(Math.random()*actions.length)];
}


let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection,computerSelection){

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

const buttonContainer = document.querySelector('#buttonContainer');

const rockButton = document.createElement('button');
    rockButton.textContent='Rock';
    rockButton.addEventListener('click',() => {
        playerSelection="rock";
        playRound();
    });

buttonContainer.appendChild(rockButton);

const paperButton = document.createElement('button');
    paperButton.textContent='Paper';
    paperButton.addEventListener('click',() => {
        playerSelection="paper";
        playRound();
    });

buttonContainer.appendChild(paperButton);

const scissorsButton = document.createElement('button');
    scissorsButton.textContent='Scissors';
    scissorsButton.addEventListener('click',() => {
        playerSelection="scissors";
        playRound();
    });

buttonContainer.appendChild(scissorsButton);


