const themeToggle = document.getElementById("theme-toggle");
const langToggle = document.getElementById("lang-toggle");
const pageName = document.body.dataset.page;

const translations = {
  index: {
    fr: {
      "nav.home": "Accueil",
      "nav.identity": "Identite",
      "nav.skills": "Competences",
      "nav.tech": "Tech Projects",
      "nav.studio": "Game Studio",
      "nav.vision": "Vision",
      "nav.roadmap": "Roadmap",
      "nav.contact": "Contact",

      "hero.eyebrow": "Portfolio creatif",
      "hero.title": "Je construis un profil tech avec une vraie vision jeu video.",
      "hero.text": "Je m'appelle Adam Ben Nejma. J'aime le code, le hardware, le design propre et surtout l'idee de creer des mondes interactifs forts.",
      "hero.cta_games": "Voir mes concepts de jeux",
      "hero.cta_vision": "Voir ma vision",
      "hero.metric_games": "concepts de jeux",
      "hero.metric_studio": "vision de studio",
      "hero.metric_learning": "apprentissage concret",
      "hero.panel_label": "Bulle vision",
      "hero.panel_text": "Je veux creer mon propre studio de jeux video, avec des jeux narratifs, des mondes vivants et une facon plus humaine de concevoir, produire et partager.",

      "identity.eyebrow": "Identite",
      "identity.title": "Un profil entre technologie, design et ambition creative.",
      "identity.text_1": "Depuis petit, je m'interesse au hardware, a la programmation et a la maniere dont une bonne idee peut devenir un vrai projet.",
      "identity.text_2": "Mon objectif n'est pas seulement d'apprendre des outils. Je veux construire une vision solide melangeant developpement, esthetique, narration et game design.",
      "identity.showcase_title": "Ce que je veux montrer",
      "identity.trait_1": "Creativite et envie de construire",
      "identity.trait_2": "Curiosite pour le code, le design et les systemes",
      "identity.trait_3": "Volonte de creer un studio et des licences originales",
      "identity.trait_4": "Progression constante sur des projets concrets",

      "skills.eyebrow": "Competences",
      "skills.title": "Des bases techniques solides avec une direction orientee creation.",
      "skills.tag_code": "Code",
      "skills.tag_logic": "Logic",
      "skills.tag_design": "Design",
      "skills.tag_hardware": "Hardware",
      "skills.web_title": "Developpement web",
      "skills.web_text": "HTML, CSS, JavaScript, interfaces interactives et animations front-end.",
      "skills.programming_title": "Programmation",
      "skills.programming_text": "Python, algorithmique et reflexion structuree pour transformer une idee en systeme.",
      "skills.design_title": "UI / UX",
      "skills.design_text": "Gout pour les interfaces propres, lisibles, modernes et inspirees d'une finition premium.",
      "skills.hardware_title": "PC & optimisation",
      "skills.hardware_text": "Assemblage, configuration, tests et comprehension des composants et performances.",

      "tech.eyebrow": "Tech Projects",
      "tech.title": "Mes projets techniques pour apprendre, tester et progresser.",
      "tech.project_1_title": "Portfolio web",
      "tech.project_1_text": "Un site personnel moderne avec navigation fluide, animations et presentation plus premium.",
      "tech.project_2_title": "PC hardware",
      "tech.project_2_text": "Montage, optimisation et analyse des performances sur des configurations personnelles.",
      "tech.project_3_title": "App mobile",
      "tech.project_3_text": "Prototype mobile pour experimenter la logique applicative et le design d'interface.",
      "tech.project_4_title": "Arduino",
      "tech.project_4_text": "Petits systemes automatises, capteurs et experimentation autour de l'electronique.",
      "tech.project_5_title": "Exploration IA",
      "tech.project_5_text": "Tests de scripts et premieres explorations autour de l'intelligence artificielle.",

      "studio.eyebrow": "Game Studio",
      "studio.title": "Un studio que je veux construire autour du sens, du respect et de la memoire du jeu.",
      "studio.bubble": "Je veux creer un studio de jeux video base entre Plan-de-Cuques et Marseille, avec une vraie identite culturelle, des jeux narratifs forts et une maniere plus humaine de travailler.",
      "studio.game_1_tag": "Jeu 1",
      "studio.game_1_text": "Un thriller d'espionnage moderne autour d'un heritage secret. Chaque mission transforme les factions, les alliances et la memoire du monde.",
      "studio.game_2_tag": "Jeu 2",
      "studio.game_2_text": "Une ville inspiree de Paris, des quartiers sous tension, et un avocat capable d'utiliser la loi, l'influence et la peur comme armes.",
      "studio.game_3_tag": "Jeu 3",
      "studio.game_3_text": "Un royaume gothique, des vampires, un complot royal et une progression fondee sur la furtivite, le parkour et les choix moraux.",
      "studio.system_eyebrow": "Vendetta System",
      "studio.system_title": "Une IA de memoire persistante",
      "studio.system_text": "Le Vendetta System est une architecture d'IA comportementale persistante. Les ennemis se souviennent, changent de statut, s'adaptent au style du joueur et peuvent revenir plus tard avec de nouvelles strategies.",
      "studio.system_trait_1": "Memoire des affronts, humiliations et pertes",
      "studio.system_trait_2": "Hierarchie dynamique et promotions organiques",
      "studio.system_trait_3": "Represailles adaptees au style du joueur",
      "studio.system_trait_4": "Impact durable sur les factions et la sauvegarde",
      "studio.creation_eyebrow": "Creation",
      "studio.creation_title": "Le studio et ses racines",
      "studio.creation_text": "Ma vision part de Marseille et Plan-de-Cuques. Je veux creer en France, en VO francaise, avec une identite nourrie par des cultures reelles, des sujets humains et une volonte de transmission.",
      "studio.creation_trait_1": "Origines locales et ancrage culturel",
      "studio.creation_trait_2": "VO francaise et ouverture internationale",
      "studio.creation_trait_3": "Creation ambitieuse meme avec peu de moyens au depart",
      "studio.creation_trait_4": "Respect des joueurs, des equipes et du sens des projets",

      "vision.eyebrow": "Vision",
      "vision.title": "Un studio plus humain, plus juste et plus proche des joueurs.",
      "vision.card_1_title": "Le studio",
      "vision.card_1_text": "Je veux construire un studio de developpement qui defend des jeux ambitieux, culturels et accessibles, sans suivre les abus habituels de l'industrie.",
      "vision.card_2_title": "Les employes",
      "vision.card_2_text": "Mon objectif est de creer un cadre de travail plus humain : respect, egalite, sante, soutien concret, transmission et meilleures conditions de vie.",
      "vision.card_3_title": "Les joueurs",
      "vision.card_3_text": "Je veux proposer des jeux honnetes, des prix plus accessibles, des editions physiques avec du vrai contenu et une relation basee sur la confiance.",
      "vision.manifesto_eyebrow": "Manifeste",
      "vision.manifesto_title": "Ma vision du studio",
      "vision.manifesto_text": "Je veux prouver qu'un studio peut etre ambitieux sans devenir froid. Les jeux doivent avoir une ame, les employes doivent etre respectes, et les joueurs ne doivent pas etre traites comme de simples portefeuilles.",
      "vision.values_eyebrow": "Valeurs",
      "vision.values_title": "Ce que je veux defendre",
      "vision.value_1": "Accessibilite, respect et prix plus justes",
      "vision.value_2": "Culture, identite et sujets qui comptent vraiment",
      "vision.value_3": "Transmission vers les jeunes et nouveaux createurs",
      "vision.value_4": "Un studio ou l'humain compte autant que le resultat",

      "contact.eyebrow": "Contact",
      "contact.title": "Discutons d'un projet, d'une idee ou d'une collaboration.",
      "contact.note": "Ouvert aux echanges autour du web, de la tech et de la creation de jeux video.",
      "contact.name_label": "Nom",
      "contact.name_placeholder": "Votre nom",
      "contact.email_label": "Email",
      "contact.email_placeholder": "Votre email",
      "contact.message_label": "Message",
      "contact.message_placeholder": "Votre message",
      "contact.send": "Envoyer",

      "footer.text": "\u00A9 2026 Adam Ben Nejma - Portfolio personnel et vision game studio.",
      "document.title": "Adam Ben Nejma | Portfolio"
    },
    en: {
      "nav.home": "Home",
      "nav.identity": "Identity",
      "nav.skills": "Skills",
      "nav.tech": "Tech Projects",
      "nav.studio": "Game Studio",
      "nav.vision": "Vision",
      "nav.roadmap": "Roadmap",
      "nav.contact": "Contact",

      "hero.eyebrow": "Creative portfolio",
      "hero.title": "I am building a tech profile with a real video game vision.",
      "hero.text": "My name is Adam Ben Nejma. I love code, hardware, clean design, and above all the idea of creating strong interactive worlds.",
      "hero.cta_games": "See my game concepts",
      "hero.cta_vision": "See my vision",
      "hero.metric_games": "game concepts",
      "hero.metric_studio": "studio vision",
      "hero.metric_learning": "hands-on learning",
      "hero.panel_label": "Vision bubble",
      "hero.panel_text": "I want to create my own game studio, with narrative games, living worlds, and a more human way to design, produce, and share.",

      "identity.eyebrow": "Identity",
      "identity.title": "A profile between technology, design, and creative ambition.",
      "identity.text_1": "Since I was young, I have been interested in hardware, programming, and the way a good idea can become a real project.",
      "identity.text_2": "My goal is not just to learn tools. I want to build a strong vision combining development, aesthetics, narrative, and game design.",
      "identity.showcase_title": "What I want to show",
      "identity.trait_1": "Creativity and the drive to build",
      "identity.trait_2": "Curiosity for code, design, and systems",
      "identity.trait_3": "The will to create a studio and original IPs",
      "identity.trait_4": "Constant progress through real projects",

      "skills.eyebrow": "Skills",
      "skills.title": "Strong technical foundations with a creation-oriented direction.",
      "skills.tag_code": "Code",
      "skills.tag_logic": "Logic",
      "skills.tag_design": "Design",
      "skills.tag_hardware": "Hardware",
      "skills.web_title": "Web development",
      "skills.web_text": "HTML, CSS, JavaScript, interactive interfaces, and front-end animations.",
      "skills.programming_title": "Programming",
      "skills.programming_text": "Python, algorithms, and structured thinking to turn an idea into a system.",
      "skills.design_title": "UI / UX",
      "skills.design_text": "A taste for clean, readable, modern interfaces inspired by a premium finish.",
      "skills.hardware_title": "PC & optimization",
      "skills.hardware_text": "Assembly, configuration, testing, and understanding of components and performance.",

      "tech.eyebrow": "Tech Projects",
      "tech.title": "My technical projects to learn, test, and keep progressing.",
      "tech.project_1_title": "Web portfolio",
      "tech.project_1_text": "A modern personal website with smooth navigation, animations, and a more premium presentation.",
      "tech.project_2_title": "PC hardware",
      "tech.project_2_text": "Building, optimizing, and analyzing performance on personal configurations.",
      "tech.project_3_title": "Mobile app",
      "tech.project_3_text": "A mobile prototype to experiment with application logic and interface design.",
      "tech.project_4_title": "Arduino",
      "tech.project_4_text": "Small automated systems, sensors, and experiments around electronics.",
      "tech.project_5_title": "AI exploration",
      "tech.project_5_text": "Script testing and first explorations around artificial intelligence.",

      "studio.eyebrow": "Game Studio",
      "studio.title": "A studio I want to build around meaning, respect, and the memory of play.",
      "studio.bubble": "I want to create a game studio based between Plan-de-Cuques and Marseille, with a strong cultural identity, ambitious narrative games, and a more human way of working.",
      "studio.game_1_tag": "Game 1",
      "studio.game_1_text": "A modern espionage thriller built around a secret legacy. Each mission transforms factions, alliances, and the memory of the world.",
      "studio.game_2_tag": "Game 2",
      "studio.game_2_text": "A city inspired by Paris, tense districts, and a lawyer capable of using law, influence, and fear as weapons.",
      "studio.game_3_tag": "Game 3",
      "studio.game_3_text": "A gothic kingdom, vampires, a royal conspiracy, and a progression built on stealth, parkour, and moral choices.",
      "studio.system_eyebrow": "Vendetta System",
      "studio.system_title": "Persistent memory AI",
      "studio.system_text": "The Vendetta System is a persistent behavioral AI architecture. Enemies remember, change status, adapt to the player's style, and can return later with new strategies.",
      "studio.system_trait_1": "Memory of insults, humiliation, and losses",
      "studio.system_trait_2": "Dynamic hierarchy and organic promotions",
      "studio.system_trait_3": "Retaliation adapted to the player's style",
      "studio.system_trait_4": "Long-term impact on factions and save data",
      "studio.creation_eyebrow": "Creation",
      "studio.creation_title": "The studio and its roots",
      "studio.creation_text": "My vision starts in Marseille and Plan-de-Cuques. I want to create in France, with original French voice acting, a real cultural identity, human themes, and a strong desire to pass things on.",
      "studio.creation_trait_1": "Local roots and cultural grounding",
      "studio.creation_trait_2": "French original voice and international openness",
      "studio.creation_trait_3": "Ambitious creation even with limited means at the beginning",
      "studio.creation_trait_4": "Respect for players, teams, and the meaning of projects",

      "vision.eyebrow": "Vision",
      "vision.title": "A studio that is more human, fairer, and closer to players.",
      "vision.card_1_title": "The studio",
      "vision.card_1_text": "I want to build a development studio that stands for ambitious, cultural, and accessible games, without following the industry's usual abuses.",
      "vision.card_2_title": "Employees",
      "vision.card_2_text": "My goal is to create a more human work environment: respect, equality, health, real support, knowledge transfer, and better living conditions.",
      "vision.card_3_title": "Players",
      "vision.card_3_text": "I want to offer honest games, more accessible pricing, physical editions with real value, and a relationship built on trust.",
      "vision.manifesto_eyebrow": "Manifesto",
      "vision.manifesto_title": "My studio vision",
      "vision.manifesto_text": "I want to prove that a studio can be ambitious without becoming cold. Games should have a soul, employees should be respected, and players should never be treated like wallets.",
      "vision.values_eyebrow": "Values",
      "vision.values_title": "What I want to stand for",
      "vision.value_1": "Accessibility, respect, and fairer pricing",
      "vision.value_2": "Culture, identity, and subjects that truly matter",
      "vision.value_3": "Passing knowledge to young and emerging creators",
      "vision.value_4": "A studio where people matter as much as results",

      "contact.eyebrow": "Contact",
      "contact.title": "Let's talk about a project, an idea, or a collaboration.",
      "contact.note": "Open to discussions around web, tech, and video game creation.",
      "contact.name_label": "Name",
      "contact.name_placeholder": "Your name",
      "contact.email_label": "Email",
      "contact.email_placeholder": "Your email",
      "contact.message_label": "Message",
      "contact.message_placeholder": "Your message",
      "contact.send": "Send",

      "footer.text": "\u00A9 2026 Adam Ben Nejma - Personal portfolio and game studio vision.",
      "document.title": "Adam Ben Nejma | Portfolio"
    }
  },
  roadmap: {
    fr: {
      "nav.portfolio": "Portfolio",
      "nav.roadmap": "Roadmap",
      "roadmap.eyebrow": "Roadmap",
      "roadmap.title": "Mon parcours vers la creation d'un studio de jeux independant.",
      "roadmap.text": "Une trajectoire claire pour passer de l'apprentissage technique a des projets de jeux plus ambitieux, puis a une vraie identite de studio.",
      "roadmap.phase_1_step": "Phase 1",
      "roadmap.phase_1_title": "Fondations",
      "roadmap.phase_1_text": "Renforcer les bases en code, logique, interfaces et culture des moteurs de jeu.",
      "roadmap.phase_2_step": "Phase 2",
      "roadmap.phase_2_title": "Prototypage",
      "roadmap.phase_2_text": "Creer de petits prototypes jouables pour tester des idees de gameplay, de furtivite et de choix.",
      "roadmap.phase_3_step": "Phase 3",
      "roadmap.phase_3_title": "Projets serieux",
      "roadmap.phase_3_text": "Assembler des experiences plus completes avec progression, IA, level design et optimisation.",
      "roadmap.phase_4_step": "Phase 4",
      "roadmap.phase_4_title": "Studio indie",
      "roadmap.phase_4_text": "Poser une direction, publier, construire une communaute et transformer les concepts en vraies licences.",
      "roadmap.final_label": "Vision finale",
      "roadmap.final_text": "Creer des jeux narratifs immersifs ou chaque decision change les relations, le monde et la memoire des personnages.",
      "document.title": "Game Dev Roadmap | Adam Ben Nejma"
    },
    en: {
      "nav.portfolio": "Portfolio",
      "nav.roadmap": "Roadmap",
      "roadmap.eyebrow": "Roadmap",
      "roadmap.title": "My path toward creating an independent game studio.",
      "roadmap.text": "A clear path from technical learning to more ambitious game projects, and then to a real studio identity.",
      "roadmap.phase_1_step": "Phase 1",
      "roadmap.phase_1_title": "Foundations",
      "roadmap.phase_1_text": "Strengthen the basics in code, logic, interfaces, and game engine culture.",
      "roadmap.phase_2_step": "Phase 2",
      "roadmap.phase_2_title": "Prototyping",
      "roadmap.phase_2_text": "Create small playable prototypes to test gameplay, stealth, and choice-driven ideas.",
      "roadmap.phase_3_step": "Phase 3",
      "roadmap.phase_3_title": "Serious projects",
      "roadmap.phase_3_text": "Assemble fuller experiences with progression, AI, level design, and optimization.",
      "roadmap.phase_4_step": "Phase 4",
      "roadmap.phase_4_title": "Indie studio",
      "roadmap.phase_4_text": "Set a direction, publish, build a community, and turn concepts into real IPs.",
      "roadmap.final_label": "Final vision",
      "roadmap.final_text": "Create immersive narrative games where every decision changes relationships, the world, and the memory of characters.",
      "document.title": "Game Dev Roadmap | Adam Ben Nejma"
    }
  }
};

const applyLanguage = (lang) => {
  const pageTranslations = translations[pageName]?.[lang];
  if (!pageTranslations) return;

  document.documentElement.lang = lang;
  document.title = pageTranslations["document.title"] || document.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (pageTranslations[key]) {
      element.textContent = pageTranslations[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (pageTranslations[key]) {
      element.placeholder = pageTranslations[key];
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === "fr" ? "\uD83C\uDDEC\uD83C\uDDE7 EN" : "\uD83C\uDDEB\uD83C\uDDF7 FR";
  }
};

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

const storedLanguage = localStorage.getItem("site-language") || "fr";
applyLanguage(storedLanguage);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "fr" ? "en" : "fr";
    localStorage.setItem("site-language", nextLanguage);
    applyLanguage(nextLanguage);
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

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
