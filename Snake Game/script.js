const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 16,
  snakeY = 15;
let velocityX = 0,
  velocityY = 0;

let snakeBody = [];

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const changeDirection = (e) => {
  if (e.key === "ArrowUp") {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown") {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === "ArrowLeft") {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key === "ArrowRight") {
    velocityX = 1;
    velocityY = 0;
  }
};

const initGame = () => {
  snakeX += velocityX;
  snakeY += velocityY;

  let htmlMarkup = `<div class="food" style="grid-row: ${foodY}; grid-column: ${foodX}"></div>`;

  if (snakeX === foodX && snakeY === foodY) {
    changeFoodPosition();
    snakeBody.push([foodX, foodY]);
    console.log(snakeBody);
  }

  snakeBody.unshift([snakeX, snakeY]);

  for (let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class="${i === 0 ? "head" : "body"}" style="grid-row: ${
      snakeBody[i][1]
    }; grid-column: ${snakeBody[i][0]}"></div>`;
  }

  playBoard.innerHTML = htmlMarkup;
};

changeFoodPosition();
const gameInterval = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);
