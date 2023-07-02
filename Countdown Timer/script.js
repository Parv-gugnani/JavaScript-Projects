// Set the target date and time for the countdown
const targetDate = new Date("July 3, 2023 15:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();

  const timeDifference = targetDate - now;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "Countdown expired";
  }
}, 1000);
