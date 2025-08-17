// Lancement après chargement de la page
window.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  const music = document.getElementById("bg-music");

  const start = () => {
    // Essaye de lancer la musique
    music.play().catch((err) => {
      console.warn("Musique bloquée :", err);
    });

    // Cache l'écran noir
    startScreen.style.display = "none";

    // Démarre les éléments qui tombent
    startFalling();

    // Supprime les écouteurs
    startScreen.removeEventListener("click", start);
    startScreen.removeEventListener("touchstart", start);
  };

  startScreen.addEventListener("click", start);
  startScreen.addEventListener("touchstart", start);
});

function startFalling() {
  const container = document.getElementById("falling-container");

  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.png",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg",
    "31.jpg",
    "32.jpg",
    "33.jpg",
    "34.jpg"

  ];

 function createFallingElement() {
  const isImage = Math.random() < 0.7; // 70% image, 30% texte
  const el = document.createElement(isImage ? "img" : "div");

  let duration;
  if (isImage) {
    el.src = images[Math.floor(Math.random() * images.length)];
    el.classList.add("falling", "image");
    duration = 10 + Math.random() * 8;
  } else {
    const textes = [
      "La plus belle❤️",
      "Mon bb",
      "Mon amoureuse❤️",
      "Ma chérie",
      "Je t’aime ❤️❤️"
    ];
    el.textContent = textes[Math.floor(Math.random() * textes.length)];
    el.classList.add("falling", "text");
    duration = 8 + Math.random() * 6;
  }

  const left = Math.random() * window.innerWidth;

  el.style.left = `${left}px`;
  el.style.top = `-100px`;
  el.style.animationDuration = `${duration}s`;

  container.appendChild(el);

  // Supprimer après animation
  setTimeout(() => {
    el.remove();
  }, duration * 1000);
}

  // Crée un élément toutes les 400ms
  setInterval(createFallingElement, 400);
}