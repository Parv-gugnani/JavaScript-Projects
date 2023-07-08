document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission handling
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // You can add code here to handle form submission, such as sending an email or storing the data.
    // For demonstration purposes, let's log the form data to the console.
    const formData = new FormData(this);
    console.log("Form data:", Object.fromEntries(formData));
    // Clear the form inputs
    this.reset();
  });
