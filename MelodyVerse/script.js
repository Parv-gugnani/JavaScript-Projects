console.log("Welcome to MelodyVerse");
//Intial
let songIndex = 0;
let audioElements = new Audio("songs/Joel.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

//
let songs = [
  {
    songName: "Joel",
    filePath: "MelodyVerse/Joel.mp3",
    coverPath: "MelodyVerse/img1.jpg",
  },
  {
    songName: "Familiar",
    filePath: "MelodyVerse/Joel.mp3",
    coverPath: "MelodyVerse/img2.jpg",
  },
  {
    songName: "Glimpse of Us",
    filePath: "MelodyVerse/GlimpseUs.mp3",
    coverPath: "MelodyVerse/img3.jpg",
  },
  {
    songName: "Twisted olive branch",
    filePath: "MelodyVerse/twistedolive.mp3",
    coverPath: "MelodyVerse/img4.jpg",
  },
  {
    songName: "Take Care",
    filePath: "MelodyVerse/TakeCare.mp3",
    coverPath: "MelodyVerse/img5.jpg",
  },
  {
    songName: "You are the Inspiration",
    filePath: "MelodyVerse/yourtheinspiration.mp3",
    coverPath: "MelodyVerse/img6.jpg",
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("SongName")[0].innerText = songs[i].SongName;
});

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
