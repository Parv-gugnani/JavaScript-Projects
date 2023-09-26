// Get DOM elements
const userResult = document.querySelector(".user_result img");
const botResult = document.querySelector(".bot_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

// Mapping for user choices
const userChoices = {
  rock: "Rock",
  paper: "Paper",
  scissors: "Scissors",
};

// Function to get a random choice for the bot
function getBotChoice() {
  const choices = Object.keys(userChoices);
  const randomIndex = Math.floor(Math.random() * choices.length);
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
  userResult.src = `images/${userChoice}.png`;
  botResult.src = `images/${botChoice}.png`;

  const winner = determineWinner(userChoice, botChoice);

  console.log("User Choice:", userChoice);
  console.log("Bot Choice:", botChoice);
  console.log("Winner:", winner);

  if (winner === "Draw") {
    result.textContent = "It's a Draw!";
  } else if (winner === "User") {
    result.textContent = "User Wins!";
  } else if (winner === "Bot") {
    result.textContent = "Bot Wins!";
  }
}

// Add click event listeners to the option images
optionImages.forEach((image) => {
  image.addEventListener("click", () => {
    const userChoice = image.getAttribute("data-choice");
    const botChoice = getBotChoice();

    updateGame(userChoice, botChoice);
  });
});
