const submitBtn = document.getElementById("submitBtn");
const promptInput = document.getElementById("promptInput");
const imagesSection = document.querySelector(".images-section");
const API_KEY = "your own";

//
submitBtn.addEventListener("click", async () => {
  const prompt = promptInput.value;

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer YOUR_API_KEY`,
    },
    body: JSON.stringify({
      prompt,
    }),
  });
});


  const data = await response.json();

  if (data && Array.isArray(data.images)) {
    imagesSection.innerHTML = "";

    data.images.forEach((imageUrl) => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");

      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", imageUrl);
      imageElement.setAttribute("alt", "Generated Image");

      imageContainer.appendChild(imageElement);
      imagesSection.appendChild(imageContainer);
    });
  } else {
    console.log("Invalid API response");
  }
});
