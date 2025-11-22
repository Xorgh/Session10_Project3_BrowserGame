let level = 1;
let highscore = 0;
let currentSequence = [];
let playerSequence = [];
const testSequence = [2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2];
let currentIndex = 0;
let shouldShowHints = false;
const NOTE_DELAY = 1000;      // Delay before each note (ms)
const NOTE_DURATION = 300;     // How long each note plays before next (ms)
const SEQUENCE_END_DELAY = 500;

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
