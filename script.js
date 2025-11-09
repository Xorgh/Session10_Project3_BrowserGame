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

function playSound(i) {
  if (sounds[i]) {
    sounds[i].currentTime = 0;
    sounds[i].play();
  }
}

// Your code here
const buttons = document.querySelectorAll("button");
console.log(buttons.length);

// const button1 = buttons[0];
// button1.addEventListener("click", handleEvent)

// function handleEvent() {
//     playSound(0)
// }

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => playSound(i));
}

document.addEventListener("keypress", function (e) {
  if (e.key > 0 && e.key < 10) {
    const index = e.key - 1;

    buttons[index].click();

    buttons[index].classList.add("active");
    buttons[index].focus();

    setTimeout(() => {
      buttons[index].classList.remove("active");
      buttons[index].blur();
    }, 150);
  }
});
