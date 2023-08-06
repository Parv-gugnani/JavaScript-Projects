const videoFrame = document.getElementById("videoFrame");

function playVideo() {
  videoFrame.contentWindow.postMessage(
    '{"event":"command","func":"playVideo","args":""}',
    "*"
  );
}

function pauseVideo() {
  videoFrame.contentWindow.postMessage(
    '{"event":"command","func":"pauseVideo","args":""}',
    "*"
  );
}
