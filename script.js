const themeToggle = document.getElementById("theme-toggle");

const updateThemeToggle = () => {
  if (!themeToggle) return;
  themeToggle.textContent = document.body.classList.contains("dark") ? "\uD83C\uDF11" : "\uD83C\uDF15";
};

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateThemeToggle();
  });
}

updateThemeToggle();

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

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    if (formStatus) {
      formStatus.textContent = "Envoi en cours...";
    }

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        contactForm.reset();
        if (formStatus) {
          formStatus.textContent = "Merci, votre message a bien ete envoye.";
        }
      } else {
        if (formStatus) {
          formStatus.textContent = "Une erreur est survenue. Reessaie dans un instant.";
        }
      }
    } catch (error) {
      if (formStatus) {
        formStatus.textContent = "Impossible d'envoyer le message pour le moment.";
      }
    }
  });
}
