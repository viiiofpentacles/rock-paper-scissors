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
    else if (playerSelection=="rock"&&computerSelection=="rock"){results= [ ,"It's a draw! Please try again."];}
    else if (playerSelection=="paper"&&computerSelection=="paper"){results= [ ,"It's a draw! Please try again."];}
    else if (playerSelection=="paper"&&computerSelection=="scissors"){results= [computerScore++, "You lose! Scissors beats paper."];}
    else if (playerSelection=="paper"&&computerSelection=="rock"){results= [playerScore++, "You win! Paper beats rock."];}
    else if (playerSelection=="scissors"&&computerSelection=="paper"){results= [playerScore++, "You win! Scissors beats paper."];}
    else if (playerSelection=="scissors"&&computerSelection=="scissors"){results= [ ,"It's a draw! Please try again."];}
    else if (playerSelection=="scissors"&&computerSelection=="rock"){results= [computerScore++, "You lose! Rock beats scissors."];}
    else {results= [ ,"Error! Please try again."];};
    
    resultsDisplay.textContent=results[1];
    playerRunningScore.textContent=`Player: ${playerScore}`;
    computerRunningScore.textContent=`Computer: ${computerScore}`;
    console.log(results)
    
    if(playerScore == 5 || computerScore == 5){
        if(playerScore>computerScore&&(playerScore<=5||computerScore<=5)){
            finalScore.textContent= "You win! Refresh the browser to try again.";
            rockButton.disabled=true;
            paperButton.disabled=true;
            scissorsButton.disabled=true;
        }else if(computerScore>playerScore&&(playerScore<=5||computerScore<=5)){
            finalScore.textContent="You lose! Refresh the browser to try again.";
            buttonContainer.childNodes.disabled=true;
            rockButton.disabled=true;
            paperButton.disabled=true;
            scissorsButton.disabled=true;
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


        
const body = document.querySelector('body');
    body.style.display='flex';
    body.style.flexDirection='column';
    body.style.justifyContent='center';
    body.style.alignItems='center';
    body.style.padding='10px';
    body.style.backgroundColor= '#CCA283';

   
rockButton.style.margin = '8px';
rockButton.style.backgroundColor='#EAD9CD'
rockButton.style.color='#685343';
rockButton.style.fontWeight = 'bold';
rockButton.style.borderRadius ='6px';
paperButton.style.margin = '8px';
paperButton.style.backgroundColor='#EAD9CD'
paperButton.style.color='#685343';
paperButton.style.borderRadius ='6px';
paperButton.style.fontWeight = 'bold';
scissorsButton.style.margin = '8px';
scissorsButton.style.backgroundColor='#EAD9CD'
scissorsButton.style.color='#685343';
scissorsButton.style.borderRadius ='6px';
scissorsButton.style.fontWeight = 'bold';

