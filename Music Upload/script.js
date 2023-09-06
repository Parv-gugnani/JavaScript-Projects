document.addEventListener("DOMContentLoaded", function () {
  const musicFileInput = document.getElementById("music-file");
  const musicNameInput = document.getElementById("music-name");
  const musicDescriptionInput = document.getElementById("music-description");
  const uploadButton = document.getElementById("upload-music-button");
  const musicItemsList = document.getElementById("music-items");
  const audioPlayer = document.createElement("audio");
  const playButton = document.createElement("button");
  const pauseButton = document.createElement("button");

  playButton.textContent = "Play";
  pauseButton.textContent = "Pause";
  pauseButton.disabled = true;

  function toggleButtons() {
    playButton.disabled = !playButton.disabled;
    pauseButton.disabled = !pauseButton.disabled;
  }

  playButton.addEventListener("click", function () {
    if (audioPlayer.src) {
      audioPlayer.play();
      toggleButtons();
    } else {
      alert("Please select a music file.");
    }
  });

  pauseButton.addEventListener("click", function () {
    audioPlayer.pause();
    toggleButtons();
  });

  uploadButton.addEventListener("click", function () {
    const musicName = musicNameInput.value;
    const musicDescription = musicDescriptionInput.value;

    if (musicFileInput.files.length === 0 || !musicName || !musicDescription) {
      alert("Please fill in all fields and select a music file.");
      return;
    }

    const listItem = document.createElement("li");
    listItem.classList.add("music-item");

    const musicInfo = document.createElement("div");
    musicInfo.innerHTML = `<strong>${musicName}</strong><br>${musicDescription}`;

    listItem.appendChild(playButton);
    listItem.appendChild(pauseButton);
    listItem.appendChild(musicInfo);
    musicItemsList.appendChild(listItem);

    const musicFile = URL.createObjectURL(musicFileInput.files[0]);
    audioPlayer.src = musicFile;

    musicNameInput.value = "";
    musicDescriptionInput.value = "";
    musicFileInput.value = "";
    toggleButtons();
  });

  document.body.appendChild(audioPlayer);
  audioPlayer.style.display = "none";
});
