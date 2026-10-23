// Annie Lord Design — demo script

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const toggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => nav.classList.toggle("open"));

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") nav.classList.remove("open");
});

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
