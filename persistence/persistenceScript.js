function saveHighscore() {
  localStorage.setItem("highscore", highscore);
  console.log("Local storage variable 'highscore' set to: " + highscore);
}

function loadHighscore() {
  highscore = localStorage.getItem("highscore");
  console.log("Highscore was read from local storage value: " + highscore);
}
