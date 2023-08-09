// Get references to DOM elements
const questionInput = document.getElementById("questionInput");
const askButton = document.getElementById("askButton");
const questionsList = document.getElementById("questions");

// Event listener for asking a question
askButton.addEventListener("click", () => {
  const questionText = questionInput.value;
  if (questionText) {
    addQuestion(questionText);
    questionInput.value = "";
  }
});

// Function to add a question to the list
function addQuestion(questionText) {
  const li = document.createElement("li");
  li.textContent = questionText;
  questionsList.appendChild(li);
}
