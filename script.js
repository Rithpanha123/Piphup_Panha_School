const words = [
  // "Hi, my name's Panha...!",
  // "I am a Developer.",
  // "Welcome to my website.",
];

let i = 0;
let j = 0;
let isDeleting = false;

const speed = 100; // ល្បឿនវាយ
const pause = 1200; // ពេលព្យួរមុនពេលលុប

const textEl = document.getElementById("text");

function type() {
  const current = words[i];

  if (isDeleting) {
    textEl.textContent = current.substring(0, j--);
  } else {
    textEl.textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, pause);
    return;
  }

  if (isDeleting && j < 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    j = 0;
  }

  setTimeout(type, speed);
}

type();
