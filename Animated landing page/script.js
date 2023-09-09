document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".section h2");

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const sectionY = section.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollY > sectionY - windowHeight / 2) {
      section.style.opacity = 1;
    }
  });
});
