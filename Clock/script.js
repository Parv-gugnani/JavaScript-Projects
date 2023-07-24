let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let currentTime = new Date();

console.log(
  currentTime.getHours(),
  currentTime.getMinutes(),
  currentTime.getSeconds()
);
