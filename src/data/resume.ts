export const navItems = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Featured Projects" },
  { id: "skills", label: "Technical Matrix" },
  { id: "credentials", label: "Credentials" },
  { id: "education", label: "Education" },
] as const;

export const profile = {
  name: "Vemula Venkatesh",
  shortRole: "Principal AEM & Full Stack Developer",
  location: "Bangalore, Karnataka, India",
  email: "vemulavenkatesh143@gmail.com",
  phone: "+91 8807972221",
  docRef: "VV-AEM-8Y",
  availability: "Open to Global Architect Roles • Updated Q1 2025",
  heroTitleLead: "Senior Principal",
  heroTitleAccent: "AEM Architect &",
  heroTitleTrail: "Lead Systems Engineer",
  summary:
    "Over 8 years orchestrating enterprise content management ecosystems, multi-tenant digital experience architectures, and mission-critical cloud migrations for Global Fortune 500 enterprises including Keysight Technologies, American International Group, and Avis Budget Group.",
  tags: ["AEM 6.5", "AEM Cloud", "Java"],
};

export const stats = [
  {
    label: "Tenure & Delivery",
    value: "8.5+",
    detail: "Years Full-Lifecycle",
    note: "From Mindtree Campus Mind (2015) to Enterprise Lead.",
  },
  {
    label: "Enterprise Footprint",
    value: "06",
    detail: "Global Programs",
    note: "Keysight KWP, AIG GDDP, Travel Guard, Avis DRO, multi-brand.",
  },
  {
    label: "Accreditations",
    value: "02",
    detail: "Master Certifications",
    note: "Adobe Certified Expert (AEM 6) & Certified Angular Engineer.",
  },
  {
    label: "Corporate Distinctions",
    value: "04",
    detail: "Excellence Awards",
    note: "Double SPOT Awards, Spirit of Winning & Summit Trophies.",
  },
];

export const thesis = {
  eyebrow: "Core Architectural Thesis",
  title: "High-Resilience Content Engineering",
  blurb:
    "Balancing decoupled headless flexibility with monolithic authoring ergonomics across highly regulated enterprise environments.",
  pillars: [
    {
      title: "End-to-End AEM Governance",
      body: "Deep-rooted in CQ5 through AEM 6.4–6.5 and AEM as a Cloud Service, specializing in Sling Models, HTL/Sightly, OSGi R6/R7 bundles, and Custom Replication Flush Agents.",
    },
    {
      title: "Modern SPA & Hybrid Headless",
      body: "Pioneered AEM SPA Editor POCs with Angular 6/7; created frictionless workflows reconciling in-context authoring with decoupled client-side web applications.",
    },
    {
      title: "Scale, Caching & Edge Delivery",
      body: "Dispatcher fine-tuning, cache invalidation schemes, AWS DynamoDB integrations, Akamai CDN Edge routing, and high-concurrency quote calculation engines.",
    },
    {
      title: "Agile Product Leadership",
      body: "Cross-functional team mentoring, sprint planning, client stakeholder mediation, and architectural design documentation across North American and European delivery teams.",
    },
  ],
};

export const experience = [
  {
    company: "TA Digital · Keysight Technologies",
    title: "Principal Software Engineer / Senior AEM Developer",
    period: "Jan 2021 — Present",
    location: "Bangalore",
    points: [
      "Lead AEM delivery across KWP, WLM, and ACT programs for Keysight’s global digital experience platforms.",
      "Implement Spring Boot services, Eloqua forms, Link Type Transformers, preprocessors, and Dispatcher Flush Agents.",
      "Build Sling Services calling REST APIs with Gson, event listeners, tag management, schedulers, filters, and sync distribution.",
      "Deliver AEM crawling pipelines feeding AWS, software download pages via Akamai, and DynamoDB form integrations.",
      "Recognized with SPOT Awards for delivery quality on Keysight engagements.",
    ],
  },
  {
    company: "Mphasis · American International Group",
    title: "Senior AEM Developer",
    period: "Apr 2018 — Dec 2020",
    location: "Bangalore",
    points: [
      "Built foundation form components, editable templates, and Sling Models for AIG Global Digital Distribution (GDDP).",
      "Enabled author-driven purchase-path flows with AngularJS business logic and servlet-backed service connectivity.",
      "Delivered Adaptive Forms Data Integration via Form Data Model for Travel Guard worldwide platforms.",
      "Led AEM SPA Editor POC with Angular 6, Component Exporter JSON bindings, and headless CMS patterns.",
      "Awarded Spirit of Winning (Monthly Summit) and Summit Award for project go-live excellence.",
    ],
  },
  {
    company: "Mindtree · Avis Budget Group",
    title: "Senior Software Engineer / AEM Developer",
    period: "Jul 2015 — Mar 2018",
    location: "Bangalore",
    points: [
      "Joined as Campus Mind (Jul 19, 2015) and delivered Digital Revenue Optimization across Avis, Budget, Payless, and Zipcar.",
      "Built AEM 6 components, templates, custom workflows, and cron schedulers with AngularJS front ends.",
      "Migrated multi-brand rental experiences toward unified multi-site authoring for mobile, tablet, and desktop.",
    ],
  },
];

export const projects = [
  {
    name: "Keysight KWP",
    period: "Jan 2022 — Present",
    stack: "Java 1.8, AEM 6.4, HTL/Sightly, Maven, JS",
    description:
      "Enterprise web platform modules spanning quote expansion to EU regions, Eloqua form implementation, Link Type Transformers, preprocessors, and Dispatcher Flush Agent configuration.",
  },
  {
    name: "Keysight WLM",
    period: "Jun 2021 — Dec 2021",
    stack: "Java 1.8, AEM 6.4, HTL/Sightly, Maven, JS, AWS",
    description:
      "AEM crawling implementation with JSON feeds to AWS, Akamai-backed software download pages, DynamoDB form capture, and automated tag creation with page replication.",
  },
  {
    name: "Keysight ACT",
    period: "Jan 2021 — May 2021",
    stack: "Java 1.8, AEM 6.4, AngularJS, HTL/Sightly, Maven",
    description:
      "Quote forms covering personal, address, and payment details — form components, servlet service connectivity, and foundation-level component reuse.",
  },
  {
    name: "AIG GDDP",
    period: "Nov 2019 — Dec 2020",
    stack: "Java 1.8, AEM 6.5, AngularJS, HTL/Sightly, Maven",
    description:
      "Foundation purchase-path form components with business validations and Form Container service orchestration so authors can assemble flows without IT involvement.",
  },
  {
    name: "AIG Travel Guard",
    period: "Apr 2018 — Oct 2019",
    stack: "Java 1.8, AEM 6.4, Adaptive Forms, FDM, jQuery",
    description:
      "Authoring capabilities for North American travel insurance purchase paths, Adaptive Forms Data Integration, and platform-level component promotion worldwide.",
  },
  {
    name: "Avis Budget Group DRO",
    period: "Jan 2016 — Mar 2018",
    stack: "Java 1.8, AEM 6, AngularJS, HTL/Sightly, Maven",
    description:
      "Digitalized multi-brand car rental applications with advanced authoring, custom workflows, schedulers, and unified responsive experiences.",
  },
];

export const skillGroups = [
  {
    label: "Platform",
    items: [
      "AEM (CQ5 → 6.5 / Cloud Service)",
      "OSGi R6/R7",
      "Sling Models & Servlets",
      "HTL / Sightly",
      "Dispatcher & Flush Agents",
      "Editable Templates",
      "Adaptive Forms / FDM",
      "AEM SPA Editor",
    ],
  },
  {
    label: "Engineering",
    items: [
      "Java 1.8+",
      "Spring Boot",
      "AngularJS / Angular 6–7",
      "JavaScript & jQuery",
      "HTML / CSS",
      "Maven",
      "REST / Gson",
    ],
  },
  {
    label: "Delivery & Edge",
    items: [
      "Akamai CDN",
      "AWS DynamoDB",
      "Cache invalidation",
      "Multi-site management",
      "Agile / Scrum",
      "JIRA / TFS",
      "GitHub / Bitbucket / SVN",
    ],
  },
];

export const credentials = {
  certifications: [
    "Adobe Certified Expert — AEM 6 Developer",
    "Edureka Certified AngularJS 1.5 Developer",
  ],
  awards: [
    "SPOT Award — Keysight / TA Digital (Project Manager)",
    "SPOT Award — Keysight ACT engagement",
    "Spirit of Winning — Monthly Summit (AIG GDDP)",
    "Summit Award — Best performer, Travel Guard go-live",
  ],
};

export const education = {
  eyebrow: "Foundational Pillars",
  title: "Education & Demographics",
  intro:
    "Formal engineering pedigree combined with cross-cultural multilingual delivery fluency.",
  academic: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      school: "SRM University, Chennai, Tamil Nadu",
      period: "2011 — 2015",
      result: "First Class Distinction",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Mathematics, Physics & Chemistry (MPC)",
      school: "Narayana Junior College, AP State Board",
      period: "2009 — 2011",
      result: "93.4% Aggregate",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "",
      school: "Good Shepherd English Medium High School, AP State Board",
      period: "Graduated 2009",
      result: "84.5% Aggregate",
    },
  ],
  languages: [
    { name: "English", level: "Professional Full Working" },
    { name: "Telugu", level: "Native / Mother Tongue" },
    { name: "Hindi", level: "Professional Working" },
    { name: "Kannada", level: "Conversational Working" },
  ],
  locations: [
    { label: "Current Base", value: "Bangalore, Karnataka, India" },
    { label: "Permanent Domicile", value: "Nandyal, Andhra Pradesh, India" },
  ],
  eligibility:
    "Valid Indian Passport, eligible for direct business and global relocation sponsorships.",
};

export const engagement = {
  eyebrow: "Direct Architectural Engagement",
  title:
    "Available for Enterprise Architecture, Headless Consulting & Principal roles.",
  phone: "+91 8807972221",
  cta: "Initiate Dispatch",
};
