const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hr = document.querySelector(".hr");

setInterval(function () {
  let time = new Date();
  let secs = time.getSeconds() * 6;
  let mins = time.getMinutes() * 6;
  let hrs = time.getHours() * 6;

  sec.style.transform = `rotate(${secs}deg)`;
  min.style.transform = `rotate(${mins}deg)`;
  hr.style.transform = `rotate(${hrs + miin / 12}deg)`;
});
