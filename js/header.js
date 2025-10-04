// Highlight current page
document.querySelectorAll("nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Mobile toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
