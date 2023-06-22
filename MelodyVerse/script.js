console.log("Welcome to MelodyVerse");
//Intial
let songIndex = 0;
let audioElements = new Audio("Joel.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let gif = document.getElementById("gif");

//
let songs = [
  {
    songName: "Joel",
    filePath: "MelodyVerse/Joel.mp3",
    coverPath: "MelodyVerse/cover.jpg",
  },
  {
    songName: "Familiar",
    filePath: "MelodyVerse/Joel.mp3",
    coverPath: "MelodyVerse/img2.jpg",
  },
];
// audioElements.play();

//handle play pause click
masterPlay.addEventListener("click", () => {
  if (audioElements.paused || audioElements.currentTime <= 0) {
    audioElements.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElements.pause();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 0;
  }
});

//Listen to  Events
audioElements.addEventListener("timeupdate", () => {
  progress = parseInt(
    (audioElements.currentTime / audioElements.duration) * 100
  );
  myProgressbar.value = progress;
});

myProgressbar.addEventListener("change", () => {
  audioElements.currentTime =
    (myProgressbar.value * audioElements.duration) / 100;
});
