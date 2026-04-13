const body = document.body;
const btn = document.getElementById("theme-btn");
const bar = document.getElementById("scroll-prog");
const scrollBody = document.getElementById("scroll-body");
const botRod = document.getElementById("bot-rod");
const lanternLayer = document.getElementById("lantern-layer");

const cursor = document.getElementById("ink-cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

window.addEventListener("scroll", () => {
  const pct =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);
  bar.style.transform = "scaleY(" + pct + ")";
  document.querySelectorAll(".section").forEach((s) => {
    if (s.getBoundingClientRect().top < window.innerHeight * 0.85)
      s.classList.add("vis");
  });
});
document.querySelectorAll(".section").forEach((s) => {
  if (s.getBoundingClientRect().top < window.innerHeight * 0.85)
    s.classList.add("vis");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const el = document.getElementById(link.getAttribute("href").slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
});

setTimeout(() => {
  scrollBody.classList.add("open");
  function fixRod() {
    botRod.style.top = scrollBody.clientHeight + "px";
    botRod.style.bottom = "auto";
  }
  setTimeout(fixRod, 100);
  setTimeout(fixRod, 800);
  setTimeout(fixRod, 1500);
}, 400);

function makeLanternSVG(w, h, col) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 40 ${h + 10}" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="0" x2="20" y2="8" stroke="${col}" stroke-width="1.5"/>
    <line x1="14" y1="8" x2="26" y2="8" stroke="${col}" stroke-width="1.5"/>
    <ellipse cx="20" cy="12" rx="10" ry="4" fill="${col}" opacity="0.9"/>
    <rect x="10" y="12" width="20" height="${h - 14}" rx="2" fill="${col}" opacity="0.85"/>
    <line x1="12" y1="${12 + (h - 14) * 0.25}" x2="28" y2="${12 + (h - 14) * 0.25}" stroke="rgba(255,220,120,0.4)" stroke-width="0.8"/>
    <line x1="12" y1="${12 + (h - 14) * 0.5}" x2="28" y2="${12 + (h - 14) * 0.5}" stroke="rgba(255,220,120,0.4)" stroke-width="0.8"/>
    <line x1="12" y1="${12 + (h - 14) * 0.75}" x2="28" y2="${12 + (h - 14) * 0.75}" stroke="rgba(255,220,120,0.4)" stroke-width="0.8"/>
    <ellipse cx="20" cy="${h - 2}" rx="10" ry="4" fill="${col}" opacity="0.9"/>
    <line x1="16" y1="${h + 2}" x2="24" y2="${h + 2}" stroke="${col}" stroke-width="1.5"/>
    <line x1="17" y1="${h + 2}" x2="16" y2="${h + 8}" stroke="rgba(255,200,80,0.6)" stroke-width="1"/>
    <line x1="20" y1="${h + 2}" x2="20" y2="${h + 9}" stroke="rgba(255,200,80,0.6)" stroke-width="1"/>
    <line x1="23" y1="${h + 2}" x2="24" y2="${h + 8}" stroke="rgba(255,200,80,0.6)" stroke-width="1"/>
    <ellipse cx="20" cy="${12 + (h - 14) * 0.5}" rx="7" ry="9" fill="rgba(255,200,60,0.18)"/>
  </svg>`;
}

const lanternConfigs = [
  {
    left: "5%",
    top: "-20px",
    dur: "4.2s",
    tilt: "-4deg",
    size: 44,
    delay: "0s",
  },
  {
    left: "18%",
    top: "-40px",
    dur: "3.8s",
    tilt: "3deg",
    size: 52,
    delay: ".4s",
  },
  {
    left: "32%",
    top: "-10px",
    dur: "5.1s",
    tilt: "-2deg",
    size: 40,
    delay: ".9s",
  },
  {
    left: "48%",
    top: "-35px",
    dur: "4.5s",
    tilt: "4deg",
    size: 56,
    delay: ".2s",
  },
  {
    left: "63%",
    top: "-15px",
    dur: "3.5s",
    tilt: "-3deg",
    size: 44,
    delay: ".7s",
  },
  {
    left: "77%",
    top: "-30px",
    dur: "4.8s",
    tilt: "2deg",
    size: 50,
    delay: "1.1s",
  },
  {
    left: "90%",
    top: "-20px",
    dur: "4.0s",
    tilt: "-4deg",
    size: 42,
    delay: ".5s",
  },
];

const colors = ["#c0392b", "#a82010", "#d44020", "#b83018"];

lanternConfigs.forEach((cfg, i) => {
  const col = colors[i % colors.length];
  const h = cfg.size + 20;

  const glow = document.createElement("div");
  glow.className = "lantern-glow";
  glow.style.cssText = `left:calc(${cfg.left} + 12px);top:${parseInt(cfg.top) + 30}px;width:${cfg.size * 3}px;height:${cfg.size * 3}px;margin-left:-${cfg.size * 1.5}px;--gdur:${parseFloat(cfg.dur) + 0.5}s`;
  lanternLayer.appendChild(glow);

  const el = document.createElement("div");
  el.className = "lantern";
  el.style.cssText = `left:${cfg.left};top:${cfg.top};--dur:${cfg.dur};--tilt:${cfg.tilt};animation-delay:${cfg.delay}`;
  el.innerHTML = makeLanternSVG(cfg.size, h, col);
  lanternLayer.appendChild(el);
});

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
