function random(number) {
    return Math.floor(Math.random()*number);
}

function computerPlay(){
    let choiceNum = random(3);
    let choice = "";
    switch(choiceNum){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    
    return choice;
}



function playRound(playerChoice, computerChoice)
{
    if(playerChoice === computerChoice)
    {
        return "It's a tie!";
    }
    else if(playerChoice === "rock")
    {
        if(computerChoice === "paper")
        {
            return "You lose! Paper beats rock.";
        }
        else
        {
            return "You win! Rock beats scissors.";
        }
    }
    else if(playerChoice === "paper"){
        if(computerChoice === "scissors")
        {
            return "You lose! Scissors beats paper.";
        }
        else
        {
            return "You win! Paper beats rock.";
        }
    }
    else if(playerChoice === "scissors"){
        if(computerChoice === "rock")
        {
            return "You lose! Rock beats scissors.";
        }
        else
        {
            return "You win! Scissors beats paper.";
        }
    }
}


async function game(playerChoice){
    const winningScore = 5;
    let result = "";
    result = await playRound(playerChoice, computerPlay());
    if(result === "You win! Rock beats scissors.")
    {
        playerScore++;
    }
    else if(result === "You win! Paper beats rock.")
    {
        playerScore++;
    }
    else if(result === "You win! Scissors beats paper.")
    {
        playerScore++;
    }
    else if(result === "You lose! Paper beats rock.")
    {
        computerScore++;
    }
    else if(result === "You lose! Scissors beats paper.")
    {
        computerScore++;
    }
    else if(result === "You lose! Rock beats scissors.")
    {
        computerScore++;
    }
    
    scoreBoard.textContent = "Player: " + playerScore + " Computer: " + computerScore;  
    console.log(playerScore, computerScore);
    
    if(playerScore > computerScore && playerScore === winningScore)
    {
        resultDisplay.textContent = "You win!";
        playerScore = 0;
        computerScore = 0;
    }
    else if(playerScore < computerScore && computerScore === winningScore)
    {
        resultDisplay.textContent = "You lose!";
        playerScore = 0;
        computerScore = 0;
    }
    else if(playerScore === computerScore && playerScore === winningScore)
    {
        resultDisplay.textContent = "It's a tie!";
        playerScore = 0;
        computerScore = 0;
    }

}


const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");
const scoreBoard = document.querySelector("#Score");
const resultDisplay = document.querySelector("#Result");
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {game("rock");});
paperBtn.addEventListener("click", () =>{game("paper");});
scissorsBtn.addEventListener("click", () =>{game("scissors");});



