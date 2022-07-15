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
    console.log("Bot chooses: " + choice);
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


function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice = "";
    let computerChoice = "";
    let result = "";
    for(let i = 0; i < 5; i++)
    {
        playerChoice = prompt("Rock, paper, or scissors?");
        computerChoice = computerPlay();
        result = playRound(playerChoice, computerChoice);
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
        else if(result === "It's a tie!")
        {
            continue;
        }
        console.log(result);
    }
    if(playerScore > computerScore)
    {
        return "You win!";
    }
    else if(playerScore < computerScore)
    {
        return "You lose!";
    }
    else
    {
        return "It's a tie!";
    }
}

const playerChoice = "rock";
console.log("Player chooses: " + playerChoice);
const computerChoice = computerPlay();
console.log(playRound(playerChoice, computerChoice));