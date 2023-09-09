const image = document.querySelector(".container");
const heartIcon = document.querySelector(".heart");

image.addEventListener("dbclick", (e) => {
  heartIcon.classList.add("active");
});
