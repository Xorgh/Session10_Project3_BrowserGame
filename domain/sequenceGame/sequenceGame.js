function initialHighscoreCheck() {
  if (localStorage.getItem("highscore") === null) {
    saveHighscore(highscore);
  } else {
    loadHighscore();
  }
}

function startRound() {
  console.log("Starting new round. Level: " + level);

  roundSetup();

  playSequence(currentSequence);
}

function roundSetup() {
  currentSequence = createSequenceArray(level);
  playerSequence = [];
  disableGameBoardButtons();
  disableMenuButtons();
  hideHighscore();
  displayCurrentLevel();
  showHints(currentSequence);
}

async function playSequence(sequenceArray) {
  disableGameBoardButtons();
  for (let i = 0; i < sequenceArray.length; i++) {
    let index = sequenceArray[i];

    await sleep(NOTE_DELAY);
    console.log("Clicking button with index: " + index);
    clickButton(index);

    await sleep(NOTE_DURATION);
  }
  await sleep(SEQUENCE_END_DELAY);
  enableGameBoardButtons();
}

// Simulate click function
function clickButton(buttonIndex) {
  if (buttonIndex >= 0 && buttonIndex <= 8) {
    click_event = new CustomEvent("click");
    btn_element = gameBoardButtons[buttonIndex];
    btn_element.dispatchEvent(click_event);

    gameBoardButtons[buttonIndex].classList.add("active");
    gameBoardButtons[buttonIndex].focus();

    setTimeout(() => {
      gameBoardButtons[buttonIndex].classList.remove("active");
      gameBoardButtons[buttonIndex].blur();
    }, 150);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomInt(min = 0, max = 9) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function createSequenceArray(currentLevel) {
  let sequence = [];

  for (let i = 1; i <= currentLevel; i++) {
    sequence.push(getRandomInt());
  }
  return sequence;
}

function updateLevel() {
  level++;
}

function handlePlayerClick(buttonIndex) {
  // If first button is disabled all game buttons are disabled and playerclicks should be ignored.
  if (gameBoardButtons[0].disabled) {
    return;
  }
  playerSequence.push(buttonIndex);

  checkPlayerSequence();
}

function checkPlayerSequence() {
  const expectedSequence = playerSequence.length - 1;

  if (playerSequence[expectedSequence] !== currentSequence[expectedSequence]) {
    gameOver();
    return;
  }

  if (playerSequence.length === currentSequence.length) {
    nextLevel();
  }
}

function nextLevel() {
  level++;
  playerSequence = [];
  currentSequence = createSequenceArray(level);
  displayCurrentLevel();
  showHints(currentSequence);
  playSequence(currentSequence);
}

function gameOver() {
  playerSequence = [];
  currentSequence = [];
  disableGameBoardButtons();

  if (level > highscore) {
    highscore = level - 1;
    saveHighscore();
  }
  displayGameOver();
  displayHighscore();
  shouldShowHints = false;
  showHints(currentSequence);
  resetGameButtonLabels();
  updateHintsButtonText();
  level = 1;
  hideCurrentLevel();
  enableMenuButtons();
}

function showHints(roundSequence) {
  if (shouldShowHints) {
    document.querySelector("#hintsoutput").textContent =
      "Hint: " + roundSequence;
    console.log(roundSequence);
  } else {
    document.querySelector("#hintsoutput").textContent = "";
  }
}
