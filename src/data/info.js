import mcmaster from "../assets/mcmaster_logo.png";
import moscrop from "../assets/moscrop_logo.png";
import bollyfusion from "../assets/bollyfusion_logo.png";
import serverchatroom from "../assets/serverchatroom.png";
import checkitoff from "../assets/checkitoff.png";
import bollyfusion_website from "../assets/bollyfusion_website.png";
import enbridge from "../assets/enbridge.png";
import mes from "../assets/mes.jpg";
import promptly from "../assets/promptlycrop.png";
import linkedoutreach from "../assets/linkedoutreach.png";
import centsible from "../assets/centsible.png";
import rbcLogo from "../assets/rbc_logo.png";

export const projects = [
  {
    id: 5,
    title: "Centsible",
    description:
      "A chrome extension designed to simplify complex financial concepts for users of all backgrounds.",
    image: centsible,
    tags: [
      "Python",
      "Flask",
      "React.js",
      "Gemini API",
      "Hugging Face",
      "Cohere",
    ],
    category: "web app",
    link: "https://github.com/shivyam/Centsible",
  },
  {
    id: 4,
    title: "LinkedOut Reach",
    description:
      "An application that connects users with like-minded individuals, leveraging shared commonalities to create personalized messages that help initiate conversations.",
    image: linkedoutreach,
    tags: ["Next.js", "Typescript", "Python", "Flask", "MongoDB", "Cohere"],
    category: "web app",
    link: "https://github.com/shivyam/LinkedOut-Reach",
  },
  {
    id: 3,
    title: "Promptly",
    description:
      "A full-stack journaling application that allows users to write entries with all data securely stored in a MongoDB database. Submitted for StarterHacks 2024.",
    image: promptly,
    tags: ["Python", "Flask", "Next.js", "MongoDB"],
    category: "web app",
    link: "https://github.com/shivyam/promptly",
  },
  {
    id: 2,
    title: "Bollyfusion Website",
    description:
      "Crafted and deployed BollyFusion.ca, a dynamic showcase of Bollywood dance fusion. This project highlights my web design expertise, delivering a visually engaging and user-friendly experience.",
    image: bollyfusion_website,
    tags: ["React.js", "HTML", "CSS"],
    category: "web app",
    link: "https://bollyfusion.ca",
  },
  {
    id: 1,
    title: "ServerChat",
    description:
      "A room-based communication system where users can join a chatroom by specifying a unique room name while on the same server.",
    image: serverchatroom,
    tags: ["Django", "Python", "HTML", "CSS"],
    category: "web app",
    link: "https://github.com/shivyam/ServerChat",
  },
  {
    id: 0,
    title: "CheckItOff",
    description:
      "Developed a personal task manager application using Python and Django, offering robust features for task creation, editing, deletion, and status tracking.",
    image: checkitoff,
    tags: ["Django", "Python", "HTML", "CSS"],
    category: "web app",
    github: "https://github.com/shivyam/CheckItOff",
  },
];

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Next.js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image:
          "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "IntelliJ",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/768px-IntelliJ_IDEA_Icon.svg.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
      {
        name: "Figma",
        image:
          "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: bollyfusion,
    role: "Website Developer",
    company: "Bollyfusion",
    date: "June 2023 - Present",
    desc: "Implemented innovative design solutions using ReactJS, HTML5, and CSS to create a visually appealing and responsive website that captivate users' attention. Boosted customer engagement by implementing user-friendly forms and functionalities on the business website, facilitating seamless communication with owners through email and attracting a larger clientele. Implemented a proactive maintenance plan, ensuring the website's continuous functionality. Consistently enhance content and features by incorporating feedback from both users and company owners.",
    skills: ["ReactJS", "HTML5", "CSS", "DreamHost"],
  },
  {
    id: 1,
    img: enbridge,
    role: "Analyst Intern",
    company: "Enbridge Gas",
    date: "May 2024 - August 2024",
    desc: "Performed data collection, analysis, and entry using Microsoft Excel and Power BI, ensuring accurate records management and generating detailed reports for project management. Utilized strong problem-solving and analytical skills to validate customer information and calculate incentive payments, ensuring compliance with company procedures.",
    skills: ["Microsoft Excel", "Power BI"],
  },
  {
    id: 2,
    img: mes,
    role: "Frontend Developer",
    company: "McMaster Engineering Society",
    date: "June 2024 - July 2025",
    desc: "Performed data collection, analysis, and entry using Microsoft Excel and Power BI, ensuring accurate records management and generating detailed reports for project management. Utilized strong problem-solving and analytical skills to validate customer information and calculate incentive payments, ensuring compliance with company procedures.",
    skills: ["Next.Js", "Tailwind CSS", "Figma", "Git"],
  },
  {
    id: 3,
    img: rbcLogo,
    role: "Full Stack Developer Intern",
    company: "Royal Bank of Canada",
    date: "January 2025 - April 2025",
    desc: "Designed and developed a full-stack Apache Kafka monitoring tool using Spring Boot, AngularJS, and Redis to track 20+ Kafka topics across 50+ deployed applications, improving real-time visibility and operational efficiency. Built a scalable REST API service within a monorepo architecture to ingest and cache Kafka topic data, implementing security best practices such as AES data encryption and JWT authentication. Gained hands-on experience with Jenkins, Red Hat OpenShift, HashiCorp Vault, and Helios, gaining familiarity with secure secret management, deployment pipelines, and cloud-based infrastructure.",
    skills: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "AngularJS",
      "Redis",
      "Apache Kafka",
      "JWT",
      "Red Hat OpenShift",
      "HashiCorp Vault",
    ],
  },
  {
    id: 4,
    img: rbcLogo,
    role: "Software Developer Intern",
    company: "Royal Bank of Canada",
    date: "May 2025 - Present",
    desc: "Enhanced RBC's internal developer portal by building frontend and backend plugins with Backstage.io, Node.js, React.js, and MongoDB, simplifying onboarding workflows and improving developer efficiency for 6,000+ engineers. Led migration of plugins to a centralized package management system, making development workflows cleaner and enabling 80+ engineers to build and maintain portal functionalities more efficiently. Engineered an MCP server with a reusable prompt library and automated GitHub repository scaffolding, cutting project setup time and boosting developer productivity. Developed and deployed REST APIs using Python, AWS Lambda, API Gateway, and Serverless to power RBC's challenge at Hack the North 2025.",
    skills: [
      "Backstage.io",
      "Node.js",
      "React.js",
      "MongoDB",
      "MCP (Model Context Protocol)",
      "Python",
      "AngularJS",
      "Express.js",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: mcmaster,
    school: "McMaster University",
    date: "September 2022 - April 2026",
    location: "Hamilton, ON",
    grade: "3.9 CGPA",
    desc: "Currently pursuing a Bachelor's degree in Software Engineering. I have taken courses in Object-Oriented Programming, Digital Systems, Discrete Mathematics, and Data Structures.",
    degree: "Bachelor of Engineering - B.Eng., Software Engineering",
  },
];
