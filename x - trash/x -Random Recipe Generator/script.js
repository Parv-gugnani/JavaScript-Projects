// Constants
const apiKey = ""; // Replace this with your Spoonacular API key
const recipeForm = document.getElementById("recipeForm");
const recipeContainer = document.getElementById("recipeContainer");

// Event listener for form submission
recipeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(recipeForm);
  const cuisineType = formData.get("cuisineType");
  const dietaryRestrictions = formData.getAll("dietaryRestrictions");
  const servings = formData.get("servings");

  getRandomRecipe(cuisineType, dietaryRestrictions, servings);
});

// Function to fetch a random recipe from the Spoonacular API
async function getRandomRecipe(cuisineType, dietaryRestrictions, servings) {
  try {
    const restrictions = dietaryRestrictions.join(",");
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=1&tags=${cuisineType}&diet=${restrictions}&apiKey=${apiKey}`
    );
    const data = await response.json();

    // Display the recipe details
    displayRecipe(data.recipes[0]);
  } catch (error) {
    console.error("Error fetching data:", error);
    recipeContainer.innerHTML =
      "Failed to fetch the recipe. Please try again later.";
  }
}

// Function to display the recipe details
function displayRecipe(recipe) {
  const recipeHTML = `
    <h2>${recipe.title}</h2>
    <img src="${recipe.image}" alt="${recipe.title}" width="200">
    <p>Ready in ${recipe.readyInMinutes} minutes</p>
    <h3>Ingredients:</h3>
    <ul>
      ${recipe.extendedIngredients
        .map((ingredient) => `<li>${ingredient.original}</li>`)
        .join("")}
    </ul>
    <h3>Instructions:</h3>
    <p>${
      recipe.instructions || "Instructions not available for this recipe."
    }</p>
  `;
  recipeContainer.innerHTML = recipeHTML;
}
