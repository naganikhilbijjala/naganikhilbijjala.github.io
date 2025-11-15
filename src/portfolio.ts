/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// TypeScript interfaces
export interface SplashScreen {
  enabled: boolean;
  duration: number;
  animation?: any;
}

export interface Illustration {
  animated: boolean;
}

export interface Greeting {
  username: string;
  title: string;
  subTitle: string;
  resumeLink: string;
  displayGreeting: boolean;
}

export interface SocialMediaLinks {
  github?: string;
  linkedin?: string;
  gmail?: string;
  gitlab?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  medium?: string;
  stackoverflow?: string;
  kaggle?: string;
  display: boolean;
}

export interface SoftwareSkill {
  skillName: string;
  fontAwesomeClassname: string;
}

export interface SkillsSection {
  title: string;
  subTitle: string;
  skills: string[];
  softwareSkills: SoftwareSkill[];
  display: boolean;
}

export interface School {
  schoolName: string;
  logo: any;
  subHeader: string;
  duration: string;
  desc?: string;
  descBullets?: string[];
}

export interface EducationInfo {
  display: boolean;
  schools: School[];
}

export interface TechStackItem {
  Stack: string;
  progressPercentage: string;
}

export interface TechStack {
  viewSkillBars: boolean;
  experience: TechStackItem[];
  displayCodersrank: boolean;
}

export interface WorkExperience {
  role: string;
  company: string;
  companylogo: any;
  date: string;
  desc?: string;
  descBullets?: string[];
}

export interface WorkExperiences {
  display: boolean;
  experience: WorkExperience[];
}

export interface OpenSource {
  showGithubProfile: string;
  display: boolean;
}

export interface FooterLink {
  name: string;
  url: string;
}

export interface BigProject {
  image: any;
  projectName: string;
  projectDesc: string;
  footerLink: FooterLink[];
}

export interface BigProjects {
  title: string;
  subtitle?: string;
  projects: BigProject[];
  display: boolean;
}

export interface AchievementCard {
  title: string;
  subtitle: string;
  image: any;
  imageAlt: string;
  footerLink: FooterLink[];
}

export interface AchievementSection {
  title: string;
  subtitle: string;
  achievementsCards: AchievementCard[];
  display: boolean;
}

export interface Blog {
  url: string;
  title: string;
  description: string;
  image?: string;
}

export interface BlogSection {
  title: string;
  subtitle: string;
  displayMediumBlogs: string;
  blogs: Blog[];
  display: boolean;
}

export interface Talk {
  title: string;
  subtitle: string;
  slides_url: string;
  event_url: string;
  image?: string;
}

export interface TalkSection {
  title: string;
  subtitle: string;
  talks: Talk[];
  display: boolean;
}

export interface PodcastSection {
  title: string;
  subtitle: string;
  podcast: string[];
  display: boolean;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  number?: string;
  email_address: string;
}

export interface TwitterDetails {
  userName: string;
  display: boolean;
}

// Splash Screen

const splashScreen: SplashScreen = {
  enabled: false, // set false to disable splash screen
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration: Illustration = {
  animated: true // Set to false to use static SVG
};

const greeting: Greeting = {
  username: "Naga Nikhil Bijjala",
  title: "Naga Nikhil Bijjala",
  subTitle:
    "Full Stack Developer with expertise in Next.js, React, NestJS, TypeScript, Node.js, Java, Spring Boot, and cloud-native applications on AWS.",
  resumeLink:
    "https://drive.google.com/file/d/1lKx0x4DW703pRtErj6XmkBLadEuSMnrg/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks: SocialMediaLinks = {
  github: "https://github.com/naganikhilbijjala",
  linkedin: "https://www.linkedin.com/in/naganikhilbijjala/",
  gmail: "naganikhil.bijjala@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection: SkillsSection = {
  title: "Technical Expertise",
  subTitle:
    "Full-stack developer with focus on backend systems and cloud architecture",
  skills: [
    "Design and implement scalable microservices and RESTful APIs",
    "Build cloud-native applications with AWS services and containerization",
    "Develop efficient database solutions and optimize system performance"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo: EducationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of North Carolina at Charlotte",
      logo: "/images/unccLogo.png",
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - December 2023"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Jawaharlal Nehru Technological University",
      logo: "/images/jntuLogo.png",
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2017 - May 2021"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack: TechStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences: WorkExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer II",
      company: "Smart Structures",
      companylogo: "/images/smartStructuresLogo.png",
      date: "May 2024 - Present",
      descBullets: [
        "Developed and maintained responsive web applications using React JS, applying modern TypeScript features and  utilizing React Hooks, Context API, and Zustand for efficient state management and component logic.",
        "Enhanced application performance by optimizing server-side rendering (SSR) and client-side hydration in Next.js,  resulting in a 50% reduction in initial load times and improving overall SEO and user experience.",
        "Utilized Node.js framework and libraries, including Express, TypeORM, Moment, and Plotly for processing sensor data  and showing in dashboards.",
        "Integrated LLMs into a full-stack chat application using LangChain, LangGraph, and RAG (Retrieval-Augmented Generation), enabling contextual and document-aware conversations by leveraging vector stores, embeddings, and  custom agents.",
        "Utilized Material-UI to design and implement visually appealing and consistent UI components, improving user  engagement by 25%.",
        "Built a consistent and scalable UI by creating reusable functional components and shared design patterns, significantly reducing duplicate code and improving development speed and maintainability across the application.",
        "Conducted regular code reviews, maintaining strict coding standards, and reducing bugs by 30%"
      ]
    },
    {
      role: "Application Developer",
      company: "University of North Carolina at Charlotte (ONE IT)",
      companylogo: "/images/unccLogo.png",
      date: "Jan 2023 - Dec 2023",
      descBullets: [
        "Integrated React Query for data fetching, caching, and synchronization, reducing data loading times by 40% and improving application performance.",
        "Developed high-performance RESTful APIs using Node.js and Express, leveraging TypeORM with PostgreSQL for efficient database management, resulting in a 25% improvement in query performance and seamless CRUD operations.",
        "Integrated SurveyJS forms into React applications to dynamically generate and manage forms, increasing form generation efficiency by 40%.",
        "Added unit and integration tests using Jest and React Testing Library, improving code reliability and catching 40% more bugs during development, leading to faster QA cycles and more stable releases.",
        "Incorporated accessibility standards (WCAG) into React components to ensure inclusive user experiences across devices."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Juspay",
      companylogo: "/images/juspayLogo.jpeg",
      date: "June 2021 – July 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed a scalable and modular microservice architecture for card tokenization, comprising different microservices for generic processing and an api-gateway for external service interaction.",
        "Developed and maintained REST APIs using Spring Boot, Redis and AWS. Successfully integrating major card networks such as Mastercard and Visa, and tokenized more than 100 million cards.",
        "Implemented an intelligent configuration management system using Redis as cache, allowing for controlled feature rollouts and merchant onboarding. This resulted in 70% reduction in merchant onboarding time.",
        "Collaborated closely with Software Architects and Senior Developers to design and implement high-quality software solutions using Design patterns, and SOLID principles that follow best practices and industry standards."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "Juspay",
      companylogo: "/images/juspayLogo.jpeg",
      date: "December 2020 – June 2021",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Collaborated closely with Software Architects and Senior Developers to design and implement high-quality software solutions using Design patterns, and SOLID principles that follow best practices and industry standards.",
        "Worked on the Card on File (COF) project. In this, users could select a list of merchants to which their card needs to be added and manage them through the bank app, resulting in a 50% reduction in transaction time.",
        "Designed and implemented a relational data model to store merchant and customer data.",
        "Automated repetitive testing processes using Selenium and JUnit, increasing testing efficiency by 20% and enabling faster release cycles."
      ]
    }
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: "/images/airbnbLogo.png",
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource: OpenSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects: BigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "/images/bioDataBuilderLogo.png",
      projectName: "BioCraft - Bio Data Builder",
      projectDesc:
        "A modern web application for creating professional bio data PDFs for marriage proposals. Features customizable templates, instant PDF generation, and secure data handling. Built with Next.js, TypeScript, and Tailwind CSS.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bio-data-builder.vercel.app/"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/naganikhilbijjala/bio-data-builder"
        }
      ]
    },
    {
      image: "/images/nextuLogo.webp",
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection: BlogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection: TalkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY KNOWLEDGE AND SPEAK AT CONFERENCES",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection: PodcastSection = {
  title: "Podcast",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo: ContactInfo = {
  title: "Contact Me",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "naganikhil.bijjala@gmail.com"
};

// Twitter Section

const twitterDetails: TwitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
