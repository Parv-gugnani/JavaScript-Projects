// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const cells = document.querySelectorAll(".cell");
  let currentPlayer = "X";
  let gameOver = false;

  // Add event listeners to each cell
  cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  function handleCellClick(e) {
    if (gameOver) return;

    const cell = e.target;
    if (cell.textContent !== "") return;

    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWin()) {
      endGame(`${currentPlayer} wins!`);
    } else if (checkDraw()) {
      endGame("It's a draw!");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }

  function checkWin() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    return winningCombos.some((combo) => {
      const [a, b, c] = combo;
      return (
        cells[a].textContent === currentPlayer &&
        cells[b].textContent === currentPlayer &&
        cells[c].textContent === currentPlayer
      );
    });
  }

  function checkDraw() {
    return Array.from(cells).every((cell) => cell.textContent !== "");
  }

  function endGame(message) {
    gameOver = true;
    alert(message);
  }
});

//reset buttons
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);

function resetGame() {
  currentPlayer = "X";
  gameOver = false;

  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("X", "O");
  });
}

let playerXScore = 0;
let playerOScore = 0;
const playerXScoreElement = document.getElementById("playerXScore");
const playerOScoreElement = document.getElementById("playerOScore");

function endGame(message) {
  gameOver = true;
  alert(message);

  if (currentPlayer === "X") {
    playerXScore++;
    playerXScoreElement.textContent = `Player X: ${playerXScore}`;
  } else {
    playerOScore++;
    playerOScoreElement.textContent = `Player O: ${playerOScore}`;
  }
}

function resetGame() {
  playerXScore = 0;
  playerOScore = 0;
  playerXScoreElement.textContent = `Player X: ${playerXScore}`;
  playerOScoreElement.textContent = `Player O: ${playerOScore}`;
}
