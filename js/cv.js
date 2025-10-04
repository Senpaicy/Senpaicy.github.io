document.querySelectorAll(".section-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    const content = toggle.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
