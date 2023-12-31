console.log("Welcome to MelodyVerse");
//Intial
let songIndex = 0;
let audioElements = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let gif = document.getElementById("gif");
let MasterSongName = document.getElementById("MasterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

//
let songs = [
  {
    songName: "Joel - Appart",
    filePath: "1.mp3",
    coverPath: "img1.jpg",
  },
  {
    songName: "Take Care - Beach House",
    filePath: "2.mp3",
    coverPath: "img2.jpg",
  },
  {
    songName: "Familiar - Agnes Obel",
    filePath: "3.mp3",
    coverPath: "img3.jpg",
  },
  {
    songName: "Glimpse of Us - Joji",
    filePath: "4.mp3",
    coverPath: "img4.jpg",
  },
  {
    songName: "Twisted olive branch - Asaf Addam",
    filePath: "5.mp3",
    coverPath: "img5.jpg",
  },

  {
    songName: "You are the Inspiration -Chicago",
    filePath: "6.mp3",
    coverPath: "img6.jpg",
  },
];

songItems.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
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
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play"); //my mistake here Lol i misplaced them
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

//
myProgressbar.addEventListener("change", () => {
  audioElements.currentTime =
    (myProgressbar.value * audioElements.duration) / 100;
});

//
const MakeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  );
};
//
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      MakeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      //
      audioElements.src = `${songIndex + 1}.mp3`;
      MasterSongName.innerText = songs[songIndex].songName;
      audioElements.currentTime = 0;
      audioElements.play();
      gif.style.opacity = 1;
      //
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    });
  }
);

//previous
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 5) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElements.src = `${songIndex + 1}.mp3`;
  MasterSongName.innerText = songs[songIndex].songName;
  audioElements.currentTime = 0;
  audioElements.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});

//forward
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElements.src = `${songIndex + 1}.mp3`;
  MasterSongName.innerText = songs[songIndex].songName;
  audioElements.currentTime = 0;
  audioElements.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
