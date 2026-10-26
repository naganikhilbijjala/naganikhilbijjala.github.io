// All portfolio copy lives here. Edit this file, not the components.

export const hero = {
  eyebrow: "Software Engineer II · Smart Structures",
  headline: ["I build software", "from database", "to pixel."],
  // The word in `headline` to render in the serif/italic accent style.
  accentWord: "pixel.",
  sub: "Full-stack software engineer with 5+ years of experience across payments, construction data platforms, drone-data pipelines and LLM-powered products. I take features from schema to UI and keep them fast in production.",
  // Flip to true to show a green “open to opportunities” pill instead.
  openToWork: false
};

export const stats = [
  {value: "5+", label: "years shipping production software"},
  {value: "50%", label: "faster initial load via SSR tuning in Next.js"},
  {value: "100M+", label: "cards tokenized on services I helped build"},
  {value: "25%", label: "engagement lift from a consistent UI system"}
];

export const experience = [
  {
    role: "Software Engineer II",
    company: "Smart Structures",
    logo: "/images/smartStructuresIcon.png",
    logoWide: true,
    period: "May 2024 — Present",
    summary:
      "Full-stack engineer on SmartInfraHub, a data-management platform for large construction projects, and TerrainPulse, a drone-survey processing and analysis platform.",
    points: [
      "Replaced Excel workflows with config-driven SurveyJS forms for geotechnical tests (grain size, proctor, nuclear gauge, sand cone) that auto-populate and auto-calculate values to ASTM standards.",
      "Built dashboards, MUI DataGrid + chart views and an XER import pipeline for schedule progress, plus signed-and-sealed PDF report generation with Bold Reports.",
      "Built the drone-data processing pipeline behind TerrainPulse (orthomosaics, DSM, point clouds) with Next.js, NestJS, Python workers and BullMQ, plus stockpile volume, cross-section and design-vs-survey tools on MapLibre.",
      "Set up Grafana, Loki and Sentry monitoring, GitHub Actions pipelines and a BullMQ queue visualizer; fixed N+1 queries and redundant service calls with caching.",
      "Cut initial load times by 50% by tuning SSR and hydration in Next.js; integrated LLMs with LangChain, LangGraph and RAG; built Claude Code skills and MCP integrations that speed up PRs, reviews and bug triage."
    ],
    tags: ["Next.js", "NestJS", "Python", "BullMQ", "PostgreSQL", "Azure", "LangChain"]
  },
  {
    role: "Application Developer",
    company: "UNC Charlotte — ONE IT",
    logo: "/images/unccLogo.png",
    period: "Jan 2023 — Dec 2023",
    summary: "Internal tools and APIs for the university's IT organisation.",
    points: [
      "Adopted React Query for fetching, caching and sync — 40% faster data loading.",
      "Built Node/Express REST APIs on PostgreSQL via TypeORM, improving query performance by 25%.",
      "Generated dynamic forms with SurveyJS (+40% efficiency) and covered the code with Jest and React Testing Library.",
      "Applied WCAG accessibility standards across React components."
    ],
    tags: ["React Query", "Node.js", "PostgreSQL", "Jest", "WCAG"]
  },
  {
    role: "Software Development Engineer",
    company: "Juspay",
    logo: "/images/juspayLogo.jpeg",
    period: "Jun 2021 — Jul 2022",
    summary: "Payments infrastructure at scale.",
    points: [
      "Designed a modular microservice architecture for card tokenization with an API gateway — 100M+ cards tokenized across Visa and Mastercard.",
      "Built REST APIs with Spring Boot, Redis and AWS.",
      "Shipped a Redis-backed config system for controlled rollouts, cutting merchant onboarding time by 70%."
    ],
    tags: ["Java", "Spring Boot", "Redis", "AWS"]
  },
  {
    role: "Software Development Engineer Intern",
    company: "Juspay",
    logo: "/images/juspayLogo.jpeg",
    period: "Dec 2020 — Jun 2021",
    summary: "Card-on-File project and test automation.",
    points: [
      "Worked on Card on File, letting users manage cards across merchants from a bank app — 50% shorter transactions.",
      "Designed the relational data model for merchants and customers.",
      "Automated regression testing with Selenium and JUnit (+20% efficiency)."
    ],
    tags: ["Java", "SQL", "Selenium"]
  }
];

export const workProjects = [
  {
    name: "SmartInfraHub",
    tagline: "Data management for construction",
    description:
      "Platform used on a major 18-mile embankment dam project: complex test forms, dashboards, approval workflows and PDF reporting in place of spreadsheets.",
    stack: ["Next.js", "SurveyJS", "MUI", "Node.js", "PostgreSQL"],
    live: "https://www.smartinfrahub.com/"
  },
  {
    name: "TerrainPulse",
    tagline: "Drone survey analysis",
    description:
      "Turns thousands of drone images into orthomosaics, elevation models and point clouds, with tools for stockpile volumes, profiles and design-vs-actual comparison.",
    stack: ["Next.js", "NestJS", "Python", "BullMQ", "MapLibre"],
    live: "https://terrainpulse.com/"
  }
];

export const projects = [
  {
    name: "ApplyStack",
    tagline: "Job application tracker with an AI copilot",
    description:
      "Kanban and list tracker that saves each job description, records which resume you sent, and generates tailored, ATS-scored resumes. A Chrome extension saves jobs and fills application forms in one click, and an MCP server lets Claude work with your tracker directly.",
    stack: ["Python", "Turso (SQLite)", "Vercel", "Chrome extension", "MCP"],
    github: "https://github.com/naganikhilbijjala/job-tracker",
    live: "https://applystack.app"
  },
  {
    name: "FinPilot",
    tagline: "Precision portfolio analytics",
    description:
      "Track investment allocations across countries and asset classes, with CAGR and XIRR for SIPs, an IPO watchlist and live portfolio analytics.",
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/naganikhilbijjala/finpilot",
    live: "https://precision-portfolio-analytics.vercel.app/"
  },
  {
    name: "LedgeWise",
    tagline: "Smart financial ledger",
    description:
      "Expense tracking and ledger management with spending insights. Type-safe full-stack architecture, Prisma ORM and thorough test coverage.",
    stack: ["Next.js", "TypeScript", "Prisma"],
    github: "https://github.com/naganikhilbijjala/ledge-wise",
    live: "https://ledge-wise.vercel.app/"
  },
  {
    name: "BioCraft",
    tagline: "Bio data builder",
    description:
      "Create professional bio-data PDFs with customisable templates and instant generation, with secure handling of personal data.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/naganikhilbijjala/bio-data-builder",
    live: "https://bio-data-builder.vercel.app/"
  }
];

export const skills = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material-UI",
      "MapLibre",
      "Zustand",
      "React Query",
      "SurveyJS",
      "Accessibility (WCAG)"
    ]
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "Python",
      "Java",
      "Spring Boot",
      "TypeORM",
      "REST APIs",
      "Microservices"
    ]
  },
  {
    group: "Data & Queues",
    items: ["PostgreSQL", "Redis", "BullMQ", "GDAL", "NodeODM", "PMTiles", "Plotly"]
  },
  {
    group: "Cloud & DevOps",
    items: ["Azure", "AWS", "Docker", "GitHub Actions", "Grafana", "Loki", "Sentry"]
  },
  {
    group: "AI",
    items: ["LangChain", "LangGraph", "RAG", "Vector stores", "Claude Code", "MCP"]
  },
  {
    group: "Testing",
    items: ["Jest", "React Testing Library", "Playwright", "Selenium", "JUnit"]
  }
];

export const education = [
  {
    school: "University of North Carolina at Charlotte",
    logo: "/images/unccLogo.png",
    degree: "M.S. in Computer Science",
    period: "Aug 2022 — Dec 2023"
  },
  {
    school: "Jawaharlal Nehru Technological University",
    logo: "/images/jntuLogo.png",
    degree: "B.Tech in Computer Science",
    period: "Jul 2017 — May 2021"
  }
];
