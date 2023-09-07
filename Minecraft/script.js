const world = document.getElementById("world");

function createBlock(x, y) {
  const block = document.createElement("div");
  block.classList.add("block");
  block.style.left = `${x}px`;
  block.style.top = `${y}px`;
  world.appendChild(block);
}

world.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  createBlock(x, y);
});
