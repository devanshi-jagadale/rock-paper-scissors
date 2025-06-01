function getComputerChoice()
{
    let number=Math.random();
    let retval;

    if(number<=(1/3))
        retval="rock";
    else if(number>=(1/3) && number<=(2/3))
        retval="paper";
    else
        retval="scissors";
    
    return retval;
}

function getHumanChoice() 
{
    let choice = prompt("Enter your choice (rock, paper, or scissors):");
    return choice;
}

let humanScore=0,computerScore=0;

function playRound(humanChoice,computerChoice)
{
    humanChoice=humanChoice.toLowerCase();
    if((humanChoice=="rock" && computerChoice=="scissor") ||
        (humanChoice=="scissor" && computerChoice=="paper") ||
        (humanChoice=="paper" && computerChoice=="rock"))
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if((humanChoice=="scissor" && computerChoice=="rock") ||
        (humanChoice=="paper" && computerChoice=="scissor") ||
        (humanChoice=="rock" && computerChoice=="paper"))
    {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else
        console.log(`It's a tie! You both chose ${humanChoice}`);
}

function playGame()
{
    for(let i=0;i<5;i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final Score — You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("🎉 You won the game! Congrats!");
    } else if (computerScore > humanScore) {
        console.log("😞 You lost the game. Better luck next time!");
    } else {
        console.log("It's a tie game! Well played!");
    }
}

playGame();