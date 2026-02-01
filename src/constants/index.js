import project1 from "../assets/projects/project-1.jpg";
import fitnessTrackerImg from '../assets/fitnessTracker.jpg'
import mazeGame from '../assets/mazeGame.png'
import sortingVisualizerImg from '../assets/sortingVisualizer.png' 

export const HERO_CONTENT = `I am a passionate Full Stack Developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I specialize in building end-to-end solutions using the MERN stack (MongoDB, Express.js, React, Node.js) and Java Spring Boot. My expertise extends across frontend frameworks like React, and Guidewire Jutro, and backend technologies including Node.js, Spring Boot, and MySQL, enabling me to deliver reliable, high-performance applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jul 2022-Nov 2024",
    role: "React Developer",
    company: "Infosys",
    description: `Worked as a Front-End Developer on the Virgin Media Connect application, developing scalable and responsive user interfaces using React.js, Redux, Bootstrap, and SASS for customer-facing digital services. Implemented Redux state management to store and manage API responses efficiently using actions and reducers, improving application data flow and performance. Delivered WCAG-compliant accessible UI to enhance usability and meet enterprise accessibility standards. Integrated React frontend modules with Spring Boot REST APIs, resolving complex UI–API interactions. Actively contributed in Agile Scrum teams, participating in sprint planning and code reviews, while maintaining high code quality using Git, Jira, and SonarQube.`,
    technologies: ["Javascript", "React.js", "React Redux","Spring Boot"]
  },
  {
    year: "Jan 2025- Oct 2025",
    role: "Full Stack Developer",
    company: "CLIM IT Solutions",
    description: `Architected and delivered full-stack MERN applications, including medical ERP systems, multi-vendor e-commerce, and CRM platforms, with a strong focus on microservices-based backend architecture. Built and maintained Node.js/Express.js microservices, designing RESTful APIs with pagination, filtering, and sorting. Implemented secure authentication and RBAC using JWT access/refresh tokens, bcrypt, and middleware guards. Optimized MongoDB performance using indexing and aggregation pipelines, and resolved production issues through log analysis and API testing to ensure backend stability and reliability.`,
    technologies: ["Javascript","Java", "React.js", "React Redux", "Node.js", "Express.js","Spring Boot", "MongoDB", "MySQL" ],
  },
  {
    year: "Oct 2025 - Present",
    role: "Full Stack Developer",
    company: "Design Blocks",
    description: `Worked as a Full Stack Developer and Team Lead on a multi-vendor meat delivery application, leading the development of HRM and InRyde, Food Application admin dashboards. Built and integrated Node.js and Express.js REST APIs with secure authentication and RBAC, and developed responsive dashboard UIs using Tailwind CSS. Mentored interns, assigned and reviewed tasks, provided technical guidance, and resolved production issues to ensure on-time and high-quality delivery.`,
    technologies: ["Javascript","Java", "React.js", "React Redux", "Node.js", "Express.js","Spring Boot", "MongoDB", "MySQL" ],
  },
  
];

export const PROJECTS = [
  {
    title: "Fitness Tracker",
    image: fitnessTrackerImg,
    description:
      "A fitness tracker website allows users to track their daily activities, set their diet plans and visualize their reports.",
    technologies: ["React JS", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Framer motion"],
  },
  {
    title: "Maze Game",
    image: mazeGame,
    description:
      "Designed a webpage where user can play this game by moving the ball from start to end point passing through obstacles finding a path .",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Sorting Visualizer",
    image: sortingVisualizerImg,
    description:
      "Designed a webpage where user can set array lengths and visualize how fast each individual algorithms work such as Bubble Sort, Quick Sort and Merge Sort.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "Visakhapatnam, 530002",
  phoneNo: "+91 8187020518",
  email: "suneelgokada@gmail.com",
};
