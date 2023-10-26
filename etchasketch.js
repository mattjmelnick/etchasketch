let gridContainer = document.querySelector(".grid-container");
let changeSquaresButton = document.querySelector(".change-squares-button");
changeSquaresButton.addEventListener("click", clickButton);

function getNumberOfSquares() {
    let numberOfSquares = prompt("Enter a number between 1-100:");
    if (numberOfSquares < 1 || numberOfSquares > 100 || isNaN(Number(numberOfSquares))) {
        getNumberOfSquares();
    }
    else {
        return numberOfSquares;
    }
}

function clickButton() {
    let number = Number(getNumberOfSquares());
    let totalNumber = number * number;
    let gridSquareHeightWidth = (644 / number - 2);
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    for (let i = 0; i < totalNumber; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.toggle("grid-square");
    gridSquare.style.backgroundColor = "white";
    gridSquare.style.border = "1px solid lightgray";
    gridSquare.style.height = `${gridSquareHeightWidth}px`;
    gridSquare.style.width = `${gridSquareHeightWidth}px`;
    gridContainer.appendChild(gridSquare);
    }
    let grid = Array.from(document.querySelectorAll(".grid-square"));
    for (const square of grid) {
    square.addEventListener("mouseover", function() {square.style.backgroundColor = "black"})}
}