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
      "Conception et développement d’un pipeline ELT pour l’intégration de nouvelles sources de données externes au CHU, élargissant la portée analytique du datalake.",
      "Mise en place de contrôles de qualité et processus de montée en qualité des données (standardisation, historisation, gestion des nomenclatures).",
      "Suivi et résolution des incidents liés à l’infrastructure data (Kubernetes, Vault, planification via Dagster, CI/CD avec ArgoCD).",
      "Support aux équipes de recherche : extraction, transformation et mise à disposition des données de santé dans le cadre de projets scientifiques.",
      "Extension de l’EDS à des sources non hospitalières, créant une interopérabilité entre le CHU de Reims et des partenaires externes.",
      "Rédaction de documentations techniques et participation aux développements technologiques de l’institut.",
    ],
  },
  {
    company: "Préfecture de Police de Paris",
    location: "Le Chesnay, France", 
    position: "Ingénieur Data",
    period: "Fév 2023 - Sep 2024",
    achievements: [
      "Analyse des données de la flotte de véhicules en Île-de-France afin d'éclairer la prise de décision. (Python : Pandas, Plotly).",
      "Automatisation des processus de validation des données pour garantir l'intégrité et la qualité des informations avec Python.",
      "Développement de scripts ETL pour l'extraction, la transformation et le chargement des données avec Python.",
      "Qualification et migration des données vers le système INFOR-EAM.",
      "Création de rapports et tableaux de bord interactifs via IBM Cognos Analytics afin de rendre les données plus lisibles et compréhensibles.",
      "Développement d'une application web interactive pour la gestion des commandes de véhicules avec Python et Flask.",
      "Gestion de bases de données relationnelles avec Oracle SQL Developer.",
    ],
  },
  {
    company: "Liris",
    location: "Lyon, France",
    position: "SIngénieur Data, Stage",
    period: "Mai 2022 - Jui 2022",
    achievements: [
      "Built interactive UIs with React.js, focusing on reusable components and performance optimization.",
      "Implemented JavaScript-based features like user authentication and real-time updates.",
    ],
  },
];

export const techStack = [
  {
    category: "Langages & Scripts",
    tools: ["Python", "SQL"],
  },
  {
    category: "Orchestration & ELT",
    tools: ["dbt", "Dagster"],
  },
  {
    category: "Infrastructure & DevOps",
    tools: ["Kubernetes", "Helm", "ArgoCD", "Vault", "GitLab CI/CD"],
  },
  {
    category: "Base de données",
    tools: ["ClickHouse"],
  },
  {
    category: "Monitoring & Observabilité",
    tools: ["Grafana"],
  },
  {
    category: "Outils de documentation",
    tools: ["Markdown", "Notion", "Git"],
  },
  {
    category: "Analyse & Science des données",
    tools: ["Jupyter", "Pandas"],
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
    "TypeScript",
    "JavaScript",
    "Python",
    "C++",
    "Java",
    "Solidity",
  ],
  frontendDevelopment: [
    "Nextjs",
    "Reactjs",
    "React Native",
    "Shadcn UI",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["Nodejs", "Expressjs"],
  databaseAndStorage: ["PostgreSQL", "Drizzle (ORM)"],
  cloudAndDevOps: ["AWS"],
  toolsAndServices: [
    "Clerk (Auth)",
    "Sanity (CMS)",
    "Tinybird (analytics)",
    "Zod",
    "Sentry",
    "Mixpanel",
    "Trigger.dev",
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
