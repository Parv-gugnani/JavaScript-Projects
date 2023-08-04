// Get references to DOM elements
const playPauseButton = document.getElementById("playPauseButton");
const audioPlayer = document.getElementById("audioPlayer");

// Track playing status
let isPlaying = false;

// Function to toggle play/pause
function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseButton.textContent = "Play";
  } else {
    audioPlayer.play();
    playPauseButton.textContent = "Pause";
  }
  isPlaying = !isPlaying;
}

// Attach click event listener to play/pause button
playPauseButton.addEventListener("click", togglePlayPause);

//

// ... Rest of your script ...

// Volume Slider
const volumeSlider = document.querySelector(".volume-slider");
audioPlayer.volume = volumeSlider.value / 100;

volumeSlider.addEventListener("input", () => {
  audioPlayer.volume = volumeSlider.value / 100;
});

// Skip to Previous and Next
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", () => {
  // Implement logic to skip to previous track
});

nextButton.addEventListener("click", () => {
  // Implement logic to skip to next track
});

// ... Rest of your script ...

// Define a playlist of tracks
const playlist = [
  "song1.mp3",
  "song2.mp3",
  "song3.mp3",
  // Add more songs
];

let currentTrackIndex = 0;

// Function to play the current track
function playCurrentTrack() {
  audioPlayer.src = playlist[currentTrackIndex];
  audioPlayer.play();
  playPauseButton.textContent = "Pause";
  isPlaying = true;
}

// Play the first track when the page loads
playCurrentTrack();

// Previous and Next Track
prevButton.addEventListener("click", () => {
  currentTrackIndex =
    (currentTrackIndex - 1 + playlist.length) % playlist.length;
  playCurrentTrack();
});

nextButton.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  playCurrentTrack();
});
