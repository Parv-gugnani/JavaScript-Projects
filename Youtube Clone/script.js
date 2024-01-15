document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const linksContainer = document.querySelector(".links");

  toggleButton.addEventListener("click", function () {
    linksContainer.style.maxHeight =
      linksContainer.style.maxHeight === "0px" ? "200px" : "0px";
  });
});
