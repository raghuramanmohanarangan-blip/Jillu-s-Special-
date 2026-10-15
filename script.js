/* PERSONALISE THIS FILE BEFORE PUBLISHING.
   This front-end password is only a playful gate, NOT secure authentication.
   Anyone who views the source can discover it. Do not put private information here. */
const CONFIG = {
  password: "kannammaa1111", // Change this to your private shared word/date.
  birthday: "2026-11-11",
  birthdayName: "Kannammaa"
};

const $ = (selector) => document.querySelector(selector);
const loginScreen = $("#loginScreen");
const birthdaySite = $("#birthdaySite");
const loginForm = $("#loginForm");
const passwordInput = $("#password");
const loginError = $("#loginError");
const loginHint = $("#loginHint");
const toast = $("#toast");
let toastTimer;
let candlesBlown = false;
let surpriseOpened = false;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

loginHint.textContent = "Hint: the password you chose for your little secret.";
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passwordInput.value.trim().toLocaleLowerCase() === CONFIG.password.toLocaleLowerCase()) {
    loginError.hidden = true;
    loginScreen.classList.add("unlocking");
    loginScreen.style.transition = "opacity .65s ease, transform .65s ease";
    loginScreen.style.opacity = "0";
    loginScreen.style.transform = "scale(.98)";
    setTimeout(() => {
      loginScreen.hidden = true;
      birthdaySite.hidden = false;
      document.body.classList.add("unlocked");
      observeReveals();
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 650);
  } else {
    loginError.hidden = false;
    passwordInput.value = "";
    passwordInput.focus();
  }
});

function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach((el) => observer.observe(el));
}

$("#openLetter").addEventListener("click", () => {
  const button = $("#openLetter");
  const content = $("#letterContent");
  const opening = content.hidden;
  content.hidden = !opening;
  button.setAttribute("aria-expanded", String(opening));
  $("#envelopeLabel").textContent = opening ? "Your letter is open ♡" : "Open your letter";
  if (opening) {
    setTimeout(() => content.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
  }
});

function makeConfetti(count = 90) {
  const colors = ["#f2a8c8", "#ffe7a8", "#fff2f4", "#c879a7", "#d8a9ff"];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > .5 ? "50%" : "2px";
    piece.style.setProperty("--fall", `${2.2 + Math.random() * 2.5}s`);
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.animationDelay = `${Math.random() * .8}s`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 6000);
  }
}

$("#wishButton").addEventListener("click", () => {
  if (candlesBlown) {
    showToast("Your wish is already on its way, Kannammaa ✨");
    return;
  }
  candlesBlown = true;
  document.querySelectorAll(".candle").forEach((candle, index) => {
    setTimeout(() => candle.classList.add("out"), index * 180);
  });
  $("#wishMessage").textContent = "May your sweetest wishes find their way to you. ♡";
  $("#wishButton").textContent = "Wish sent into the universe ✨";
  makeConfetti(110);
});

$("#revealSurprise").addEventListener("click", () => {
  const content = $("#finalMessage");
  if (!surpriseOpened) {
    content.hidden = false;
    surpriseOpened = true;
    $("#revealSurprise").textContent = "Your surprise is unlocked ♡";
    makeConfetti(65);
    setTimeout(() => content.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
  } else {
    content.hidden = !content.hidden;
  }
});

// Audio only plays after a user action. Add a licensed/local music.mp3 to enable it.
const audio = $("#backgroundMusic");
$("#musicToggle").addEventListener("click", async () => {
  const button = $("#musicToggle");
  const source = audio.querySelector("source");
  if (!source) {
    showToast("Add your chosen song as music.mp3 to enable music 🎵");
    return;
  }
  if (audio.paused) {
    try {
      await audio.play();
      button.setAttribute("aria-pressed", "true");
      button.innerHTML = "♫ <span>Pause our song</span>";
    } catch {
      showToast("Tap again to allow music to play.");
    }
  } else {
    audio.pause();
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = "♫ <span>Play our song</span>";
  }
});

// Friendly birthday greeting based on the visitor's device date.
function localDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
if (localDateKey(new Date()) === CONFIG.birthday) {
  document.title = "Happy Birthday, Kannammaa ❤️";
}

// Small enhancement: images that fail to load show a clear fallback instead of a broken icon.
document.querySelectorAll(".memory-card img").forEach((img) => {
  img.addEventListener("error", () => {
    img.style.display = "none";
    img.parentElement.style.background = "linear-gradient(135deg,#46243f,#251327)";
  });
});
