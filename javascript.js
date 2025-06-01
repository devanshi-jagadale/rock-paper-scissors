let humanScore = 0, computerScore = 0, roundCount=0;
const content = document.querySelector("#result");

function getComputerChoice() {
    let number = Math.random();
    if (number <= 1/3) return "rock";
    else if (number <= 2/3) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice) {
    const write = document.createElement("h3");

    if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
        write.textContent = `Round ${roundCount+1} : 
        You win! ${humanChoice[0].toUpperCase()+humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase()+computerChoice.slice(1)}`;
        humanScore++;
        roundCount++;
    } else if (
        (humanChoice == "scissors" && computerChoice == "rock") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "rock" && computerChoice == "paper")
    ) {
        write.textContent = `Round ${roundCount+1} : 
        You lose! ${computerChoice[0].toUpperCase()+computerChoice.slice(1)} beats ${humanChoice[0].toUpperCase()+humanChoice.slice(1)}`;
        computerScore++;
        roundCount++;
    } else {
        write.textContent = `Round ${roundCount+1} : 
        It's a tie! You both chose ${computerChoice[0].toUpperCase()+computerChoice.slice(1)}`;
        roundCount++;
    }

    content.appendChild(write);
    checkWinner();
}

function checkWinner() {
    if (roundCount===5) {
        const finalMsg = document.createElement("h2");
        const finalScore = document.createElement("table");

        if (humanScore > computerScore) {
            console.log("🎉 You won the game! Congrats!");
            finalMsg.textContent=`🎉 You won the game! Congrats!`;
        } else {
            console.log("😞 You lost the game. Better luck next time!");
            finalMsg.textContent = `😞 You lost the game. Better luck next time!`;
        }

        const tableCaption=document.createElement("caption");
        tableCaption.textContent="Final Score";
        finalScore.appendChild(tableCaption);

        const headerRow = document.createElement("tr");
        const playerHeader = document.createElement("th");
        playerHeader.textContent = "You";
        const computerHeader = document.createElement("th");
        computerHeader.textContent = "Computer";
        headerRow.appendChild(playerHeader);
        headerRow.appendChild(computerHeader);
        finalScore.appendChild(headerRow);

        const scoreRow = document.createElement("tr");
        const humanScoreCell = document.createElement("td");
        humanScoreCell.textContent = humanScore;
        const computerScoreCell = document.createElement("td");
        computerScoreCell.textContent = computerScore;
        scoreRow.appendChild(humanScoreCell);
        scoreRow.appendChild(computerScoreCell);
        finalScore.appendChild(scoreRow);
        

        content.appendChild(finalMsg);
        content.appendChild(finalScore);

        // Disable buttons
        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }
}

// Event listeners
document.querySelector("#rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.querySelector("#paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));
