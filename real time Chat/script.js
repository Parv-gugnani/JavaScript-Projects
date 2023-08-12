const socket = io(); // Connect to the Socket.io server

const messages = document.getElementById("messages");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");

sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message !== "") {
    socket.emit("chat message", message); // Emit the message event to the server
    messageInput.value = "";
  }
});

socket.on("chat message", (message) => {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messages.appendChild(messageElement);
});
