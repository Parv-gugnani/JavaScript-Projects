const dino = document.querySelector(".dino");
const obstacle = document.querySelector(".obstacle");
const scoreDisplay = document.querySelector(".score");

let isJumping = false;
let score = 0;

document.addEventListener("keydown", jump);

function jump(event) {
  if (event.keyCode === 32 && !isJumping) {
    isJumping = true;

    let jumpUp = 0;
    const jumpInterval = setInterval(() => {
      if (jumpUp >= 100) {
        clearInterval(jumpInterval);
        let fallDown = 0;
        const fallInterval = setInterval(() => {
          if (fallDown <= 0) {
            clearInterval(fallInterval);
            isJumping = false;
          } else {
            jumpUp -= 5;
            fallDown -= 5;
            dino.style.bottom = jumpUp + "px";
          }
        }, 20);
      } else {
        jumpUp += 5;
        dino.style.bottom = jumpUp + "px";
      }
    }, 20);
  }
}

function updateScore() {
  score++;
  scoreDisplay.textContent = score;
}

function checkCollision() {
  if (score > 0) {
    const dinoPosition = dino.getBoundingClientRect();
    const obstaclePosition = obstacle.getBoundingClientRect();

    if (
      dinoPosition.left < obstaclePosition.left + obstaclePosition.width &&
      dinoPosition.left + dinoPosition.width > obstaclePosition.left &&
      dinoPosition.top < obstaclePosition.top + obstaclePosition.height &&
      dinoPosition.top + dinoPosition.height > obstaclePosition.top
    ) {
      alert(`Game Over! Your score: ${score}`);
      location.reload(); // Reload the game
    }
  }
}

function moveObstacle() {
  let obstaclePosition = 300;

  const moveInterval = setInterval(() => {
    if (obstaclePosition <= -20) {
      clearInterval(moveInterval);
      updateScore();
      moveObstacle();
    } else {
      obstaclePosition -= 5;
      obstacle.style.right = obstaclePosition + "px";
      checkCollision();
    }
  }, 20);
}

moveObstacle();
