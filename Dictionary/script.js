// script.js
const apiKey = "YOUR_MERRIAM_WEBSTER_API_KEY";
const baseApiUrl =
  "https://www.dictionaryapi.com/api/v3/references/learners/json/";

const wordInput = document.getElementById("wordInput");
const searchBtn = document.getElementById("searchBtn");
const meaningOutput = document.getElementById("meaning");

searchBtn.addEventListener("click", () => {
  const word = wordInput.value.toLowerCase();

  if (word) {
    fetchDefinition(word);
  }
});

async function fetchDefinition(word) {
  try {
    const response = await fetch(`${baseApiUrl}${word}?key=${apiKey}`);
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      const definition = data[0].shortdef[0];
      meaningOutput.textContent = `Meaning: ${definition}`;
    } else {
      meaningOutput.textContent = "Word not found in the dictionary";
    }
  } catch (error) {
    console.error("Error fetching definition:", error);
    meaningOutput.textContent =
      "An error occurred while fetching the definition";
  }
}
