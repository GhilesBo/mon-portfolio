export const personalInfo = {
  name: "Ghiles B",
  location: "Reims, France",
  email: "boussahlaghiles@gmail.com",
  github: "https://github.com/GhilesBo",
  linkedin: "https://www.linkedin.com/in/ghiles-boussahla/",
};

export const workExperience = [
  {
    company: "IIAS",
    location: "Reims, France",
    position: "Ingénieur Data",
    period: " Oct 2024 - Present",
    achievements: [
      "Gestion et maintenance de l’Entrepôt de Données de Santé (EDS) du CHU de Reims : supervision de la qualité, de la cohérence et de la fiabilité des données.",
      "Développement et amélioration de modèles dbt dans les couches raw, staging et clean, afin d'assurer la standardisation, l’historisation et la montée en qualité des données.",
      "Intégration de nouvelles sources de données via des connecteurs JDBC, avec mise en œuvre de pipelines ELT automatisés et scalables.",
      "Suivi et résolution des incidents liés à l’infrastructure data (Kubernetes, Vault, planification via Dagster, CI/CD avec ArgoCD).",
      "Participation au projet HD4C : intégration dans l’EDS des données issues d’autres CHU et structures de santé (EHPAD, centres de soins), tout en garantissant la gouvernance locale et le contrôle de chaque établissement sur ses propres données.",
      "Support aux équipes de recherche : extraction, transformation et mise à disposition des données de santé dans le cadre de projets scientifiques.",
      "Création de jobs Dagster automatisés permettant l’intégration récurrente et sans intervention manuelle de nouvelles données dans l’EDS.",
      "Rédaction de documentations techniques et participation aux développements technologiques de l’institut.",
    ],
  },
  {
    company: "Préfecture de Police de Paris",
    location: "Le Chesnay, France", 
    position: "Ingénieur Data",
    period: "Fév 2023 - Sep 2024",
    achievements: [
      "Automatisation des processus de validation des données pour garantir l'intégrité et la qualité des informations avec Python.",
      "Développement de scripts ETL pour l'extraction, la transformation et le chargement des données avec Python.",
      "Qualification et migration des données vers le système INFOR-EAM.",
      "Création de rapports et tableaux de bord interactifs via IBM Cognos Analytics afin de rendre les données plus lisibles et éclairer la prise de décision.",
      "Développement d'une application web interactive pour la gestion des commandes de véhicules avec Python et Flask.",
      "Gestion de bases de données relationnelles avec Oracle SQL Developer.",
    ],
  },
  {
    company: "Liris - CNRS",
    location: "Lyon, France",
    position: "Ingénieur Data, Stage",
    period: "Mai 2022 - Jui 2022",
    achievements: [
      "Conception et mise en place d'un système polystore avec Polypheny-DB pour l'intégration de données hétérogènes.",
      "Développement d'une plateforme numérique pour médecins et patients utilisant Java (Maven, Avatica, Calcite).",
      "Assurance qualité et sécurisation des données médicales multi-sources : mise en œuvre de protocoles d’anonymisation, normalisation et contrôle d’accès fondés sur les principes FAIR et de confidentialité .",
      "Packaging et orchestration Docker pour le déploiement reproductible de la solution sur environnements de test et démonstration.",
    ],
  },
];


export const education = [
  {
    institution: "IA School",
    location: "Boulogne-Billancourt, France",
    degree: "Master Intelligence Artificielle et Data Science",
    period: "Sép 2022 - Mai 2024",
    achievements: [
      "Spécialisé en NLP, Deep Learning et gestion de projets IA.",
      "Modélisation, analyse statistique, scraping et API.",
    ],
  },
  {
    institution: "Université Claude Bernard Lyon 1",
    location: "Lyon, France",
    degree: "Licence Informatique",
    period: "Sép 2018 - Mai 2022",
    achievements: [
      "Formation en informatique à l’Université Claude Bernard Lyon 1, avec une spécialisation progressive de la programmation (C++, Python, PHP) et des bases de données SQL.",
      "Réalisation de projets pratiques tels qu’un site web mini-Pinterest, un jeu Tetris en C++, et un explorateur interactif de données COVID via Jupyter Notebook.",
      "Acquisition de compétences solides en algorithmique, programmation orientée objet, conception UML, et analyse de données, accompagnée d’auto-formation sur des bibliothèques Python pour le traitement et la visualisation des données.",
    ],
  },
];

export const skills = {
  programmingLanguages: [
    "Python",
    "Java",
    "C++",
    "R",
    "Bash",
    "SQL",
  ],
  dataEngineeringAndAnalytics: [
    "dbt",
    "Dagster",
    "Apache Spark",
    "Hadoop",
    "ETL",
    "Power BI",
    "IBM Cognos Analytics",
    "RShiny",
  ],
  mlAndAI: [
    "Machine Learning",
    "NLP",
    "LLM",
    "PyTorch",
    "TensorFlow",
  ],
  databases: [
    "PostgreSQL",
    "MySQL",
    "Oracle",
    "MongoDB",
    "NoSQL",
  ],
  cloudAndDevOps: [
    "Azure",
    "GCP",
    "Kubernetes",
    "Docker",
    "Vault",
    "ArgoCD",
    "Git",
  ],
  frontendDevelopment: [
    "Astro",
    "React",
    "Shadcn UI",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  toolsAndPractices: [
    "Jira",
    "Confluence",
    "Agile (Scrum)",
    "Unix/Shell",
  ],
};

export const projects = [
  {
    title: "Détection de fake news",
    github: "https://github.com/GhilesBo/detection_fake_news_M2",
    description: [
      "Les fake news, ou fausses informations, sont des contenus délibérément trompeurs ou mensongers qui sont conçus pour manipuler ou tromper le public. Face à ce défi, il est essentiel de développer des outils et des techniques pour identifier et contrer la désinformation.",
      "Utilisation de techniques de deep learning pour la détection de fake news.",
      "Entrainement de modèles sur des ensembles de données étiquetées pour classer les nouvelles comme vraies ou fausses.",
    ],
  },
  //{
    //title: "Mental Aarog",
    //github: "https://github.com/rishikesh2003/mental-aarog",
    //description: [
    //  "A holistic mental health app leveraging AI and blockchain for early detection and personalized solutions for depression.",
    // "Features include social media analysis (ML-based sentiment tracking), PHQ-9 assessments, smartwatch integration for sleep and activity data, guided meditation, and smart suggestions for food, travel, music, and movies.",
    // "Developed a rewards system using MAG crypto token on Ethereum, enabling user engagement through in-app incentives.",
    // "Secure storage implemented via web3.storage, IPFS, and FileCoin.",
    // "Built with React, Supabase, Node.js, Flask, and Solidity, showcasing seamless integration of health tech and blockchain.",
    //],
  //},
];


