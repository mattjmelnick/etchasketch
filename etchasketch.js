let gridContainer = document.querySelector(".grid-container");
let changeSquaresButton = document.querySelector(".change-squares-button");
changeSquaresButton.addEventListener("click", clickButton);

function clickButton() {
    // Prompt for number of squares per side
    let numberOfSquares = prompt("Enter a number between 1-100:");
    if (numberOfSquares < 1 || numberOfSquares > 100 || isNaN(Number(numberOfSquares))) {
        clickButton();
    }
    else {
    // Calculate the number of squares to add to the grid
    let number = Number(numberOfSquares);
    let totalNumber = number * number;
    // Subtract 2 to account for the border around the square
    let gridSquareHeightWidth = (650 / number - 2);
    // Reset the grid after selecting a new number
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    // Create squares based on selected number
    for (let i = 0; i < totalNumber; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.toggle("grid-square");
    gridSquare.style.backgroundColor = "white";
    gridSquare.style.border = "1px solid lightgray";
    gridSquare.style.height = `${gridSquareHeightWidth}px`;
    gridSquare.style.width = `${gridSquareHeightWidth}px`;
    gridContainer.appendChild(gridSquare);
    }
    // Iterate through the squares and add the hover effect to change the color
    let grid = Array.from(document.querySelectorAll(".grid-square"));
    for (const square of grid) {
    square.addEventListener("mouseover", function() {square.style.backgroundColor = "black"})
    }
    }
}