
// selecting id's to build interactivity -- GAME --1st step

const buttons = document.querySelectorAll('button');

const resultEl = document.getElementById('result');

const userScore = document.getElementById('user-score');

const computerScore = document.getElementById('computer-score');
 //------


let playerScores = 0;
let computerScores  = 0;

// user choice fn -2nd step

buttons.forEach((button) => {
    button.addEventListener('click',() => {
       const result=playGame(button.id,computerChoice());//(button.id,computerChoice());
      resultEl.innerText =result;
    });
})

// computer choice -3rd step

function computerChoice () {
    const choices = ['rock','paper','scissor'];
    const randomChoices = Math.floor(Math.random()*choices.length);
    return choices[randomChoices];
}

// playing game -4th step 

function playGame(user,computer) {
    if(user === computer) {
        return 'Tie';
    } 
    else if ( (user==='rock' && computer === 'scissor')  ||
    (user === 'paper' && computer === 'rock') || 
    (user === 'scissor' && computer === 'paper')
)
{
  playerScores++;
    userScore.textContent=playerScores;
return 'you won ' + user + ' beats ' + computer;
}
else {
    computerScores++;
    computerScore.textContent=computerScores;
    return 'you lose ' + user + ' beats ' +computer;
}
}
