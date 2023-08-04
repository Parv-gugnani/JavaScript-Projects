if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();

  recognition.continuous = false;
  recognition.lang = "en-US";

  const startBtn = document.getElementById("startBtn");
  const output = document.getElementById("output");

  let spokenText = ""; // Initialize a variable to store the spoken text

  startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    recognition.start();
    output.textContent = "Listening...";
    spokenText = ""; // Clear spoken text when starting a new recognition
  });

  recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript;
    spokenText += transcript;
    output.textContent = spokenText;
  });

  recognition.addEventListener("end", () => {
    startBtn.disabled = false;
    output.textContent = "Press Start Listening";
  });
} else {
  console.log("Speech is not supported in this browser");
}
