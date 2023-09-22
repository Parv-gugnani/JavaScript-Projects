// Create a function to generate particles
function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";

  // Randomize particle size
  const size = Math.random() * 20 + 10; // Adjust the size range as needed
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Randomize particle position
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // Randomize animation duration
  const duration = Math.random() * 3 + 2; // Adjust the duration range as needed
  particle.style.animation = `move ${duration}s linear infinite`;

  // Append particle to the container
  document.querySelector(".particles").appendChild(particle);

  // Remove particle after animation completes
  particle.addEventListener("animationiteration", () => {
    particle.remove();
  });
}

// Create particles at regular intervals
setInterval(createParticle, 500); // Adjust the interval as needed
