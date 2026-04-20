const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "Light" : "Moon";
  });
}

const bubbleContainer = document.querySelector(".bubbles");

if (bubbleContainer) {
  for (let i = 0; i < 20; i += 1) {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");

    const size = Math.random() * 90 + 24;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 12 + 14}s`;
    bubble.style.animationDelay = `${Math.random() * 8}s`;
    bubble.style.opacity = `${Math.random() * 0.4 + 0.15}`;

    bubbleContainer.appendChild(bubble);
  }
}

const revealItems = document.querySelectorAll(".reveal, .timeline-item, .vision-panel");

if (revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}