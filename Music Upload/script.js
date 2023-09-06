document.addEventListener("DOMContentLoaded", function () {
  const musicFileInput = document.getElementById("music-file");
  const musicNameInput = document.getElementById("music-name");
  const musicDescriptionInput = document.getElementById("music-description");
  const uploadButton = document.getElementById("upload-button");
  const musicItemsList = document.getElementById("music-items");
  const audioPlayer = document.createElement("audio"); // Create audio element
  const playButton = document.createElement("button"); // Create Play button
  const pauseButton = document.createElement("button"); // Create Pause button

  // Set initial state for Play and Pause buttons
  playButton.textContent = "Play";
  pauseButton.textContent = "Pause";
  pauseButton.disabled = true;

  // Function to toggle between Play and Pause buttons
  function toggleButtons() {
    playButton.disabled = !playButton.disabled;
    pauseButton.disabled = !pauseButton.disabled;
  }

  playButton.addEventListener("click", function () {
    audioPlayer.src = URL.createObjectURL(musicFileInput.files[0]);
    audioPlayer.style.display = "block";
    audioPlayer.play();
    toggleButtons(); // Show Pause, hide Play
  });

  pauseButton.addEventListener("click", function () {
    audioPlayer.pause();
    toggleButtons(); // Show Play, hide Pause
  });

  uploadButton.addEventListener("click", function () {
    const musicFile = musicFileInput.files[0];
    const musicName = musicNameInput.value;
    const musicDescription = musicDescriptionInput.value;

    if (musicFile && musicName && musicDescription) {
      const listItem = document.createElement("li");
      listItem.classList.add("music-item");

      const musicInfo = document.createElement("div");
      musicInfo.innerHTML = `<strong>${musicName}</strong><br>${musicDescription}`;

      listItem.appendChild(playButton);
      listItem.appendChild(pauseButton);
      listItem.appendChild(musicInfo);
      musicItemsList.appendChild(listItem);

      // Reset input fields
      musicFileInput.value = "";
      musicNameInput.value = "";
      musicDescriptionInput.value = "";
    } else {
      alert("Please fill in all fields and select a file.");
    }
  });

  document.body.appendChild(audioPlayer);
  audioPlayer.style.display = "none";
});
