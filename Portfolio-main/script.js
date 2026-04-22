const themeToggle = document.getElementById("theme-toggle");
const langToggle = document.getElementById("lang-toggle");
const pageName = document.body?.dataset?.page || "index";

const translations = {
  index: {
    fr: {
      "nav.home": "Accueil",
      "nav.identity": "Identite",
      "nav.skills": "Competences",
      "nav.tech": "Tech Projects",
      "nav.studio": "Game Studio",
      "nav.vision": "Vision",
      "nav.roadmap": "Roadmap 2025-2030",
      "nav.vendetta": "Vendetta System",
      "nav.ecosystem": "Écosystème",
      "nav.contact": "Contact",

      "skip.link": "Aller au contenu",
      "meta.description": "Portfolio d'Adam Ben Nejma : projets tech, vision de studio, Vendetta System et roadmap 2025-2030.",

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

      "setup.eyebrow": "Evolution du studio",
      "setup.title": "Une progression construite avec du travail, pas avec des excuses.",
      "setup.before_eyebrow": "Avant",
      "setup.before_title": "Phase de concept",
      "setup.before_text": "J'ai commence a imaginer mes univers, mes scenarios et mes premiers systemes sur une machine modeste. C'est la preuve que la vision vient avant le materiel.",
      "setup.before_item_1": "CPU : Intel Core i3-6100",
      "setup.before_item_2": "GPU : Intel HD Graphics 530",
      "setup.before_item_3": "Usage : ecriture, game design, premiers prototypes",
      "setup.before_link": "Voir le diagnostic",
      "setup.now_eyebrow": "Aujourd'hui",
      "setup.now_title": "Phase de developpement",
      "setup.now_text": "Aujourd'hui, mon setup me permet de pousser plus loin la qualite visuelle, le prototypage et la production. Cette evolution montre un vrai investissement personnel.",
      "setup.now_item_1": "CPU : AMD Ryzen 5 5500",
      "setup.now_item_2": "GPU : NVIDIA GeForce RTX 5060 Ti (PNY)",
      "setup.now_item_3": "RAM : 32 Go DDR4",
      "setup.now_item_4": "Stockage : SSD NVMe Samsung 990 EVO Plus 1 To",
      "setup.now_link": "Voir le diagnostic",

      "vendetta.eyebrow": "Vendetta System",
      "vendetta.title": "La technique derriere mon IA narrative.",
      "vendetta.text": "Le Vendetta System est un moteur de narration et d'intelligence artificielle pense comme un systeme complet : logique, performance, rendu et outils de production.",
      "vendetta.item_1": "IA narrative : memoire, consequences et etats de factions.",
      "vendetta.item_2": "Pipeline : prototypes rapides, iteration et mise a l'echelle.",
      "vendetta.item_3": "Optimisation : GPU/VRAM, streaming, temps de chargement.",
      "vendetta.item_4": "Objectif : relier hardware + IA pour une experience fluide.",
      "vendetta.goal_label": "Positionnement",
      "vendetta.goal_text": "Ma fascination ne s'arrete pas au code. Je crois que le futur de l'IA depend de la puissance et de l'architecture hardware.",
      "vendetta.cta": "Voir la roadmap Double Ascension",

      "ecosystem.eyebrow": "Écosystème",
      "ecosystem.title": "Partenariats & écosystème",
      "ecosystem.lead": "Le futur de l'IA narrative ne se construit pas seul, il s'appuie sur les geants du hardware.",
      "ecosystem.coming_title": "Coming soon",
      "ecosystem.coming_text": "Section en preparation.",
      "ecosystem.samsung_status": "Dossier prioritaire - En etude finale",
      "ecosystem.samsung_details": "Echanges en cours avec la direction. Objectif : equipement du studio en moniteurs de precision.",
      "ecosystem.nvidia_status": "Prise de contact - Phase exploratoire",
      "ecosystem.nvidia_details": "Discussions exploratoires sur l'optimisation GPU et le rendu avance pour le Vendetta System.",
      "ecosystem.hm_status": "En attente de retour media",
      "ecosystem.hm_details": "Dossier transmis : ergonomie et peripheriques de creation haute performance.",

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
      "studio.system_text": "Un systeme qui retient les consequences, evolue et transforme durablement l'univers et les factions selon tes choix.",
      "studio.system_trait_1": "Memoire des affronts, humiliations et pertes",
      "studio.system_trait_2": "Hierarchie dynamique et promotions organiques",
      "studio.system_trait_3": "Represailles adaptees au style du joueur",
      "studio.system_trait_4": "Impact durable sur les factions et la sauvegarde",

      "studio.creation_eyebrow": "Creation",
      "studio.creation_title": "Le studio et ses racines",
      "studio.creation_text": "Une vision locale et culturelle, mais ambitieuse et internationale, avec une attention au respect des equipes et des joueurs.",
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

      "footer.text": "© 2026 Adam Ben Nejma - Portfolio personnel et vision game studio.",
      "document.title": "Adam Ben Nejma | Portfolio"
    },
    en: {
      "nav.home": "Home",
      "nav.identity": "Identity",
      "nav.skills": "Skills",
      "nav.tech": "Tech Projects",
      "nav.studio": "Game Studio",
      "nav.vision": "Vision",
      "nav.roadmap": "Roadmap 2025-2030",
      "nav.vendetta": "Vendetta System",
      "nav.ecosystem": "Ecosystem",
      "nav.contact": "Contact",

      "skip.link": "Skip to content",
      "meta.description": "Adam Ben Nejma's portfolio: tech projects, studio vision, Vendetta System, and the 2025-2030 roadmap.",

      "hero.eyebrow": "Creative Portfolio",
      "hero.title": "I am building a tech profile with a real game studio vision.",
      "hero.text": "My name is Adam Ben Nejma. I love code, hardware, clean design, and above all the idea of creating strong interactive worlds.",
      "hero.cta_games": "See my game concepts",
      "hero.cta_vision": "See my vision",
      "hero.metric_games": "game concepts",
      "hero.metric_studio": "studio vision",
      "hero.metric_learning": "hands-on learning",
      "hero.panel_label": "Vision",
      "hero.panel_text": "I want to create my own game studio, with narrative games, living worlds, and a more human way to design, produce, and share.",

      "identity.eyebrow": "Identity",
      "identity.title": "A profile between technology, design, and creative ambition.",
      "identity.text_1": "Since I was young, I have been interested in hardware, programming, and the way a good idea can become a real project.",
      "identity.text_2": "My goal is not just to learn tools. I want to build a strong vision combining development, aesthetics, narrative, and game design.",
      "identity.showcase_title": "What I want to show",
      "identity.trait_1": "Creativity and the drive to build",
      "identity.trait_2": "Curiosity for code, design, and systems",
      "identity.trait_3": "The ambition to create a studio and original IPs",
      "identity.trait_4": "Steady progress through real projects",

      "skills.eyebrow": "Skills",
      "skills.title": "Strong technical foundations with a creation-focused direction.",
      "skills.tag_code": "Code",
      "skills.tag_logic": "Logic",
      "skills.tag_design": "Design",
      "skills.tag_hardware": "Hardware",
      "skills.web_title": "Web Development",
      "skills.web_text": "HTML, CSS, JavaScript, interactive interfaces, and front-end animations.",
      "skills.programming_title": "Programming",
      "skills.programming_text": "Python, algorithms, and structured thinking to turn an idea into a system.",
      "skills.design_title": "UI / UX",
      "skills.design_text": "A taste for clean, readable, modern interfaces inspired by a premium finish.",
      "skills.hardware_title": "PC & Optimization",
      "skills.hardware_text": "Assembly, configuration, testing, and understanding of components and performance.",

      "tech.eyebrow": "Tech Projects",
      "tech.title": "My technical projects to learn, test, and keep improving.",
      "tech.project_1_title": "Web Portfolio",
      "tech.project_1_text": "A modern personal website with smooth navigation, animations, and a more premium presentation.",
      "tech.project_2_title": "PC Hardware",
      "tech.project_2_text": "Building, optimizing, and analyzing performance on personal configurations.",
      "tech.project_3_title": "Mobile App",
      "tech.project_3_text": "A mobile prototype to explore application logic and interface design.",
      "tech.project_4_title": "Arduino",
      "tech.project_4_text": "Small automated systems, sensors, and experiments around electronics.",
      "tech.project_5_title": "AI Exploration",
      "tech.project_5_text": "Script testing and first explorations around artificial intelligence.",

      "setup.eyebrow": "Studio progress",
      "setup.title": "A progression built with work, not excuses.",
      "setup.before_eyebrow": "Before",
      "setup.before_title": "Concept phase",
      "setup.before_text": "I started imagining my worlds, stories, and early systems on a modest machine. Proof that vision comes before hardware.",
      "setup.before_item_1": "CPU: Intel Core i3-6100",
      "setup.before_item_2": "GPU: Intel HD Graphics 530",
      "setup.before_item_3": "Use: writing, game design, early prototypes",
      "setup.before_link": "View the report",
      "setup.now_eyebrow": "Now",
      "setup.now_title": "Development phase",
      "setup.now_text": "Today, my setup lets me push visuals, prototyping, and production further. This evolution shows real personal investment.",
      "setup.now_item_1": "CPU: AMD Ryzen 5 5500",
      "setup.now_item_2": "GPU: NVIDIA GeForce RTX 5060 Ti (PNY)",
      "setup.now_item_3": "RAM: 32GB DDR4",
      "setup.now_item_4": "Storage: Samsung 990 EVO Plus 1TB NVMe SSD",
      "setup.now_link": "View the report",

      "vendetta.eyebrow": "Vendetta System",
      "vendetta.title": "The tech behind my narrative AI.",
      "vendetta.text": "Vendetta System is a narrative + AI engine designed as a full system: logic, performance, rendering, and production tooling.",
      "vendetta.item_1": "Narrative AI: memory, consequences, and faction states.",
      "vendetta.item_2": "Pipeline: fast prototyping, iteration, and scaling.",
      "vendetta.item_3": "Optimization: GPU/VRAM, streaming, loading times.",
      "vendetta.item_4": "Goal: connect hardware + AI for a smooth experience.",
      "vendetta.goal_label": "Positioning",
      "vendetta.goal_text": "My fascination does not stop at code. I believe the future of AI depends on hardware power and architecture.",
      "vendetta.cta": "View the Double Ascension roadmap",

      "ecosystem.eyebrow": "Ecosystem",
      "ecosystem.title": "Partnerships & ecosystem",
      "ecosystem.lead": "The future of narrative AI is not built alone: it stands on the shoulders of hardware leaders.",
      "ecosystem.coming_title": "Coming soon",
      "ecosystem.coming_text": "Section in progress.",
      "ecosystem.samsung_status": "Priority file - Final review",
      "ecosystem.samsung_details": "Ongoing exchanges with leadership. Goal: equip the studio with precision monitors.",
      "ecosystem.nvidia_status": "Outreach - Exploratory phase",
      "ecosystem.nvidia_details": "Exploratory discussions on GPU optimization and advanced rendering for the Vendetta System.",
      "ecosystem.hm_status": "Waiting for media reply",
      "ecosystem.hm_details": "File submitted: ergonomics and high-performance creation peripherals.",

      "studio.eyebrow": "Game Studio",
      "studio.title": "A studio I want to build around meaning, respect, and long-term impact.",
      "studio.bubble": "I want to create a game studio based between Plan-de-Cuques and Marseille, with a strong cultural identity, ambitious narrative games, and a more human way of working.",
      "studio.game_1_tag": "Game 1",
      "studio.game_1_text": "A modern espionage thriller built around a secret legacy. Each mission transforms factions, alliances, and the memory of the world.",
      "studio.game_2_tag": "Game 2",
      "studio.game_2_text": "A city inspired by Paris, tense districts, and a lawyer able to use law, influence, and fear as weapons.",
      "studio.game_3_tag": "Game 3",
      "studio.game_3_text": "A gothic kingdom, vampires, a royal conspiracy, and progression built on stealth, parkour, and moral choices.",

      "studio.system_eyebrow": "Vendetta System",
      "studio.system_title": "A persistent memory AI",
      "studio.system_text": "A system that remembers consequences, evolves over time, and permanently changes factions and the world based on your choices.",
      "studio.system_trait_1": "Memory of grudges, humiliations, and losses",
      "studio.system_trait_2": "Dynamic hierarchy and organic promotions",
      "studio.system_trait_3": "Retaliation adapted to the player's style",
      "studio.system_trait_4": "Long-term impact on factions and saves",

      "studio.creation_eyebrow": "Creation",
      "studio.creation_title": "The studio and its roots",
      "studio.creation_text": "A local cultural vision, but ambitious and international, with a focus on respecting teams and players.",
      "studio.creation_trait_1": "Local roots and cultural identity",
      "studio.creation_trait_2": "French original version with international reach",
      "studio.creation_trait_3": "Ambitious creation even with limited means at first",
      "studio.creation_trait_4": "Respect for players, teams, and meaning",

      "vision.eyebrow": "Vision",
      "vision.title": "A studio that is more human, fairer, and closer to players.",
      "vision.card_1_title": "The Studio",
      "vision.card_1_text": "I want to build a development studio that stands for ambitious, cultural, and accessible games, without following the industry's usual abuses.",
      "vision.card_2_title": "Employees",
      "vision.card_2_text": "My goal is to create a more human work environment: respect, equality, health, real support, knowledge sharing, and better living conditions.",
      "vision.card_3_title": "Players",
      "vision.card_3_text": "I want to offer honest games, more accessible pricing, physical editions with real value, and a relationship built on trust.",
      "vision.manifesto_eyebrow": "Manifesto",
      "vision.manifesto_title": "My Studio Vision",
      "vision.manifesto_text": "I want to prove that a studio can be ambitious without becoming cold. Games should have a soul, employees should be respected, and players should never be treated like wallets.",
      "vision.values_eyebrow": "Values",
      "vision.values_title": "What I Want to Stand For",
      "vision.value_1": "Accessibility, respect, and fairer pricing",
      "vision.value_2": "Culture, identity, and subjects that truly matter",
      "vision.value_3": "Passing knowledge to young and emerging creators",
      "vision.value_4": "A studio where people matter as much as results",

      "contact.eyebrow": "Contact",
      "contact.title": "Let's talk about a project, an idea, or a collaboration.",
      "contact.note": "Open to discussions around web, tech, and game creation.",
      "contact.name_label": "Name",
      "contact.name_placeholder": "Your name",
      "contact.email_label": "Email",
      "contact.email_placeholder": "Your email",
      "contact.message_label": "Message",
      "contact.message_placeholder": "Your message",
      "contact.send": "Send",

      "footer.text": "© 2026 Adam Ben Nejma - Personal portfolio and game studio vision.",
      "document.title": "Adam Ben Nejma | Portfolio"
    }
  },
  roadmap: {
    fr: {
      "nav.portfolio": "Portfolio",
      "nav.roadmap": "Roadmap 2025-2030",
      "skip.link": "Aller au contenu",
      "roadmap.eyebrow": "Roadmap",
      "roadmap.title": "Roadmap 2025-2030 : Double Ascension (scolaire + pro).",
      "roadmap.text": "Une roadmap claire pour aligner mes etapes scolaires (Brevet, Bac, etudes) avec mes jalons techniques (Moteur Alpha, Beta, 1.0) et rassurer sur ma capacite a tenir les deux.",
      "meta.description": "Roadmap 2025-2030 (Double Ascension) : parcours scolaire + jalons de dev pour le Vendetta System.",

      "roadmap.tab_double_title": "Double Ascension",
      "roadmap.tab_double_subtitle": "Scolaire + Pro",
      "roadmap.tab_vision_title": "Vision & ambition",
      "roadmap.tab_vision_subtitle": "Hardware + IA",
      "roadmap.tab_setup_title": "Setup & optimisation",
      "roadmap.tab_setup_subtitle": "Bottlenecks",

      "roadmap.double_title": "La Roadmap \"Double Ascension\"",
      "roadmap.double_intro": "Chaque annee a deux axes : scolaire (diplomes et progression) et pro (moteur + studio). Les jalons techniques suivent Alpha -> Beta -> 1.0.",
      "roadmap.track_school": "Scolaire",
      "roadmap.track_pro": "Pro / Studio",
      "roadmap.double_tag_2025": "Histoire",
      "roadmap.double_2025_school": "Fin 2025 : fin 4eme -> debut 3eme : objectifs clairs, methodo, organisation (etudes + projet).",
      "roadmap.double_2025_pro": "Fin 2025 : creation de l'histoire, du lore et des concepts de mes jeux.",
      "roadmap.double_tag_2026": "Brevet + Systeme",
      "roadmap.double_2026_school": "Juin 2026 : Brevet (annee de 3eme) - rigueur et progression continue.",
      "roadmap.double_2026_pro": "2026 (actuel) : creation du code du Vendetta System + debut de creation des jeux (premiers prototypes).",
      "roadmap.double_tag_2027": "Alpha",
      "roadmap.double_2027_school": "Seconde : stage de 2 semaines en juin 2027 (immersion).",
      "roadmap.double_2027_pro": "Tests Alpha : stabilite, boucles de gameplay, premiere version jouable.",
      "roadmap.double_tag_2028": "Beta (P1)",
      "roadmap.double_2028_school": "Premiere : Bac de francais + consolidation des bases scientifiques et techniques.",
      "roadmap.double_2028_pro": "Beta - phase 1 du jeu : progression, systems, outils et optimisation.",
      "roadmap.double_tag_2029": "Demos (P2)",
      "roadmap.double_2029_school": "Terminale : cap sur le Bac + discipline de production.",
      "roadmap.double_2029_pro": "Sortie des demos + Beta phase 2 : contenu, polish, performance et stabilite.",
      "roadmap.double_tag_2030": "Sortie",
      "roadmap.double_2030_school": "Bac : validation scolaire + dossier solide pour la suite.",
      "roadmap.double_2030_pro": "Sortie du jeu (France) puis extension si ca marche : traduction et autres regions + debut d'etudes en informatique (hardware, quantique, IA).",

      "roadmap.vision_title": "Vision & ambition (hardware + IA)",
      "roadmap.vision_text": "Ma fascination ne s'arrete pas au code. Je crois que le futur de l'IA depend de la puissance et de l'architecture hardware. Mon objectif est de devenir ingenieur pour concevoir les systemes ou le materiel et l'intelligence artificielle ne font qu'un.",
      "roadmap.vision_why_label": "Pourquoi",
      "roadmap.vision_why_text": "Parce que les performances, l'ecran, le stockage et l'architecture GPU determinent ce que l'IA peut faire en temps reel.",
      "roadmap.vision_how_label": "Comment",
      "roadmap.vision_how_text": "En apprenant la conception systeme, l'optimisation et la mesure (profiling) pour relier theorie et resultats.",

      "roadmap.setup_title": "Setup actuel & optimisation",
      "roadmap.setup_intro": "Mon setup actuel est solide pour prototyper, mais certaines limites (ecran et puissance GPU/VRAM) deviennent le goulot pour l'IA et la qualite visuelle.",
      "roadmap.setup_now_title": "Configuration actuelle",
      "roadmap.setup_cpu": "CPU : AMD Ryzen 5 5500",
      "roadmap.setup_gpu": "GPU : NVIDIA GeForce RTX 5060 Ti (8 Go)",
      "roadmap.setup_ram": "RAM : 32 Go DDR4",
      "roadmap.setup_ssd": "SSD : Samsung 990 EVO Plus 1 To (NVMe)",
      "roadmap.setup_screen": "Ecran : Acer V246HLC (1080p, 60 Hz)",
      "roadmap.setup_cta": "Voir la section setup du portfolio",
      "roadmap.bottleneck_title": "Hardware bottleneck",
      "roadmap.bottleneck_text": "Pour passer a l'etape suivante (calibration, rendu avance, IA temps reel), j'ai besoin d'un ecran de precision et d'une marge GPU superieure.",
      "roadmap.bottleneck_display": "Ecran / precision couleur",
      "roadmap.bottleneck_display_value": "Goulot",
      "roadmap.bottleneck_gpu": "GPU / VRAM (path tracing)",
      "roadmap.bottleneck_gpu_value": "A renforcer",
      "roadmap.bottleneck_storage": "Stockage / streaming",
      "roadmap.bottleneck_storage_value": "Bon",
      "document.title": "Game Dev Roadmap | Adam Ben Nejma"
    },
    en: {
      "nav.portfolio": "Portfolio",
      "nav.roadmap": "Roadmap 2025-2030",
      "skip.link": "Skip to content",
      "roadmap.eyebrow": "Roadmap",
      "roadmap.title": "Roadmap 2025-2030: Double Ascension (school + pro).",
      "roadmap.text": "A clear roadmap to align my school milestones (diplomas, studies) with technical milestones (Engine Alpha, Beta, 1.0) and prove I can handle both.",
      "meta.description": "2025-2030 roadmap (Double Ascension): school path + dev milestones for the Vendetta System.",

      "roadmap.tab_double_title": "Double Ascension",
      "roadmap.tab_double_subtitle": "School + Pro",
      "roadmap.tab_vision_title": "Vision & ambition",
      "roadmap.tab_vision_subtitle": "Hardware + AI",
      "roadmap.tab_setup_title": "Setup & optimization",
      "roadmap.tab_setup_subtitle": "Bottlenecks",

      "roadmap.double_title": "The \"Double Ascension\" Roadmap",
      "roadmap.double_intro": "Each year has two axes: school (diplomas + progress) and pro (engine + studio). Technical milestones follow Alpha -> Beta -> 1.0.",
      "roadmap.track_school": "School",
      "roadmap.track_pro": "Pro / Studio",
      "roadmap.double_tag_2025": "Story",
      "roadmap.double_2025_school": "Late 2025: end of the year -> next year: clear goals, method, and organization (school + project).",
      "roadmap.double_2025_pro": "Late 2025: create the story, lore, and core concepts of my games.",
      "roadmap.double_tag_2026": "Diploma + System",
      "roadmap.double_2026_school": "June 2026 diploma: rigor and steady progress.",
      "roadmap.double_2026_pro": "2026 (current): build the Vendetta System code + start game creation (early prototypes).",
      "roadmap.double_tag_2027": "Alpha",
      "roadmap.double_2027_school": "High school year 1: 2-week internship in June 2027 (immersion).",
      "roadmap.double_2027_pro": "Alpha testing: stability, gameplay loops, first playable version.",
      "roadmap.double_tag_2028": "Beta (P1)",
      "roadmap.double_2028_school": "High school year 2: major French exam + stronger science/tech foundations.",
      "roadmap.double_2028_pro": "Beta - phase 1: progression, systems, tools, and optimization.",
      "roadmap.double_tag_2029": "Demos (P2)",
      "roadmap.double_2029_school": "Final high school year: focus on the final exam + production discipline.",
      "roadmap.double_2029_pro": "Release demos + Beta phase 2: content, polish, performance, stability.",
      "roadmap.double_tag_2030": "Release",
      "roadmap.double_2030_school": "Final exam: school validation + strong file for what’s next.",
      "roadmap.double_2030_pro": "Release (France) then expand if it works: localization + start CS studies (hardware, quantum, AI).",

      "roadmap.vision_title": "Vision & ambition (hardware + AI)",
      "roadmap.vision_text": "My fascination does not stop at code. I believe the future of AI depends on hardware power and architecture. My goal is to become an engineer to design systems where hardware and AI become one.",
      "roadmap.vision_why_label": "Why",
      "roadmap.vision_why_text": "Because performance, display quality, storage, and GPU architecture define what AI can do in real time.",
      "roadmap.vision_how_label": "How",
      "roadmap.vision_how_text": "By learning system design, optimization, and measurement (profiling) to connect theory with results.",

      "roadmap.setup_title": "Current setup & optimization",
      "roadmap.setup_intro": "My current setup is strong for prototyping, but some limits (display + GPU/VRAM headroom) become bottlenecks for AI and visual quality.",
      "roadmap.setup_now_title": "Current configuration",
      "roadmap.setup_cpu": "CPU: AMD Ryzen 5 5500",
      "roadmap.setup_gpu": "GPU: NVIDIA GeForce RTX 5060 Ti (8GB)",
      "roadmap.setup_ram": "RAM: 32GB DDR4",
      "roadmap.setup_ssd": "SSD: Samsung 990 EVO Plus 1TB (NVMe)",
      "roadmap.setup_screen": "Display: Acer V246HLC (1080p, 60Hz)",
      "roadmap.setup_cta": "See the setup section on the portfolio",
      "roadmap.bottleneck_title": "Hardware bottleneck",
      "roadmap.bottleneck_text": "To reach the next step (calibration, advanced rendering, real-time AI), I need a precision display and more GPU headroom.",
      "roadmap.bottleneck_display": "Display / color accuracy",
      "roadmap.bottleneck_display_value": "Bottleneck",
      "roadmap.bottleneck_gpu": "GPU / VRAM (path tracing)",
      "roadmap.bottleneck_gpu_value": "Needs headroom",
      "roadmap.bottleneck_storage": "Storage / streaming",
      "roadmap.bottleneck_storage_value": "Good",
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
    const value = pageTranslations[key];
    if (!value) return;

    const targetAttr = element.dataset.i18nAttr;
    if (targetAttr) {
      element.setAttribute(targetAttr, value);
      return;
    }

    element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (pageTranslations[key]) {
      element.placeholder = pageTranslations[key];
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === "fr" ? "🇬🇧 EN" : "🇫🇷 FR";
  }
};

const updateThemeToggle = () => {
  if (!themeToggle) return;
  themeToggle.textContent = document.body.classList.contains("dark") ? "🌑" : "🌕";
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

const initTabs = (tabsRoot) => {
  const tabButtons = Array.from(tabsRoot.querySelectorAll('[role="tab"]'));
  const tabPanels = Array.from(tabsRoot.querySelectorAll('[role="tabpanel"]'));
  if (!tabButtons.length || !tabPanels.length) return;

  const storageKey = `tabs-${tabsRoot.dataset.tabs || "default"}`;

  const setActive = (nextButton) => {
    const nextPanelId = nextButton.getAttribute("aria-controls");
    if (!nextPanelId) return;

    tabButtons.forEach((button) => {
      const isActive = button === nextButton;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.id === nextPanelId);
    });

    localStorage.setItem(storageKey, nextPanelId);
  };

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => setActive(button));
    button.addEventListener("keydown", (event) => {
      const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
      if (!keys.includes(event.key)) return;
      event.preventDefault();

      const lastIndex = tabButtons.length - 1;
      let nextIndex = index;

      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = lastIndex;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = index === 0 ? lastIndex : index - 1;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = index === lastIndex ? 0 : index + 1;

      const nextButton = tabButtons[nextIndex];
      if (nextButton) {
        nextButton.focus({ preventScroll: true });
        setActive(nextButton);
      }
    });
  });

  const storedPanelId = localStorage.getItem(storageKey);
  const storedButton = storedPanelId ? tabButtons.find((button) => button.getAttribute("aria-controls") === storedPanelId) : null;
  setActive(storedButton || tabButtons[0]);
};

document.querySelectorAll("[data-tabs]").forEach((tabsRoot) => initTabs(tabsRoot));

const initEcosystemUnlock = () => {
  const ecosystemSection = document.querySelector("#ecosystem.ecosystem-locked");
  if (!ecosystemSection) return;

  const unlockCode = (ecosystemSection.dataset.unlockCode || "ADAM").toUpperCase();
  const details = ecosystemSection.querySelector(".ecosystem-details");
  let buffer = "";

  const isTypingField = (element) => {
    if (!element) return false;
    const tag = element.tagName ? element.tagName.toLowerCase() : "";
    return tag === "input" || tag === "textarea" || element.isContentEditable;
  };

  const onKeyDown = (event) => {
    if (event.defaultPrevented) return;
    if (isTypingField(event.target)) return;
    if (!event.key || event.key.length !== 1) return;

    const char = event.key.toUpperCase();
    if (!/^[A-Z]$/.test(char)) return;

    buffer = (buffer + char).slice(-unlockCode.length);

    if (buffer !== unlockCode) return;

    ecosystemSection.classList.remove("ecosystem-locked");
    if (details) details.setAttribute("aria-hidden", "false");

    ecosystemSection.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("visible");
    });

    document.removeEventListener("keydown", onKeyDown);
  };

  document.addEventListener("keydown", onKeyDown);
};

initEcosystemUnlock();
