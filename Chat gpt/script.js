const chatContainer = document.getElementById("chatContainer");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

const chatbotResponses = [
  "Hello! How can I assist you?",
  "I'm sorry, I can't answer that question.",
  "Please elaborate on your request.",
  "That's interesting. Tell me more.",
  "I need more information to provide a proper response.",
  "How can I help you today?",
];

function displayMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.textContent = `${sender}: ${message}`;
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function displayChatbotResponse() {
  const userMessage = userInput.value.trim();
  if (userMessage !== "") {
    displayMessage("You", userMessage);
    userInput.value = "";

    const randomResponse =
      chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)];
    setTimeout(() => {
      displayMessage("ChatGPT", randomResponse);
    }, 500);
  }
}

sendButton.addEventListener("click", displayChatbotResponse);
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    displayChatbotResponse();
  }
});
