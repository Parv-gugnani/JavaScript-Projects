const playBoard = document.querySelector(".play-board");

let foodX, foodY;

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const initGame = () => {
  let htmlMarkup = `<div class="food" style="grid-row: ${foodY}; grid-column: ${foodX}"></div>`;
  playBoard.innerHTML = htmlMarkup;
};

changeFoodPosition();

initGame();
