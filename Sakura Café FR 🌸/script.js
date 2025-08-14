// 🌸 Animation pétales Sakura
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  const size = Math.random() * 8 + 8; // taille pétale
  petal.style.width = `${size}px`;
  petal.style.height = `${size * 0.8}px`;
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.background = Math.random() > 0.5 ? "#ff72c6" : "#5ab4ff";
  petal.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.getElementById("petals").appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}
setInterval(createPetal, 300);

// 🎯 Modal Créateur
const creatorBtn = document.getElementById("creatorBtn");
const creatorModal = document.getElementById("creatorModal");
const closeModal = document.getElementById("closeModal");

creatorBtn.addEventListener("click", () => {
  creatorModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  creatorModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === creatorModal) {
    creatorModal.style.display = "none";
  }
});

// 📤 Envoi formulaire au Webhook Discord
document.getElementById("applyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  let message = "**Nouvelle candidature Sakura Café FR 🌸**\\n\\n";
  formData.forEach((value, key) => {
    message += `**${key}** : ${value}\\n`;
  });

  fetch("https://discord.com/api/webhooks/1405668776606961685/LfCggajdPwZX5h2HHjSZC88cxIkeZY6mrpwlztw6exymjGg631MfwRcb_dFU89GIaULm", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: message
    })
  })
  .then(res => {
    if (res.ok) {
      alert("Candidature envoyée avec succès 🌸");
      this.reset();
    } else {
      alert("Erreur lors de l'envoi ❌");
    }
  })
  .catch(() => alert("Erreur de connexion au webhook ❌"));
});
