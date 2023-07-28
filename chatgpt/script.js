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

function botTypingIndicator() {
  const typingIndicator = createBotMessage(
    '<div class="typing-indicator">Typing...</div>'
  );
  appendMessageToChatDisplay(typingIndicator);
}

function clearChat() {
  document.getElementById("chat-display").innerHTML = "";
}

function handleUserInput(message) {
  const userMessage = createUserMessage(message);
  appendMessageToChatDisplay(userMessage);

  // Simulate bot response after a short delay
  botTypingIndicator();
  setTimeout(() => {
    let botResponse;

    // Predefined responses for certain user inputs
    if (message.toLowerCase().includes("hello")) {
      botResponse = createBotMessage("Hello there!");
    } else if (message.toLowerCase().includes("how are you")) {
      botResponse = createBotMessage(
        "I'm just a bot, so I don't have feelings, but thanks for asking!"
      );
    } else if (message.toLowerCase().includes("clear")) {
      clearChat();
      return;
    } else {
      botResponse = createBotMessage(
        "I'm just a simple bot. I can't respond to you :("
      );
    }

    appendMessageToChatDisplay(botResponse);
  }, 1000);
}

document.getElementById("user-input").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();

    if (message !== "") {
      handleUserInput(message);
      userInput.value = "";
    }
  }
});

document.getElementById("send-button").addEventListener("click", () => {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();

  if (message !== "") {
    handleUserInput(message);
    userInput.value = "";
  }
});
//
