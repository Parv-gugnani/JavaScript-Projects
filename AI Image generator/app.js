const API_KEY = "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";
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
      prompt: "A cute baby sea otter",
      n: 2,
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
