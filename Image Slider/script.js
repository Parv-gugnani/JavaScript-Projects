const slider = document.querySelector(".slider");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const images = document.querySelectorAll(".slider img");

let currentIndex = 0;

function showImage(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex--;
  showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  showImage(currentIndex);
});

setInterval(() => {
  currentIndex++;
  showImage(currentIndex);
}, 3000);
