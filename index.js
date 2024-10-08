// script.js
let startTime, elapsedTime = 0;
let intervalId;
let isRunning = false;

function startStop() {
  if (isRunning) {
    clearInterval(intervalId);
    document.querySelector("button").textContent = "Start";
    isRunning = false;
    document.getElementById('previous-record').textContent = document.getElementById('timer').textContent;
  } else {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTimer, 10);
    document.querySelector("button").textContent = "Stop";
    isRunning = true;
  }
}

function reset() {
  clearInterval(intervalId);
  elapsedTime = 0;
  document.getElementById('timer').textContent = "00:00:00.000";
  document.querySelector("button").textContent = "Start";
  isRunning = false;
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  let milliseconds = elapsedTime % 1000;
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  milliseconds = milliseconds.toString().padStart(3, '0');
  seconds = seconds.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  hours = hours.toString().padStart(2, '0');

  document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
