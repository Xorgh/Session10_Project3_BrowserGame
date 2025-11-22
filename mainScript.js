let level = 1;
let highscore = 0;
let currentSequence = [];
let playerSequence = [];
let testSequence = [8, 7, 6, 5, 4, 3, 2, 1, 0];
let currentIndex = 0;
let shouldShowHints = false;

setupButtons();
disableGameBoardButtons();

const sounds = [
  new Audio(
    "https://github.com/KasperKnop/WEB1/raw/refs/heads/main/resources/sounds/c4.mp3"
  ),
  new Audio(
    "https://github.com/KasperKnop/WEB1/raw/refs/heads/main/resources/sounds/d4.mp3"
  ),
  new Audio(
    "https://github.com/KasperKnop/WEB1/raw/refs/heads/main/resources/sounds/e4.mp3"
  ),
  new Audio(
    "https://github.com/KasperKnop/WEB1/raw/refs/heads/main/resources/sounds/f4.mp3"
  ),
  new Audio(
    "https://github.com/KasperKnop/WEB1/raw/refs/heads/main/resources/sounds/g4.mp3"
  ),
  new Audio(
    "https://github.com/KasperKnop/WEB1/raw/refs/heads/main/resources/sounds/a4.mp3"
  ),
  new Audio(
    "https://github.com/KasperKnop/WEB1/raw/refs/heads/main/resources/sounds/b4.mp3"
  ),
  new Audio(
    "https://github.com/KasperKnop/WEB1/raw/refs/heads/main/resources/sounds/c5.mp3"
  ),
  new Audio(
    "https://github.com/KasperKnop/WEB1/raw/refs/heads/main/resources/sounds/d5.mp3"
  ),
];

initialHighscoreCheck();
displayHighscore();
