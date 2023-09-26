// Get DOM elements
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const botResult = document.querySelector(".bot_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

// Function to get a random choice (rock, paper, or scissors) for the bot
function getBotChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, botChoice) {
  if (userChoice === botChoice) return "Draw";
  if (
    (userChoice === "rock" && botChoice === "scissors") ||
    (userChoice === "paper" && botChoice === "rock") ||
    (userChoice === "scissors" && botChoice === "paper")
  ) {
    return "User";
  } else {
    return "Bot";
  }
}

// Function to update the game results
function updateGame(userChoice, botChoice) {
  userResult.src = `${userChoice}.png`;
  botResult.src = `${botChoice}.png`;

  const winner = determineWinner(userChoice, botChoice);

  result.textContent = winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`;
}

// Add click event listeners to the option images
optionImages.forEach((image) => {
  image.addEventListener("click", () => {
    const userChoice = image.getAttribute("data-choice");
    const botChoice = getBotChoice();

    updateGame(userChoice, botChoice);
  });
});
