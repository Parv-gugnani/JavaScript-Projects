document.addEventListener("DOMContentLoaded", function () {
  const chatLog = document.getElementById("chatLog");
  const messageInput = document.getElementById("messageInput");
  const sendButton = document.getElementById("sendButton");

  sendButton.addEventListener("click", function () {
    const message = messageInput.value.trim();
    if (message !== "") {
      const messageElement = document.createElement("div");
      messageElement.className = "message";
      messageElement.textContent = message;

      chatLog.appendChild(messageElement);
      chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the latest message

      messageInput.value = ""; // Clear the input field
    }
  });

  messageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendButton.click(); // Simulate a click on the send button when Enter is pressed
      event.preventDefault();
    }
  });
});
