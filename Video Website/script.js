const videoPlayer = document.getElementById("videoPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const seekSlider = document.getElementById("seekSlider");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const volumeSlider = document.getElementById("volumeSlider");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const playbackRateSelect = document.getElementById("playbackRateSelect");

playPauseBtn.addEventListener("click", () => {
  if (videoPlayer.paused || videoPlayer.ended) {
    videoPlayer.play();
    playPauseBtn.innerHTML = "&#10074;&#10074;";
  } else {
    videoPlayer.pause();
    playPauseBtn.innerHTML = "&#9658;";
  }
});

videoPlayer.addEventListener("timeupdate", () => {
  const minutes = Math.floor(videoPlayer.currentTime / 60);
  const seconds = Math.floor(videoPlayer.currentTime % 60);
  currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  seekSlider.value = videoPlayer.currentTime;
});

videoPlayer.addEventListener("loadedmetadata", () => {
  duration.textContent = `${Math.floor(videoPlayer.duration / 60)}:${Math.floor(
    videoPlayer.duration % 60
  )
    .toString()
    .padStart(2, "0")}`;
  seekSlider.max = videoPlayer.duration;
});

seekSlider.addEventListener("input", () => {
  videoPlayer.currentTime = seekSlider.value;
});

volumeSlider.addEventListener("input", () => {
  videoPlayer.volume = volumeSlider.value;
});

fullscreenBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    videoPlayer.requestFullscreen();
  }
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    fullscreenBtn.innerHTML = "&#9724;";
  } else {
    fullscreenBtn.innerHTML = "&#9723;";
  }
});

playbackRateSelect.addEventListener("change", () => {
  videoPlayer.playbackRate = parseFloat(playbackRateSelect.value);
});
