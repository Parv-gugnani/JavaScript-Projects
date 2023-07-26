document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === "admin" && password === "password") {
      alert("Logged in successfully");
    } else {
      alert("Login failed");
    }
  });

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("regUsername").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;

    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert("Registration successful");
        document.getElementById("registrationForm").reset();
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Please fill all required fields");
    }
  });
