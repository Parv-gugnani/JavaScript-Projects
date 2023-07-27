// DOM elements
const animationContainer = document.querySelector(".breath-animation");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const animationSpeedInput = document.getElementById("animation-speed");

// Animation variables
let animationInterval;
let isAnimating = false;
let animationSpeed = 5; // Default animation speed

// Sound effect
const audio = new Audio("background_sound.mp3");

// Start the animation
function startAnimation() {
  if (!isAnimating) {
    isAnimating = true;
    animationInterval = setInterval(breathAnimation, 1000 / animationSpeed);
    audio.loop = true;
    audio.play();
  }
}

// Pause the animation
function pauseAnimation() {
  if (isAnimating) {
    isAnimating = false;
    clearInterval(animationInterval);
    audio.pause();
  }
}

// Reset the animation
function resetAnimation() {
  pauseAnimation();
  animationContainer.style.transform = "scale(1)";
}

// Perform the breathing animation
function breathAnimation() {
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.transition = `width ${animationSpeed / 2}s linear`;

  progressBar.style.width = "100%";
  animationContainer.style.transform = "scale(1.2)";

  setTimeout(() => {
    progressBar.style.width = "0";
    animationContainer.style.transform = "scale(1)";
  }, animationSpeed * 500);
}

// Event listeners for buttons
startBtn.addEventListener("click", startAnimation);
pauseBtn.addEventListener("click", pauseAnimation);
resetBtn.addEventListener("click", resetAnimation);

// Event listener for animation speed input
animationSpeedInput.addEventListener("input", () => {
  animationSpeed = animationSpeedInput.value;
  if (isAnimating) {
    pauseAnimation();
    startAnimation();
  }
});
