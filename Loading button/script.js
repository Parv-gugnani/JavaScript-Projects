let btn = document.querySelector(".button");
let spinIcon = document.querySelector(".spinner");
let btnText = document.querySelector(".btn-text");

btn.addEventListener("click", () => {
  btn.style.cursor = "wait";
  btn.classList.add("checked");
  spinIcon.classList.add("spin");
  btnText.textContent = "Loading";

  // setTimeout to simulate a delay (4.5 seconds)
  setTimeout(() => {
    btn.style.pointerEvents = "none";
    spinIcon.classList.remove("spinner");
    spinIcon.classList.add("check");
    btnText.textContent = "Done";
  }, 4500);
});
