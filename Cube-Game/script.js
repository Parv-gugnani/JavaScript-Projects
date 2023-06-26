// Get the cube element
const cube = document.getElementById("cube");

// Initialize the cube position
let positionX = 0;
let positionY = 0;

// Function to update the cube position
function updateCubePosition() {
  cube.style.top = positionY + "px";
  cube.style.left = positionX + "px";
}

// Event listener for keyboard input
document.addEventListener("keydown", function (event) {
  const key = event.keyCode;

  // Arrow key codes: Left: 37, Up: 38, Right: 39, Down: 40
  switch (key) {
    case 37: // Left
      positionX -= 50;
      break;
    case 38: // Up
      positionY -= 50;
      break;
    case 39: // Right
      positionX += 50;
      break;
    case 40: // Down
      positionY += 50;
      break;
    default:
      return; // Exit the function if the key is not an arrow key
  }

  // Prevent scrolling of the page
  event.preventDefault();

  // Update the cube position
  updateCubePosition();
});

// Initialize the cube position
updateCubePosition();
