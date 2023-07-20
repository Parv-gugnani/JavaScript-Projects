window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;

  // Adjust the styles for each section based on the scroll position
  document.getElementById(
    "section1"
  ).style.backgroundColor = `rgba(0, 188, 212, ${1 - scrolled / 1000})`;
  document.getElementById("section1").style.color = `rgba(255, 255, 255, ${
    1 - scrolled / 1000
  })`;

  document.getElementById(
    "section2"
  ).style.backgroundColor = `rgba(103, 58, 183, ${1 - scrolled / 1000})`;
  document.getElementById("section2").style.color = `rgba(255, 255, 255, ${
    1 - scrolled / 1000
  })`;

  // Add the fade-in-out class to the sections for the opacity effect
  document.getElementById("section1").classList.add("fade-in-out");
  document.getElementById("section2").classList.add("fade-in-out");

  // Add the zoom-effect class to the sections for the zoom effect
  document.getElementById("section1").classList.add("zoom-effect");
  document.getElementById("section2").classList.add("zoom-effect");
});
