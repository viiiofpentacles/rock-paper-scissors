const actions = ["rock", "paper", "scissors"];

function computerPlay(actions){
    
    return actions[Math.floor(Math.random()*actions.length)];
}


let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

const resultsDisplay = document.querySelector('#resultsDisplay');
const runningScore = document.querySelector('#runningScore');
    const playerRunningScore = document.createElement('div');
    runningScore.appendChild(playerRunningScore);
    const computerRunningScore= document.createElement('div');
    runningScore.appendChild(computerRunningScore);

const finalScore = document.querySelector('#finalScore');

function playRound(playerSelection,computerSelection){

    computerSelection = computerPlay(actions);

    if (playerSelection=="rock"&&computerSelection=="paper"){results= [computerScore++, "You lose! Paper beats rock."];} 
    else if (playerSelection=="rock"&& computerSelection=="scissors"){results= [playerScore++, "You win! Rock beats scissors."];}
    else if (playerSelection=="rock"&&computerSelection=="rock"){results= [ ,"It's a draw!"];}
    else if (playerSelection=="paper"&&computerSelection=="paper"){results= [ ,"It's a draw!"];}
    else if (playerSelection=="paper"&&computerSelection=="scissors"){results= [computerScore++, "You lose! Scissors beats paper."];}
    else if (playerSelection=="paper"&&computerSelection=="rock"){results= [playerScore++, "You win! Paper beats rock."];}
    else if (playerSelection=="scissors"&&computerSelection=="paper"){results= [playerScore++, "You win! Scissors beats paper."];}
    else if (playerSelection=="scissors"&&computerSelection=="scssors"){results= [ ,"It's a draw!"];}
    else if (playerSelection=="scissors"&&computerSelection=="rock"){results= [computerScore++, "You lose! Rock beats scissors."];}
    else {results= [ ,"Error! Please try again."];};
    
    resultsDisplay.textContent=results[1];
    playerRunningScore.textContent=`Player: ${playerScore}`;
    computerRunningScore.textContent=`Computer: ${computerScore}`;
    
    if(playerScore == 5 || computerScore == 5){
        if(playerScore>computerScore){
            finalScore.textContent= "You win!";
        }else if(computerScore>playerScore){
            finalScore.textContent="You lose!";
        }else{finalScore.textContent="Error! Please refresh the browser to try again.";
    }
}

}

const buttonContainer = document.querySelector('#buttonContainer');

const rockButton = document.createElement('button');
    rockButton.textContent='Rock';
    rockButton.addEventListener('click',() => {
        playRound("rock",computerSelection);
    });

buttonContainer.appendChild(rockButton);

const paperButton = document.createElement('button');
    paperButton.textContent='Paper';
    paperButton.addEventListener('click',() => {
        playRound("paper",computerSelection);
    });

buttonContainer.appendChild(paperButton);

const scissorsButton = document.createElement('button');
    scissorsButton.textContent='Scissors';
    scissorsButton.addEventListener('click',() => {
        playRound("scissors",computerSelection);
    });

buttonContainer.appendChild(scissorsButton);


        
    

    
        
