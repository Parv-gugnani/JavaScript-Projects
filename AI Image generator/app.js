/*
const API_KEY = "your own key";
const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input");
const imagesSection = document.querySelector(".images-section");

const getImages = async () => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: inputElement.value,
      n: 4,
      size: "1024x1024",
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      options
    );
    const data = await response.json();

    if (data && data.data) {
      data.data.forEach((imageObject) => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", imageObject.url);
        imageContainer.append(imageElement);
        imagesSection.append(imageContainer);
      });
    } else {
      console.log("No data or invalid response format");
    }
  } catch (error) {
    console.log(error);
  }
};

submitIcon.addEventListener("click", getImages);
*/

// Get the required elements from the HTML
const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input");
const imagesSection = document.querySelector(".images-section");

// Function to handle image generation
const getImages = async () => {
  const API_KEY = "your own key";

  // Prepare the API request options
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: inputElement.value,
      n: 4,
      size: "1024x1024",
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      options
    );

    // Check if the response was successful (status code 200) before parsing the JSON
    if (response.ok) {
      const data = await response.json();

      if (data && data.data) {
        // Clear previous images from the imagesSection
        imagesSection.innerHTML = "";

        data.data.forEach((imageObject) => {
          const imageContainer = document.createElement("div");
          imageContainer.classList.add("image-container");

          const imageElement = document.createElement("img");
          imageElement.setAttribute("src", imageObject.url);
          imageElement.setAttribute("alt", "Generated Image");

          imageContainer.append(imageElement);
          imagesSection.append(imageContainer);
        });
      } else {
        console.log("No data or invalid response format");
      }
    } else {
      console.log("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};

// Add click event listener to the submit icon
submitIcon.addEventListener("click", getImages);
