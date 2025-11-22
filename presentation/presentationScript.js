// Setting up buttons

const startButton = document.querySelector("#startButton");
const testButton = document.querySelector("#testButton");
const resetHighsButton = document.querySelector("#resetHighscoreButton");

const menuButtons = [startButton,testButton,resetHighsButton];

const gameBoardButtons = document.querySelectorAll("#gameboard button");
const hintsButton = document.querySelector("#hintsButton");

function setupButtons() {
  setupStartButton();
  setupGameButtons();
  setupTestButton();
  setupHintsButton();
  setupResetHighScoreButton();
}

function setupStartButton() {
  startButton.addEventListener("click", () => startRound(level));
}

function setupGameButtons() {
  for (let i = 0; i < gameBoardButtons.length; i++) {
    gameBoardButtons[i].addEventListener("click", () => {
      playSound(i);
      handlePlayerClick(i);
    });
  }
  document.addEventListener("keypress", function (e) {
    if (e.key > 0 && e.key < 10) {
      const index = e.key - 1;

      gameBoardButtons[index].click();

      gameBoardButtons[index].classList.add("active");
      gameBoardButtons[index].focus();

      setTimeout(() => {
        gameBoardButtons[index].classList.remove("active");
        gameBoardButtons[index].blur();
      }, 150);
    }
  });
}

function setupTestButton() {
  testButton.addEventListener("click", () => playSequence(testSequence));
}

function setupHintsButton() {
  hintsButton.addEventListener("click", () => {
    // Toggle
    shouldShowHints = !shouldShowHints;

    showHints(currentSequence);

    if (shouldShowHints) {

      for (let i = 0; i < gameBoardButtons.length; i++) {
        gameBoardButtons[i].textContent = i;
      }
    } else {
      resetGameButtonLabels();
    }
    updateHintsButtonText();
  });
}

function updateHintsButtonText() {
  if (shouldShowHints) {
    hintsButton.textContent = "Disable Hints";
  } else {
    hintsButton.textContent = "Enable Hints";
  }
}


function resetGameButtonLabels() {
  for (let i = 0; i < gameBoardButtons.length; i++) {
    gameBoardButtons[i].textContent = "";
  }
}

function setupResetHighScoreButton() {
  resetHighsButton.addEventListener("click", () => {
    highscore = 0;
    saveHighscore();
    displayHighscore();
  });
}

function displayHighscore() {
  document.querySelector("#highscore").classList.remove("hide");
  document.querySelector("#highscore").textContent = "Highscore " + highscore;
}

function hideHighscore() {
  document.querySelector("#highscore").classList.add("hide");
}

function displayCurrentLevel() {
  document.querySelector("#gamelevel").classList.remove("hide");
  document.querySelector("#gamelevel").textContent = "Level " + level;
}

function hideCurrentLevel() {
  document.querySelector("#gamelevel").classList.add("hide");
}

function playSound(i) {
  if (sounds[i]) {
    sounds[i].currentTime = 0;
    sounds[i].play();
  }
}

function disableGameBoardButtons() {
  gameBoardButtons.forEach((button) => {
    button.disabled = true;
    button.classList.add("disabled");
  });
}

function enableGameBoardButtons() {
  gameBoardButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("disabled");
  });
}

function disableMenuButtons() {
  menuButtons.forEach((button) => {
    button.disabled = true;
    button.classList.add("disabled");
  });
}

function enableMenuButtons() {
  menuButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("disabled");
  });
}

function displayGameOver() {
  alert(
    "Game over! You failed to beat level " +
      level +
      ". Your highscore is " +
      highscore +
      "."
  );
}
