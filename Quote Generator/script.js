const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = `- ${data.author}`; // Set author name
  } catch (error) {
    console.error("Error fetching quote:", error);
    quote.innerHTML = "An error occurred while fetching the quote.";
    author.innerHTML = "";
  }
}

getQuote(api_url);

const newQuoteButton = document.getElementById("newQuoteButton");
newQuoteButton.addEventListener("click", () => {
  getQuote(api_url);
});
