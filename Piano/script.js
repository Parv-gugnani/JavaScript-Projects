const pianoKeys = document.querySelectorAll(".piano-keys .keygen");
volumeSlider = document.querySelector(".volume-slider input");
keyCheckbox = document.querySelector(".key-checkbox input");

let allKeys = [];
audio = new Audio(`audios/a.wav`);

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
};
