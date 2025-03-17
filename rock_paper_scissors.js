//PSEUDECODE

// Initilize game variables
// Get querySelector step by step
// Get computerChoice
// Determine a winner
// Play a round
// Five rounds game
// Disable buttons
// Restart game button
// Add event listeners

let playerScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];
let result;
let secondResult;

const resultDisplay = document.querySelector("#choice-result");
const secondResultDisplay = document.querySelector("#second-result");
const computerDisplay = document.querySelector("#computerScore");
const playerDisplay = document.querySelector("#playerScore");
const finalResult = document.querySelector("#final-result");


const computer = function(){
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
};

const disableGame = function(){
    buttonOptions.forEach((button)=> button.disabled = true);
}

const score = function(){
        if(result == "YOU WIN!"){
            playerScore ++;
        }
        else if(result = "YOU LOSE!"){
            computerScore ++;
        }
        else if(result == "IT IS A TIE!"){
            if(playerScore === 4 && computerScore === 4){
                return;
            }
            else{
                playerScore++;
                computerScore++;
            }
        }

    playerDisplay.textContent = `PLAYER SCORE: ${playerScore}`;
    computerDisplay.textContent = `COMPUTER SCORE: ${computerScore}`;

    if (playerScore === 5 && computerScore < 5){
        finalResult.textContent = `CONGRATULATIONS! YOU WON THE GAME!`;
        disableGame();
    } else if (computerScore === 5 && playerScore < 5){
        finalResult.textContent = `SORRY! YOU LOST THIS ONE!`;
        disableGame();
    }
};



const isWinner = function(playerChoice){
    let computerChoice = computer();
    if(playerChoice === computerChoice){
        result = `IT IS A TIE!`;
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }   
    
    if(playerChoice === computerChoice){
        secondResult = `BOTH CHOOSE ${playerChoice.toUpperCase()}`;
    }
    else{
        switch(playerChoice){
            case "rock":
                secondResult =(computerChoice === "scissors") ? `${playerChoice.toUpperCase()} BEATS ${computerChoice.toUpperCase()}` : `${computerChoice.toUpperCase()} BEATS ${playerChoice.toUpperCase()}`;
                break;
            case "paper":
                secondResult = (computerChoice === "rock") ? `${playerChoice.toUpperCase()} BEATS ${computerChoice.toUpperCase()}` : `${computerChoice.toUpperCase()} BEATS ${playerChoice.toUpperCase()}`;
                break;
            case "scissors":
                secondResult = (computerChoice === "paper") ? `${playerChoice.toUpperCase()} BEATS ${computerChoice.toUpperCase()}` : `${computerChoice.toUpperCase()} BEATS ${playerChoice.toUpperCase()}`;
        }
    }
    




    resultDisplay.textContent = result;
    secondResultDisplay.textContent = secondResult;
    score();
};


const restartGame = function(){
    playerScore = 0;
    computerScore = 0;
    playerDisplay.textContent = `PLAYER SCORE: 0`;
    computerDisplay.textContent = `COMPUTER SCORE: 0`;
    finalResult.textContent = "";
    resultDisplay.textContent = "";
    secondResultDisplay.textContent = "";

    buttonOptions.forEach((button)=> button.disabled = false);
};

const restart = document.querySelector("#restart");
restart.addEventListener("click", restartGame);


const buttonOptions = document.querySelectorAll("#choices button")
buttonOptions.forEach((button)=>{
    button.addEventListener("click", function(){
        let playerChoice = this.id;
        isWinner(playerChoice);
    })
});

















