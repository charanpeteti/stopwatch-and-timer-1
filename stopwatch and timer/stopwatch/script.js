var stopwatch;
var startTime;
var pausedTime = 0;
var running = false;

function startStopwatch() {
  if (!running) {
    startTime = new Date().getTime() - pausedTime;
    stopwatch = setInterval(updateStopwatch, 10);
    running = true;
  }
}

function pauseStopwatch() {
  if (running) {
    clearInterval(stopwatch);
    pausedTime = new Date().getTime() - startTime;
    running = false;
  }
}

function resetStopwatch() {
  clearInterval(stopwatch);
  pausedTime = 0;
  running = false;
  document.getElementById("stopwatch").textContent = "00:00:00";
}

function updateStopwatch() {
  var currentTime = new Date().getTime();
  var elapsedTime = currentTime - startTime;
  var minutes = Math.floor(elapsedTime / (1000 * 60));
  var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((elapsedTime % 1000) / 10);
  document.getElementById("stopwatch").textContent = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
