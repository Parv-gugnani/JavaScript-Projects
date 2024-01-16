document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const sidebar = document.querySelector(".sidebar");

  function toggleSidebar() {
    body.classList.toggle("collapsed");
  }
  document
    .querySelector(".toggle-button")
    .addEventListener("click", function () {
      toggleSidebar();
    });
  sidebar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (body.classList.contains("collapsed")) {
        toggleSidebar();
      }
    });
  });
});
