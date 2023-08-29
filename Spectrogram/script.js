const audioInput = document.getElementById("audioInput");
const spectrogramCanvas = document.getElementById("spectrogramCanvas");
const ctx = spectrogramCanvas.getContext("2d");

audioInput.addEventListener("change", handleAudioInput);

async function handleAudioInput(event) {
  const file = event.target.files[0];
  if (!file) return;

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const audioBuffer = await readFileAsAudioBuffer(file, audioContext);
  const spectrogramData = createSpectrogramData(audioBuffer, audioContext);

  renderSpectrogram(spectrogramData);
}

function readFileAsAudioBuffer(file, audioContext) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const arrayBuffer = event.target.result;
      audioContext.decodeAudioData(arrayBuffer, resolve, reject);
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

function createSpectrogramData(audioBuffer, audioContext) {
  const sampleRate = audioBuffer.sampleRate;
  const audioData = audioBuffer.getChannelData(0); // Assuming mono audio

  // Define the parameters for the spectrogram
  const fftSize = 256; // Adjust as needed
  const hopSize = 64; // Adjust as needed

  // Create an AnalyserNode
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = fftSize;

  // Initialize the spectrogram data array
  const spectrogramData = [];

  for (let i = 0; i < audioData.length; i += hopSize) {
    const startSample = i;
    const endSample = Math.min(startSample + fftSize, audioData.length);

    const segment = audioData.slice(startSample, endSample);

    analyser.getFloatFrequencyData(segment);
    spectrogramData.push(new Float32Array(segment));
  }

  return spectrogramData;
}

function renderSpectrogram(spectrogramData) {
  // Set canvas dimensions
  const canvasWidth = spectrogramData[0].length;
  const canvasHeight = spectrogramData.length;
  spectrogramCanvas.width = canvasWidth;
  spectrogramCanvas.height = canvasHeight;

  // Define a color map for the spectrogram
  const colorMap = [
    "#000",
    "#111",
    "#222",
    // Add more colors as needed
  ];

  for (let y = 0; y < canvasHeight; y++) {
    for (let x = 0; x < canvasWidth; x++) {
      const amplitude = spectrogramData[y][x];
      const colorIndex = Math.floor(
        ((amplitude + 128) / 256) * colorMap.length
      );
      const color = colorMap[colorIndex];

      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}
