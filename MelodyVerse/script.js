console.log("Welcome to MelodyVerse");
//Intial
let songIndex = 0;
let audioElements = new Audio("Joel.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let songs = [
  {
    songName: "Joel",
    filePath: "MelodyVerse/Joel.mp3",
    coverPath: "MelodyVerse/cover.jpg",
  },
];
// audioElements.play();

//handle play pause click
masterPlay.addEventListener("click", () => {
  if (audioElements.paused || audioElements.currentTime <= 0) {
    audioElements.play();
    masterPlay.classList.remove("fa-solid fa-play");
    masterPlay.classList.add("fa-solid fa-pause");
  } else {
    audioElements.pause();
    masterPlay.classList.remove("fa-solid fa-play");
    masterPlay.classList.add("fa-solid fa-pause");
  }
});

//Listen to  Events
myProgressbar.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //update
});
