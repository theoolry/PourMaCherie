// --- Lancement après chargement de la page ---
window.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  const music = document.getElementById("bg-music");
  const glow = document.getElementById("glow");
  const container = document.getElementById("falling-container");
  const scrollText = document.querySelector(".scroll-text");

  window.purpleActive = false; 
  scrollText.style.opacity = "0"; // texte central invisible au départ
  let scrollStarted = false;

  const start = () => {
    music.play().catch((err) => console.warn("Musique bloquée :", err));
    startScreen.style.display = "none";
    startFalling();
    startScreen.removeEventListener("click", start);
    startScreen.removeEventListener("touchstart", start);
  };

  startScreen.addEventListener("click", start);
  startScreen.addEventListener("touchstart", start);

  music.addEventListener("timeupdate", () => {
    if (!scrollStarted && music.currentTime >= 18) {
      scrollStarted = true;
      window.purpleActive = true;

      // Glow violet rapide
      glow.style.transition = "background 0.8s ease-out, opacity 0.8s ease-out";
      glow.style.background = "radial-gradient(circle at center, rgba(186,85,211,0.4) 0%, rgba(148,0,211,0.25) 50%, transparent 80%)";
      setTimeout(() => { glow.style.opacity = "0.5"; }, 50);

      // Texte central visible et animation
      scrollText.style.transition = "opacity 1s";
      scrollText.style.opacity = "1";

      const scrollDuration = 100 * 1000;
      scrollText.style.animation = `scrollUp ${scrollDuration/1000}s linear forwards`;

      setTimeout(() => {
        scrollText.style.opacity = "0";
        launchFinalSequence();
      }, scrollDuration * 0.9);
    }
  });
});

// --- Fonction pour créer les éléments qui tombent ---
function startFalling() {
  const container = document.getElementById("falling-container");
  const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.png","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg","31.jpg","32.jpg","33.jpg","34.jpg"];
  const rareImages = ["tort1.gif","gif1.gif","tortueplage.jpg"];

  function getRandomImage() {
    if (Math.random() < 0.6) {
      return images[Math.floor(Math.random() * images.length)];
    } else {
      return rareImages[Math.floor(Math.random() * rareImages.length)];
    }
  }

  function createFallingElement() {
    const isImage = Math.random() < 0.7;
    const el = document.createElement(isImage ? "img" : "div");
    let duration;

    if (isImage) {
      el.src = getRandomImage();
      el.classList.add("falling", "image");
      duration = 10 + Math.random() * 8;
    } else {
      const textes = ["La plus belle❤️","Mon bb","Mon amoureuse❤️","Ma chérie","Je t’aime ❤️❤️","Ma princesse ❤️❤️"];
      el.textContent = textes[Math.floor(Math.random() * textes.length)];
      el.classList.add("falling", "text");
      duration = 8 + Math.random() * 6;
    }

    el.style.left = `${Math.random() * window.innerWidth}px`;
    el.style.top = "-100px";
    el.style.animationDuration = `${duration}s`;
    container.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000);
  }

  setInterval(createFallingElement, 400);
}

// --- Texte spécial qui tombe très souvent ---
function createSpecialText() {
  const container = document.getElementById("falling-container");
  const el = document.createElement("div");
  el.classList.add("falling", "special-text");
  el.textContent = "𝒥𝑒 𝓉'𝒶𝒾𝓂𝑒 𝓉𝓇𝑜𝓅𝓅𝓅𝓅𝓅𝓅𝓅 ღ ღ 𓆉";

  if (window.purpleActive) {
    el.style.color = "#BA55D3";
    el.style.textShadow = "0 0 10px rgba(186,85,211,0.8), 0 0 20px rgba(148,0,211,0.6)";
  }

  el.style.left = `${Math.random() * window.innerWidth}px`;
  el.style.top = "-100px";
  el.style.animationDuration = `${20 + Math.random() * 10}s`;
  container.appendChild(el);
  setTimeout(() => el.remove(), (20 + Math.random() * 10) * 1000);
}

setInterval(createSpecialText, 200);

// --- Séquence finale après le texte central ---
function launchFinalSequence() {
  const container = document.getElementById("falling-container");

  // 1️⃣ Texte central bleu
  const finalText = document.createElement("div");
  finalText.textContent = "𝓓𝒆 𝓵𝓪 𝓹𝓪𝓻𝓽 𝓭𝒆 𝓽𝓸𝓷 𝓬𝓱𝓪𝓽𝓸𝓷";
  finalText.style.position = "fixed";
  finalText.style.top = "50%";
  finalText.style.left = "50%";
  finalText.style.transform = "translate(-50%, -50%)";
  finalText.style.fontSize = "3em";
  finalText.style.color = "#00BFFF";
  finalText.style.textShadow = "0 0 10px #00BFFF, 0 0 20px #1E90FF";
  finalText.style.opacity = "0";
  finalText.style.transition = "opacity 0.5s";
  container.appendChild(finalText);

  setTimeout(() => { finalText.style.opacity = "1"; }, 100);
  setTimeout(() => { finalText.style.opacity = "0"; }, 3100);
  setTimeout(() => { finalText.remove(); }, 3600);

  // 2️⃣ Images au centre en fondu, contours légèrement flous
 // Images au centre en fondu, bords légèrement flous
const images = ["6.jpg","9.jpg","10.jpg","11.jpg","12.jpg"];
images.forEach((imgSrc, index) => {
  setTimeout(() => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.style.position = "fixed";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
    img.style.width = "200px";
    img.style.height = "auto";
    img.style.opacity = "0";
    img.style.transition = "opacity 0.8s";

    // ✅ Très léger flou sur les bords
    img.style.boxShadow = "0 0 5px 2px rgba(255,255,255,0.2)";
    img.style.borderRadius = "3px"; // coins légèrement arrondis

    container.appendChild(img);
    setTimeout(() => { img.style.opacity = "1"; }, 50);
  }, 3700 + index * 2000); // délai entre images
});

}
