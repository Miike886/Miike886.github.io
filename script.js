const openExperienceBtn = document.getElementById("openExperienceBtn");
const introLetter = document.getElementById("introLetter");
const mainCard = document.getElementById("mainCard");
const hearts = document.getElementById("hearts");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noWrapper = document.getElementById("noWrapper");
const letterWindow = document.getElementById("letterWindow");
const closeBtn = document.getElementById("closeBtn");

function createHearts(total) {
  for (let i = 0; i < total; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";

    const left = Math.random() * 100;
    const size = 10 + Math.random() * 18;
    const duration = 8 + Math.random() * 10;
    const delay = -Math.random() * duration;
    const opacity = 0.3 + Math.random() * 0.5;

    heart.style.left = `${left}vw`;
    heart.style.bottom = "-30px";
    heart.style.setProperty("--size", `${size}px`);
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;
    heart.style.opacity = opacity.toFixed(2);

    hearts.appendChild(heart);
  }
}

function moveNoButton() {
  const x = Math.floor(Math.random() * 260) - 130;
  const y = Math.floor(Math.random() * 120) - 60;
  noWrapper.style.transform = `translate(${x}px, ${y}px)`;
}

function openLetter() {
  letterWindow.classList.add("open");
  letterWindow.setAttribute("aria-hidden", "false");
}

function closeLetter() {
  letterWindow.classList.remove("open");
  letterWindow.setAttribute("aria-hidden", "true");
}

function showMainInterface() {
  introLetter.classList.add("hidden");
  mainCard.classList.remove("hidden");
}

createHearts(48);

openExperienceBtn.addEventListener("click", showMainInterface);
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton, { passive: true });
yesBtn.addEventListener("click", openLetter);
closeBtn.addEventListener("click", closeLetter);
letterWindow.addEventListener("click", (event) => {
  if (event.target === letterWindow) {
    closeLetter();
  }
});
