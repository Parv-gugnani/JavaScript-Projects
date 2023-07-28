function createBotMessage(message) {
  return `<div class="bot-message">${message}</div>`;
}

function createUserMessage(message) {
  return `<div class="user-message">${message}</div>`;
}

function appendMessageToChatDisplay(message) {
  const chatDisplay = document.getElementById("chat-display");
  chatDisplay.innerHTML += message;
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();

  if (message === "") {
    return;
  }

  const userMessage = createUserMessage(message);
  appendMessageToChatDisplay(userMessage);
  userInput.value = "";

  // Simulate bot response after a short delay
  setTimeout(() => {
    const botResponse = createBotMessage(
      "I'm just a simple bot. I can't respond to you :("
    );
    appendMessageToChatDisplay(botResponse);
  }, 500);
}

document.getElementById("user-input").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
