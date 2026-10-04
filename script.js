const themeToggle = document.getElementById("theme-toggle");
const langToggle = document.getElementById("lang-toggle");
const pageName = document.body?.dataset?.page || "index";

const translations = {
  "index": {
    "fr": {
      "nav.home": "Accueil",
      "nav.projects": "Projets",
      "nav.vendetta": "Vendetta System",
      "nav.games": "Jeux",
      "nav.roadmap": "Roadmap",
      "skip.link": "Aller au contenu",
      "meta.description": "Portfolio d'Adam, 15 ans, France : projets tech, concepts de jeux, Vendetta System et roadmap 2025-2030.",
      "document.title": "Adam | Portfolio",
      "hero.eyebrow": "Portfolio créatif",
      "hero.title": "Je construis un profil tech avec une vraie vision jeu vidéo.",
      "hero.text": "Je m'appelle Adam, j'ai 15 ans et je vis en France. J'aime le code, le hardware, le design propre et surtout l'idée de créer des mondes interactifs forts.",
      "hero.cta_games": "Voir mes concepts de jeux",
      "hero.cta_vision": "Voir ma vision",
      "hero.metric_games": "concepts de jeux",
      "hero.metric_studio": "vision de studio",
      "hero.metric_age": "ans, et je me forme chaque jour",
      "hero.panel_label": "Bulle vision",
      "hero.panel_text": "Je veux créer mon propre studio de jeux vidéo, avec des jeux narratifs, des mondes vivants et une façon plus humaine de concevoir, produire et partager.",
      "identity.eyebrow": "Identité",
      "identity.title": "Un profil entre technologie, design et ambition créative.",
      "identity.text_1": "Depuis petit, je m'intéresse au hardware, à la programmation et à la manière dont une bonne idée peut devenir un vrai projet.",
      "identity.text_2": "Mon objectif n'est pas seulement d'apprendre des outils. Je veux construire une vision solide mêlant développement, esthétique, narration et game design.",
      "identity.showcase_title": "Ce que je veux montrer",
      "identity.trait_1": "Créativité et envie de construire",
      "identity.trait_2": "Curiosité pour le code, le design et les systèmes",
      "identity.trait_3": "Volonté de créer un studio et des licences originales",
      "identity.trait_4": "Progression constante sur des projets concrets",
      "skills.eyebrow": "Compétences",
      "skills.title": "Des bases en construction, avec une direction orientée création.",
      "skills.tag_code": "Code",
      "skills.tag_logic": "Logique",
      "skills.tag_design": "Design",
      "skills.tag_hardware": "Hardware",
      "skills.web_title": "Développement web",
      "skills.web_text": "HTML, CSS, JavaScript, interfaces interactives et animations front-end (niveau débutant).",
      "skills.programming_title": "Programmation",
      "skills.programming_text": "Python, algorithmique et réflexion structurée pour transformer une idée en système (je débute).",
      "skills.design_title": "UI / UX",
      "skills.design_text": "Goût pour les interfaces propres, lisibles et modernes.",
      "skills.hardware_title": "PC & optimisation",
      "skills.hardware_text": "Assemblage, configuration, tests et compréhension des composants et des performances.",
      "tech.eyebrow": "Projets tech",
      "tech.title": "Mes projets techniques pour apprendre, tester et progresser.",
      "status.code": "Code · débutant",
      "status.search": "Recherche de DA",
      "tech.project_1_title": "Portfolio web",
      "tech.project_1_text": "Mon site personnel, le premier projet que j'ai codé : navigation, animations et présentation soignée.",
      "tech.project_2_title": "PC hardware",
      "tech.project_2_text": "Montage, optimisation et analyse des performances sur des configurations personnelles.",
      "tech.project_3_title": "Prototype du Vendetta System (Python)",
      "tech.project_3_text": "Je prototype d'abord en Python : mémoire des PNJ et états de factions. Quand le système sera au point, je le porterai sur Unreal Engine.",
      "setup.eyebrow": "Évolution du setup",
      "setup.title": "Une progression construite avec du travail, pas avec des excuses.",
      "setup.before_eyebrow": "Avant",
      "setup.before_title": "Phase de concept",
      "setup.before_text": "J'ai commencé à imaginer mes univers, mes scénarios et mes premiers systèmes sur une machine modeste. La vision vient avant le matériel.",
      "setup.before_item_1": "CPU : Intel Core i3-6100",
      "setup.before_item_2": "GPU : Intel HD Graphics 530",
      "setup.before_item_3": "Usage : écriture, game design, premiers essais",
      "setup.now_eyebrow": "Aujourd'hui",
      "setup.now_title": "Phase de développement",
      "setup.now_text": "Mon setup actuel me permet de pousser plus loin la qualité visuelle, le prototypage et la production.",
      "setup.now_item_1": "CPU : AMD Ryzen 5 5500",
      "setup.now_item_2": "GPU : NVIDIA GeForce RTX 5060 Ti (PNY)",
      "setup.now_item_3": "RAM : 32 Go DDR4",
      "setup.now_item_4": "Stockage : SSD NVMe Samsung 990 EVO Plus 1 To",
      "vendetta.eyebrow": "Vendetta System",
      "vendetta.title": "La technique derrière mon IA narrative.",
      "vendetta.text": "Le Vendetta System est mon projet de moteur de narration et d'intelligence artificielle. Je le conçois comme un système complet et je commence à le coder.",
      "vendetta.item_1": "IA narrative : mémoire, conséquences et états de factions.",
      "vendetta.item_2": "Méthode : prototype en Python d'abord, puis portage sur Unreal Engine quand le système est au point.",
      "vendetta.item_3": "Optimisation visée : GPU/VRAM, streaming, temps de chargement.",
      "vendetta.item_4": "Objectif : relier hardware + IA pour une expérience fluide.",
      "vendetta.goal_label": "Positionnement",
      "vendetta.goal_text": "Ma fascination ne s'arrête pas au code. Je crois que le futur de l'IA dépend de la puissance et de l'architecture hardware.",
      "vendetta.cta": "Voir la roadmap",
      "studio.eyebrow": "Game Studio",
      "studio.title": "Un studio que je veux construire autour du sens, du respect et de la mémoire du jeu.",
      "studio.bubble": "Je veux créer un studio de jeux vidéo en France, avec une vraie identité culturelle, des jeux narratifs forts et une manière plus humaine de travailler.",
      "studio.search": "Je cherche une personne pour la direction artistique (DA) de mes jeux.",
      "studio.system_eyebrow": "Vendetta System",
      "studio.system_title": "Une IA de mémoire persistante",
      "studio.system_text": "Un système en cours de conception : les ennemis se souviennent, changent de statut, s'adaptent au style du joueur et peuvent revenir plus tard avec de nouvelles stratégies.",
      "studio.system_trait_1": "Mémoire des affronts, humiliations et pertes",
      "studio.system_trait_2": "Hiérarchie dynamique et promotions organiques",
      "studio.system_trait_3": "Représailles adaptées au style du joueur",
      "studio.system_trait_4": "Impact durable sur les factions et la sauvegarde",
      "studio.creation_eyebrow": "Création",
      "studio.creation_title": "L'identité du studio",
      "studio.creation_text": "Une vision culturelle, ambitieuse et ouverte à l'international, avec une attention au respect des équipes et des joueurs.",
      "studio.creation_trait_1": "Ancrage culturel et identité forte",
      "studio.creation_trait_2": "VO française et ouverture internationale",
      "studio.creation_trait_3": "Création ambitieuse même avec peu de moyens au départ",
      "studio.creation_trait_4": "Respect des joueurs, des équipes et du sens des projets",
      "vision.eyebrow": "Vision",
      "vision.title": "Un studio plus humain, plus juste et plus proche des joueurs.",
      "vision.card_1_title": "Le studio",
      "vision.card_1_text": "Je veux construire un studio qui défend des jeux ambitieux, culturels et accessibles, sans suivre les abus habituels de l'industrie.",
      "vision.card_2_title": "Les employés",
      "vision.card_2_text": "Mon objectif est de créer un cadre de travail plus humain : respect, égalité, santé, soutien concret, transmission et meilleures conditions de vie.",
      "vision.card_3_title": "Les joueurs",
      "vision.card_3_text": "Je veux proposer des jeux honnêtes, des prix plus accessibles, des éditions physiques avec du vrai contenu et une relation basée sur la confiance.",
      "vision.manifesto_eyebrow": "Manifeste",
      "vision.manifesto_title": "Ma vision du studio",
      "vision.manifesto_text": "Je veux prouver qu'un studio peut être ambitieux sans devenir froid. Les jeux doivent avoir une âme, les employés doivent être respectés, et les joueurs ne doivent pas être traités comme de simples portefeuilles.",
      "vision.values_eyebrow": "Valeurs",
      "vision.values_title": "Ce que je veux défendre",
      "vision.value_1": "Accessibilité, respect et prix plus justes",
      "vision.value_2": "Culture, identité et sujets qui comptent vraiment",
      "vision.value_3": "Transmission vers les jeunes et les nouveaux créateurs",
      "vision.value_4": "Un studio où l'humain compte autant que le résultat",
      "footer.text": "© 2026 Adam - Portfolio personnel et vision game studio.",
      "status.priority": "Projet prioritaire",
      "status.world": "Recherche narrative",
      "studio.games_title": "Mes jeux",
      "studio.group_da": "En recherche de direction artistique",
      "studio.group_world": "En recherche narrative & worldbuilding",
      "studio.label_mech": "Mécaniques",
      "studio.label_da": "DA visée",
      "g.survivor.tag": "Thriller psychologique · survie en huis clos",
      "g.survivor.title": "SURVIVOR CLUB - Echo Protocol",
      "g.survivor.pitch": "Le lycée Hoshigawa se retrouve verrouillé après qu'un événement ancien lié au drame d'un élève refasse surface. Il faut explorer, déduire et survivre face à la pression sociale et aux comportements imprévisibles des autres élèves.",
      "g.survivor.mech": "système de suspicion, jauge de santé mentale (perception altérée), intrus dont l'identité change selon les parties, mémoire émotionnelle des PNJ (Vendetta System).",
      "g.survivor.da": "plan des étages du lycée (classes, couloirs, toit, sous-sol), fiches de personnages (tenues, expressions de peur et de suspicion), ambiance anime sombre / thriller psychologique avec lumières froides.",
      "g.alamut.tag": "Thriller d'espionnage · infiltration",
      "g.alamut.title": "L'Ordre d'Alamut",
      "g.alamut.pitch": "Le Fils Ben Youssef est l'héritier d'une lignée liée à une organisation secrète qui agit dans les zones d'ombre du pouvoir moderne. Chaque mission transforme les factions, les alliances et la mémoire du monde.",
      "g.alamut.mech": "influence sur plusieurs réseaux, choix à conséquences durables sur 3 générations, affrontements persistants (Vendetta System).",
      "g.alamut.da": "ambiance néo-noir, architecture institutionnelle, contrastes d'ombres.",
      "g.vampire.tag": "Action · infiltration · parkour gothique",
      "g.vampire.title": "Vampire's Decree",
      "g.vampire.pitch": "Jeune assassin, tu accomplis des contrats contre des vampires, de village en manoir, jusqu'à découvrir un complot royal.",
      "g.vampire.mech": "parkour sur les toits, gadgets (ail, pieux, arcs), arbre de compétences, choix moraux qui changent la fin.",
      "g.vampire.da": "monde gothique sombre, manoirs, brume, architecture gothique.",
      "g.lawbreaker.tag": "Open world narratif · crime & justice",
      "g.lawbreaker.title": "LAWBREAKER - Padis City",
      "g.lawbreaker.pitch": "Dans une métropole inspirée de Paris, Karime, avocat, plaide au tribunal comme il agit sur le terrain face aux factions : mafia, triade, gangs.",
      "g.lawbreaker.mech": "plaidoyer et persuasion, combats rapprochés, réputation dynamique dans les quartiers, adversaires persistants (Vendetta System).",
      "g.lawbreaker.da": "style urbain moderne, quartiers très distincts.",
      "g.varya.tag": "Survie · monde persistant",
      "g.varya.title": "Dunes of Varya",
      "g.varya.pitch": "Dans le territoire désertique de Varya, inspiré du Sahara et du Sahel, tu es mercenaire, chef de clan ou commerçant au milieu de guerres de factions.",
      "g.varya.mech": "météo dynamique (tempêtes de sable qui déplacent les chemins), chaleur et hydratation, caravanes commerciales, monde qui évolue même quand tu n'es pas là.",
      "g.varya.da": "paysages sahariens, tempêtes de sable, cités fortifiées.",
      "g.afrika.tag": "Aventure narrative · uchronie",
      "g.afrika.title": "AFRIKA : Sables de Liberté",
      "g.afrika.pitch": "Yanis Ben Amar vit dans une Afrique sous domination coloniale. Le jeu part de faits historiques réels avant de basculer dans une uchronie où tes actions libèrent des territoires.",
      "g.afrika.mech": "libération dynamique de villages, réseau d'informateurs et de guérilleros, répression adaptative des forces coloniales.",
      "g.afrika.da": "médinas du Maghreb, forêts d'Afrique centrale, costumes d'époque.",
      "g.cendre.tag": "FPS narratif · drame historique",
      "g.cendre.title": "FRONTIÈRES DE CENDRE - Chroniques d'Algérie",
      "g.cendre.pitch": "Une traversée de la guerre d'Algérie à travers trois perspectives humaines irréconciliables.",
      "g.cendre.mech": "choix de campagne (point de vue français, indépendantiste ou civil), vérité fragmentée à recouper, combats bruts et rares.",
      "g.cendre.da": "rendu réaliste, paysages ruraux et urbains d'époque.",
      "status.hw": "Hardware & System",
      "status.learning": "En apprentissage",
      "tech.project_6_title": "Hackintosh",
      "tech.project_6_text": "J'ai installé macOS sur un PC non-Apple (HP ProDesk 400 G3) avec OpenCore, en modifiant des fichiers de configuration (plist). Il fonctionne vraiment : accélération graphique, web et usage de tous les jours. J'y apprends comment un ordinateur démarre et comment ses composants communiquent.",
      "tech.project_7_title": "Étude : GPU et pilotes graphiques",
      "tech.project_7_text": "Je cherche à comprendre comment fonctionnent un GPU NVIDIA récent, Metal et les pilotes graphiques. Je débute : c'est un objectif d'apprentissage à long terme, lié à mon envie de devenir ingénieur."
    },
    "en": {
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.vendetta": "Vendetta System",
      "nav.games": "Games",
      "nav.roadmap": "Roadmap",
      "skip.link": "Skip to content",
      "meta.description": "Adam's portfolio, 15, France: tech projects, game concepts, Vendetta System and the 2025-2030 roadmap.",
      "document.title": "Adam | Portfolio",
      "hero.eyebrow": "Creative Portfolio",
      "hero.title": "I am building a tech profile with a real game studio vision.",
      "hero.text": "My name is Adam, I'm 15 and I live in France. I love code, hardware, clean design, and above all the idea of creating strong interactive worlds.",
      "hero.cta_games": "See my game concepts",
      "hero.cta_vision": "See my vision",
      "hero.metric_games": "game concepts",
      "hero.metric_studio": "studio vision",
      "hero.metric_age": "years old, learning every day",
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
      "skills.title": "Foundations in progress, with a creation-focused direction.",
      "skills.tag_code": "Code",
      "skills.tag_logic": "Logic",
      "skills.tag_design": "Design",
      "skills.tag_hardware": "Hardware",
      "skills.web_title": "Web Development",
      "skills.web_text": "HTML, CSS, JavaScript, interactive interfaces, and front-end animations (beginner level).",
      "skills.programming_title": "Programming",
      "skills.programming_text": "Python, algorithms, and structured thinking to turn an idea into a system (I'm just starting).",
      "skills.design_title": "UI / UX",
      "skills.design_text": "A taste for clean, readable, modern interfaces.",
      "skills.hardware_title": "PC & Optimization",
      "skills.hardware_text": "Assembly, configuration, testing, and understanding of components and performance.",
      "tech.eyebrow": "Tech Projects",
      "tech.title": "My technical projects to learn, test, and keep improving.",
      "status.code": "Code · beginner",
      "status.search": "Looking for an art director",
      "tech.project_1_title": "Web Portfolio",
      "tech.project_1_text": "My personal website, the first project I coded: navigation, animations, and a polished presentation.",
      "tech.project_2_title": "PC Hardware",
      "tech.project_2_text": "Building, optimizing, and analyzing performance on personal configurations.",
      "tech.project_3_title": "Vendetta System prototype (Python)",
      "tech.project_3_text": "I prototype in Python first: NPC memory and faction states. Once the system works well, I'll port it to Unreal Engine.",
      "setup.eyebrow": "Setup progress",
      "setup.title": "A progression built with work, not excuses.",
      "setup.before_eyebrow": "Before",
      "setup.before_title": "Concept phase",
      "setup.before_text": "I started imagining my worlds, stories, and early systems on a modest machine. Vision comes before hardware.",
      "setup.before_item_1": "CPU: Intel Core i3-6100",
      "setup.before_item_2": "GPU: Intel HD Graphics 530",
      "setup.before_item_3": "Use: writing, game design, first experiments",
      "setup.now_eyebrow": "Now",
      "setup.now_title": "Development phase",
      "setup.now_text": "My current setup lets me push visuals, prototyping, and production further.",
      "setup.now_item_1": "CPU: AMD Ryzen 5 5500",
      "setup.now_item_2": "GPU: NVIDIA GeForce RTX 5060 Ti (PNY)",
      "setup.now_item_3": "RAM: 32GB DDR4",
      "setup.now_item_4": "Storage: Samsung 990 EVO Plus 1TB NVMe SSD",
      "vendetta.eyebrow": "Vendetta System",
      "vendetta.title": "The tech behind my narrative AI.",
      "vendetta.text": "Vendetta System is my narrative + AI engine project. I'm designing it as a full system and starting to code it.",
      "vendetta.item_1": "Narrative AI: memory, consequences, and faction states.",
      "vendetta.item_2": "Method: prototype in Python first, then port to Unreal Engine once the system is solid.",
      "vendetta.item_3": "Optimization goals: GPU/VRAM, streaming, loading times.",
      "vendetta.item_4": "Goal: connect hardware + AI for a smooth experience.",
      "vendetta.goal_label": "Positioning",
      "vendetta.goal_text": "My fascination does not stop at code. I believe the future of AI depends on hardware power and architecture.",
      "vendetta.cta": "View the roadmap",
      "studio.eyebrow": "Game Studio",
      "studio.title": "A studio I want to build around meaning, respect, and long-term impact.",
      "studio.bubble": "I want to create a game studio in France, with a strong cultural identity, ambitious narrative games, and a more human way of working.",
      "studio.search": "I'm looking for someone to handle the art direction (AD) of my games.",
      "studio.system_eyebrow": "Vendetta System",
      "studio.system_title": "A persistent memory AI",
      "studio.system_text": "A system in design: enemies remember, change status, adapt to the player's style, and can return later with new strategies.",
      "studio.system_trait_1": "Memory of grudges, humiliations, and losses",
      "studio.system_trait_2": "Dynamic hierarchy and organic promotions",
      "studio.system_trait_3": "Retaliation adapted to the player's style",
      "studio.system_trait_4": "Long-term impact on factions and saves",
      "studio.creation_eyebrow": "Creation",
      "studio.creation_title": "The studio's identity",
      "studio.creation_text": "A cultural, ambitious vision open to the world, with a focus on respecting teams and players.",
      "studio.creation_trait_1": "Cultural roots and strong identity",
      "studio.creation_trait_2": "French original version with international reach",
      "studio.creation_trait_3": "Ambitious creation even with limited means at first",
      "studio.creation_trait_4": "Respect for players, teams, and meaning",
      "vision.eyebrow": "Vision",
      "vision.title": "A studio that is more human, fairer, and closer to players.",
      "vision.card_1_title": "The Studio",
      "vision.card_1_text": "I want to build a studio that stands for ambitious, cultural, and accessible games, without following the industry's usual abuses.",
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
      "footer.text": "© 2026 Adam - Personal portfolio and game studio vision.",
      "status.priority": "Priority project",
      "status.world": "Narrative research",
      "studio.games_title": "My games",
      "studio.group_da": "Looking for art direction",
      "studio.group_world": "Narrative research & worldbuilding",
      "studio.label_mech": "Mechanics",
      "studio.label_da": "Target art direction",
      "g.survivor.tag": "Psychological thriller · locked-room survival",
      "g.survivor.title": "SURVIVOR CLUB - Echo Protocol",
      "g.survivor.pitch": "Hoshigawa high school gets locked down after an old event tied to a student's tragedy resurfaces. You must explore, deduce, and survive social pressure and the unpredictable behavior of other students.",
      "g.survivor.mech": "suspicion system, mental health gauge (altered perception), an intruder whose identity changes each run, emotional memory for NPCs (Vendetta System).",
      "g.survivor.da": "floor plans of the school (classrooms, hallways, roof, basement), character sheets (uniforms, fear and suspicion expressions), dark anime / psychological thriller mood with cold lighting.",
      "g.alamut.tag": "Espionage thriller · infiltration",
      "g.alamut.title": "The Order of Alamut",
      "g.alamut.pitch": "The Son Ben Youssef inherits a bloodline tied to a secret organization working in the shadows of modern power. Each mission transforms factions, alliances, and the memory of the world.",
      "g.alamut.mech": "influence across several networks, choices with lasting consequences over 3 generations, persistent confrontations (Vendetta System).",
      "g.alamut.da": "neo-noir mood, institutional architecture, strong shadow contrasts.",
      "g.vampire.tag": "Action · stealth · gothic parkour",
      "g.vampire.title": "Vampire's Decree",
      "g.vampire.pitch": "As a young assassin, you take contracts against vampires, from villages to manors, until you uncover a royal conspiracy.",
      "g.vampire.mech": "rooftop parkour, gadgets (garlic, stakes, bows), skill tree, moral choices that change the ending.",
      "g.vampire.da": "dark gothic world, manors, mist, gothic architecture.",
      "g.lawbreaker.tag": "Narrative open world · crime & justice",
      "g.lawbreaker.title": "LAWBREAKER - Padis City",
      "g.lawbreaker.pitch": "In a metropolis inspired by Paris, Karime, a lawyer, argues in court and acts in the field against factions: mafia, triad, gangs.",
      "g.lawbreaker.mech": "pleading and persuasion, close combat, dynamic neighborhood reputation, persistent adversaries (Vendetta System).",
      "g.lawbreaker.da": "modern urban style, very distinct districts.",
      "g.varya.tag": "Survival · persistent world",
      "g.varya.title": "Dunes of Varya",
      "g.varya.pitch": "In the desert territory of Varya, inspired by the Sahara and the Sahel, you are a mercenary, clan leader, or trader amid faction wars.",
      "g.varya.mech": "dynamic weather (sandstorms that move the paths), heat and hydration, trade caravans, a world that evolves even when you're away.",
      "g.varya.da": "Saharan landscapes, sandstorms, fortified cities.",
      "g.afrika.tag": "Narrative adventure · alternate history",
      "g.afrika.title": "AFRIKA: Sands of Freedom",
      "g.afrika.pitch": "Yanis Ben Amar lives in an Africa under colonial rule. The game starts from real historical facts, then shifts into an alternate history where your actions free territories.",
      "g.afrika.mech": "dynamic village liberation, network of informants and guerrillas, adaptive repression by colonial forces.",
      "g.afrika.da": "Maghreb medinas, Central African forests, period costumes.",
      "g.cendre.tag": "Narrative FPS · historical drama",
      "g.cendre.title": "BORDERS OF ASH - Chronicles of Algeria",
      "g.cendre.pitch": "A journey through the Algerian war from three irreconcilable human perspectives.",
      "g.cendre.mech": "campaign choice (French, independence, or civilian viewpoint), fragmented truth to piece together, raw and rare combat.",
      "g.cendre.da": "realistic look, period rural and urban landscapes.",
      "status.hw": "Hardware & System",
      "status.learning": "Learning",
      "tech.project_6_title": "Hackintosh",
      "tech.project_6_text": "I installed macOS on a non-Apple PC (HP ProDesk 400 G3) using OpenCore, by editing configuration files (plist). It really works: graphics acceleration, web, and everyday use. I'm learning how a computer boots and how its components talk to each other.",
      "tech.project_7_title": "Study: GPUs and graphics drivers",
      "tech.project_7_text": "I'm trying to understand how a modern NVIDIA GPU, Metal, and graphics drivers work. I'm a beginner: it's a long-term learning goal tied to my wish to become an engineer."
    }
  },
  "roadmap": {
    "fr": {
      "nav.portfolio": "Portfolio",
      "nav.roadmap": "Roadmap",
      "skip.link": "Aller au contenu",
      "roadmap.eyebrow": "Roadmap",
      "roadmap.title": "Roadmap 2025-2030",
      "roadmap.text": "Mes grandes étapes pour passer du concept au jeu jouable : Alpha, Beta, puis version 1.0.",
      "meta.description": "Roadmap 2025-2030 : les étapes de développement du Vendetta System et de mes jeux.",
      "roadmap.tab_double_title": "Étapes 2025-2030",
      "roadmap.tab_double_subtitle": "Alpha → 1.0",
      "roadmap.tab_vision_title": "Vision & ambition",
      "roadmap.tab_vision_subtitle": "Hardware + IA",
      "roadmap.tab_setup_title": "Setup & optimisation",
      "roadmap.tab_setup_subtitle": "Goulots d'étranglement",
      "roadmap.double_title": "Les grandes étapes",
      "roadmap.double_intro": "Chaque année a un objectif clair. Les jalons techniques suivent Alpha → Beta → 1.0.",
      "roadmap.track_pro": "Studio",
      "roadmap.double_tag_2025": "Histoire",
      "roadmap.double_2025_pro": "Fin 2025 : création de l'histoire, du lore et des concepts de mes jeux.",
      "roadmap.double_tag_2026": "Système",
      "roadmap.double_2026_pro": "2026 (actuel) : prototype du Vendetta System en Python (je débute en code) + premiers essais de mes jeux.",
      "roadmap.double_tag_2027": "Alpha",
      "roadmap.double_2027_pro": "Tests Alpha : stabilité, boucles de gameplay, première version jouable.",
      "roadmap.double_tag_2028": "Beta (P1)",
      "roadmap.double_2028_pro": "Beta - phase 1 du jeu : progression, systèmes, outils et optimisation.",
      "roadmap.double_tag_2029": "Démos (P2)",
      "roadmap.double_2029_pro": "Sortie des démos + Beta phase 2 : contenu, polish, performance et stabilité.",
      "roadmap.double_tag_2030": "Sortie",
      "roadmap.double_2030_pro": "Sortie du jeu (France), puis extension si ça marche : traduction et autres régions.",
      "roadmap.vision_title": "Vision & ambition (hardware + IA)",
      "roadmap.vision_text": "Ma fascination ne s'arrête pas au code. Je crois que le futur de l'IA dépend de la puissance et de l'architecture hardware. Mon objectif est de devenir ingénieur pour concevoir les systèmes où le matériel et l'intelligence artificielle ne font qu'un.",
      "roadmap.vision_why_label": "Pourquoi",
      "roadmap.vision_why_text": "Parce que les performances, l'écran, le stockage et l'architecture GPU déterminent ce que l'IA peut faire en temps réel.",
      "roadmap.vision_how_label": "Comment",
      "roadmap.vision_how_text": "En apprenant la conception système, l'optimisation et la mesure (profiling) pour relier théorie et résultats.",
      "roadmap.setup_title": "Setup actuel & optimisation",
      "roadmap.setup_intro": "Mon setup actuel est solide pour prototyper, mais certaines limites (écran et puissance GPU/VRAM) deviennent le goulot pour l'IA et la qualité visuelle.",
      "roadmap.setup_now_title": "Configuration actuelle",
      "roadmap.setup_cpu": "CPU : AMD Ryzen 5 5500",
      "roadmap.setup_gpu": "GPU : NVIDIA GeForce RTX 5060 Ti (8 Go)",
      "roadmap.setup_ram": "RAM : 32 Go DDR4",
      "roadmap.setup_ssd": "SSD : Samsung 990 EVO Plus 1 To (NVMe)",
      "roadmap.setup_screen": "Écran : Acer V246HLC (1080p, 60 Hz)",
      "roadmap.setup_cta": "Voir la section setup du portfolio",
      "roadmap.bottleneck_title": "Goulots d'étranglement",
      "roadmap.bottleneck_text": "Pour passer à l'étape suivante (calibration, rendu avancé, IA temps réel), il me faudrait un écran de précision et une marge GPU supérieure.",
      "roadmap.bottleneck_display": "Écran / précision couleur",
      "roadmap.bottleneck_display_value": "Goulot",
      "roadmap.bottleneck_gpu": "GPU / VRAM (path tracing)",
      "roadmap.bottleneck_gpu_value": "À renforcer",
      "roadmap.bottleneck_storage": "Stockage / streaming",
      "roadmap.bottleneck_storage_value": "Bon",
      "document.title": "Roadmap | Adam"
    },
    "en": {
      "nav.portfolio": "Portfolio",
      "nav.roadmap": "Roadmap",
      "skip.link": "Skip to content",
      "roadmap.eyebrow": "Roadmap",
      "roadmap.title": "Roadmap 2025-2030",
      "roadmap.text": "My main steps to go from concept to playable game: Alpha, Beta, then version 1.0.",
      "meta.description": "2025-2030 roadmap: development milestones for the Vendetta System and my games.",
      "roadmap.tab_double_title": "Milestones 2025-2030",
      "roadmap.tab_double_subtitle": "Alpha → 1.0",
      "roadmap.tab_vision_title": "Vision & ambition",
      "roadmap.tab_vision_subtitle": "Hardware + AI",
      "roadmap.tab_setup_title": "Setup & optimization",
      "roadmap.tab_setup_subtitle": "Bottlenecks",
      "roadmap.double_title": "The main milestones",
      "roadmap.double_intro": "Each year has a clear goal. Technical milestones follow Alpha → Beta → 1.0.",
      "roadmap.track_pro": "Studio",
      "roadmap.double_tag_2025": "Story",
      "roadmap.double_2025_pro": "Late 2025: create the story, lore, and core concepts of my games.",
      "roadmap.double_tag_2026": "System",
      "roadmap.double_2026_pro": "2026 (current): prototyping the Vendetta System in Python (I'm a beginner at coding) + first game experiments.",
      "roadmap.double_tag_2027": "Alpha",
      "roadmap.double_2027_pro": "Alpha testing: stability, gameplay loops, first playable version.",
      "roadmap.double_tag_2028": "Beta (P1)",
      "roadmap.double_2028_pro": "Beta - phase 1: progression, systems, tools, and optimization.",
      "roadmap.double_tag_2029": "Demos (P2)",
      "roadmap.double_2029_pro": "Release demos + Beta phase 2: content, polish, performance, stability.",
      "roadmap.double_tag_2030": "Release",
      "roadmap.double_2030_pro": "Release (France), then expand if it works: localization and other regions.",
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
      "roadmap.bottleneck_title": "Bottlenecks",
      "roadmap.bottleneck_text": "To reach the next step (calibration, advanced rendering, real-time AI), I would need a precision display and more GPU headroom.",
      "roadmap.bottleneck_display": "Display / color accuracy",
      "roadmap.bottleneck_display_value": "Bottleneck",
      "roadmap.bottleneck_gpu": "GPU / VRAM (path tracing)",
      "roadmap.bottleneck_gpu_value": "Needs headroom",
      "roadmap.bottleneck_storage": "Storage / streaming",
      "roadmap.bottleneck_storage_value": "Good",
      "document.title": "Roadmap | Adam"
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
  const rand = (min, max) => Math.random() * (max - min) + min;

  const shuffleBubble = (bubble, initial) => {
    const size = rand(10, 56);
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${rand(0, 100)}%`;
    bubble.style.opacity = `${rand(0.25, 0.7)}`;
    bubble.style.setProperty("--dx", `${rand(-50, 50)}px`);
    // les petites bulles montent un peu plus vite que les grandes
    bubble.style.animationDuration = `${rand(20, 42) + size / 4}s`;
    // délai négatif au premier affichage : des bulles sont déjà en route
    bubble.style.animationDelay = initial ? `${-rand(0, 40)}s` : "0s";
  };

  const bubbleCount = window.innerWidth < 700 ? 9 : 16;

  for (let i = 0; i < bubbleCount; i += 1) {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    shuffleBubble(bubble, true);
    // à chaque remontée, la bulle change de place, de taille et de vitesse
    bubble.addEventListener("animationiteration", () => shuffleBubble(bubble, false));
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
