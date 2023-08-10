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

// ... Rest of your script ...

// Event listener for answering a question
function addAnswer(answerText, questionIndex) {
  const answer = document.createElement("div");
  answer.className = "answer";
  answer.innerHTML = `
    <p>${answerText}</p>
    <div class="vote-buttons">
      <button class="vote-button upvote">Upvote</button>
      <button class="vote-button downvote">Downvote</button>
    </div>
  `;
  const question = questionsList.children[questionIndex];
  question.appendChild(answer);

  const upvoteButton = answer.querySelector(".upvote");
  const downvoteButton = answer.querySelector(".downvote");
  let upvotes = 0;
  let downvotes = 0;

  upvoteButton.addEventListener("click", () => {
    upvotes++;
    updateVoteCount();
  });

  downvoteButton.addEventListener("click", () => {
    downvotes++;
    updateVoteCount();
  });

  function updateVoteCount() {
    answer.querySelector(
      "p"
    ).textContent = `${answerText} - Upvotes: ${upvotes}, Downvotes: ${downvotes}`;
  }
}

// ... Rest of your script ...
