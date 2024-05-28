gameDetails = document.querySelector("#game-details-top")
xScoreUI = document.querySelector("#x-score")
oScoreUI = document.querySelector("#o-score")
gameGrid = document.querySelector("#game-grid-container")
cellsArray = document.querySelectorAll(".cell")
newGameButton = document.querySelector("#new-game-button")
//Switching to default state
let currentPlayer;
let positionArray;
let xScore = 0;
let oScore = 0;

initialiseGame();

function initialiseGame() {
    currentPlayer = "X";
    positionArray = ["", "", "", "", "", "", "", "", ""]
    gameDetails.textContent = `Current Player - ${currentPlayer}`
    xScoreUI.textContent = `X - ${xScore}`
    oScoreUI.textContent = `O - ${oScore}`
    cellsArray.forEach(element => {
        element.textContent = "";
        element.style.pointerEvents = "auto";
        element.classList.remove("winning-cell")
    });
    newGameButton.classList.remove("show")


}

//Getting all cells and updating UI and Logic to see which cells are filled by whom. 

cellsArray.forEach((cell, index) =>
    cell.addEventListener("click", () => {
        positionArray[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.style.pointerEvents = "none"; //making clicked cell unclickable.
        currentPlayerSwitcher()
        winnerChecker()
        console.log(positionArray);

    })
)


//Switching current player and updating on UI.
function currentPlayerSwitcher() {
    if (currentPlayer == 'X')
        currentPlayer = "O"
    else
        currentPlayer = "X"
    gameDetails.textContent = `Current Player - ${currentPlayer}`
}


const winningPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function winnerChecker() {
    let winner = "";
    winningPositions.forEach(wposition => {
        if (positionArray[wposition[0]] !== "" && positionArray[wposition[1]] !== "" && positionArray[wposition[2]] !== "")
            if (positionArray[wposition[0]] === "X" && positionArray[wposition[1]] === "X" && positionArray[wposition[2]] === "X") {
                winner = "X"
                finalState(winner)
                cellsArray[wposition[0]].classList.add("winning-cell")
                cellsArray[wposition[1]].classList.add("winning-cell")
                cellsArray[wposition[2]].classList.add("winning-cell")
            }
            else if (positionArray[wposition[0]] === "O" && positionArray[wposition[1]] === "O" && positionArray[wposition[2]] === "O") {
                winner = "O"
                finalState(winner)
                cellsArray[wposition[0]].classList.add("winning-cell")
                cellsArray[wposition[1]].classList.add("winning-cell")
                cellsArray[wposition[2]].classList.add("winning-cell")
            }
    })
    let filledCells = 0;
    // checking if game tied.
    positionArray.forEach((position) => {
        if (position !== "")
            filledCells++;

        if (filledCells === 9 && winner === "")
            finalState("tied")
    })

}

//Shows the winner
function finalState(winner) {
    if (winner === "X") {
        gameDetails.textContent = `Winner - X`
        xScore++;
        xScoreUI.textContent = `X - ${xScore}`
    }
    else if (winner === "O") {
        gameDetails.textContent = `Winner - O`
        oScore++;
        oScoreUI.textContent = `O - ${oScore}`
    }
    else if (winner === "tied")
        gameDetails.textContent = "Game Tied"

    //making all cells unclickable
    cellsArray.forEach(element => {
        element.style.pointerEvents = "none";
    });

    newGameButton.classList.add("show")

    newGameButton.addEventListener("click", () => {
        initialiseGame()
        // flip Animation on grid 
        gameGrid.classList.remove('flip'); // reset animation
        void gameGrid.offsetWidth; // trigger reflow
        gameGrid.classList.add('flip'); // start animation
    })
}



