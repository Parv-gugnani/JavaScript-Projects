// let profilePic = document.getElementById("profile-Pic");
// let InputFile = document.getElementById("input-file");

// InputFile.onchange = function () {
//   profilePic.src = URL.createObjectURL(InputFile.files[0]);
// };

document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("input-file");
  const profilePic = document.getElementById("profile-Pic");

  fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        profilePic.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});
