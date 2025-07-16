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
    institution: "Sri Krishna College of Engineering and Technology",
    location: "Coimbatore, India",
    degree: "B Tech Information Technology",
    period: "Jun 2021 - Jun 2025",
    achievements: [
      "President of the Department of Information Technology",
      "G20 student delegate",
      "Organized multiple technical workshops and events",
      "Represented my college in multiple national and international hackathons and won.",
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
    title: "Net Zero Carbon Emissions",
    github: "https://github.com/rishikesh2003/Prodigi",
    description: [
      "WiFi-RTT: Developed indoor occupancy tracking for energy optimization.",
      "IoT Solutions: Implemented smart monitoring for energy efficiency and food waste reduction.",
      "Real-Time Tracking: Designed systems to monitor carbon emissions and optimize resources.",
      "Data-Driven Insights: Analyzed user patterns for adaptive energy and food management.",
      "Reward Integration: Built QR-based green points system to incentivize eco-friendly actions.",
    ],
  },
  {
    title: "Mental Aarog",
    github: "https://github.com/rishikesh2003/mental-aarog",
    description: [
      "A holistic mental health app leveraging AI and blockchain for early detection and personalized solutions for depression.",
      "Features include social media analysis (ML-based sentiment tracking), PHQ-9 assessments, smartwatch integration for sleep and activity data, guided meditation, and smart suggestions for food, travel, music, and movies.",
      "Developed a rewards system using MAG crypto token on Ethereum, enabling user engagement through in-app incentives.",
      "Secure storage implemented via web3.storage, IPFS, and FileCoin.",
      "Built with React, Supabase, Node.js, Flask, and Solidity, showcasing seamless integration of health tech and blockchain.",
    ],
  },
];

export const awards = [
  {
    name: "IEEE YESIST12 Hackathon",
    issuer: "IEEE",
    date: "Sep 2022",
    type: "International",
    position: "Second Place",
  },
  {
    name: "Prodigi Cognizant Hackathon",
    issuer: "Cognizant",
    date: "Feb 2023",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Cisco Thingqbator Hackathon",
    issuer: "Cisco",
    date: "Jan 2023",
    type: "National",
    position: "First Runner-up",
  },
  {
    name: "Innovators Day",
    issuer: "Sri Manakula Vinayagar Engineering College, Pondicherry",
    date: "Sep 2022",
    type: "National",
    position: "First Prize",
  },
  {
    name: "KG Hackfest'22",
    issuer: "KGiSL Institute of Technology, Coimbatore",
    date: "Sep 2022",
    type: "National",
    position: "Second Prize",
  },
  {
    name: "Innohacks'22",
    issuer: "Innogeeks, KIET Group of Institutions, New Delhi",
    date: "May 2022",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Hack @ SKCET",
    issuer: "Hackclub SKCET, SKCET, Coimbatore",
    date: "Feb 2022",
    type: "National",
    position: "Most Impactful Hack",
  },
];
