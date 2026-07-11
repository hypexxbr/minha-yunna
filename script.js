// ---------- contador de dias juntos ----------
// AJUSTE AQUI se vocês estão juntos há mais tempo (o ano abaixo assume
// a ocorrência mais recente de 26 de maio). Formato: ANO, MES-1, DIA
const START_DATE = new Date(2026, 4, 26); // 26 de maio de 2026

function updateCounter() {
  const now = new Date();
  const diffMs = now - START_DATE;
  const days = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
  const el = document.getElementById("dayCount");
  const label = document.getElementById("dayLabel");
  if (el) el.textContent = days;
  if (label) label.textContent = days === 1
    ? "dia juntos desde 26 de maio"
    : "dias juntos desde 26 de maio";
}
updateCounter();

// ---------- campo de estrelas ----------
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight;
  buildStars();
}

function buildStars() {
  const count = Math.floor((canvas.width * canvas.height) / 9000);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.3 + 0.2,
    phase: Math.random() * Math.PI * 2,
    speed: 0.4 + Math.random() * 0.6,
  }));
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function draw(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f6efe4";
  for (const s of stars) {
    const twinkle = reduceMotion ? 0.7 : 0.5 + 0.5 * Math.sin(t * 0.001 * s.speed + s.phase);
    ctx.globalAlpha = 0.15 + twinkle * 0.55;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  if (!reduceMotion) requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);
resize();
requestAnimationFrame(draw);
if (reduceMotion) draw(0);

// ---------- mini player flutuante ----------
const miniToggle = document.getElementById("miniPlayerToggle");
const miniPanel = document.getElementById("miniPlayerPanel");
if (miniToggle && miniPanel) {
  miniToggle.addEventListener("click", () => {
    const isHidden = miniPanel.hasAttribute("hidden");
    if (isHidden) {
      miniPanel.removeAttribute("hidden");
      miniToggle.setAttribute("aria-expanded", "true");
    } else {
      miniPanel.setAttribute("hidden", "");
      miniToggle.setAttribute("aria-expanded", "false");
    }
  });
}