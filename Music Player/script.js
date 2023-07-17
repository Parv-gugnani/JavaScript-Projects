// JavaScript code
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = 0; // Set the initial progress bar value to 0 (start position).
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

let progressInterval;

ctrlIcon.addEventListener("click", playPause);

song.addEventListener("timeupdate", function () {
  progress.value = song.currentTime;
});

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

song.addEventListener("play", function () {
  if (!progressInterval) {
    progressInterval = setInterval(() => {
      progress.value = song.currentTime;
    }, 500);
  }
});

song.addEventListener("pause", function () {
  clearInterval(progressInterval);
  progressInterval = null;
});
