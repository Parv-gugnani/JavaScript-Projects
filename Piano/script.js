const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keyCheckbox = document.querySelector(".key-checkbox input");

let allKeys = [];
const audio = new Audio(); // Initialize an Audio object without a source

const playTune = (key) => {
  // Set the source URL of the audio element
  audio.src = `tunes/${key}.wav`;

  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  // Set the volume of the audio element based on the slider value
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  // Toggle the "hide" class on piano keys to show/hide them
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKeys = (e) => {
  // Check if the pressed key is in the list of allowed keys and play the corresponding tune
  if (allKeys.includes(e.key)) playTune(e.key);
};

// Event listeners for volume, show/hide keys, and key presses
keyCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKeys);
