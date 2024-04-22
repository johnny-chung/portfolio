import { Project } from "../../types/types";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Inventory Management Mobile App",
    description: `A project to transform paper-based and excel based system to a digital inventory management system 
      for a company in Taiwan. Eliminates manual errors and reduces the time to fulfill orders. 
      Build a cross-platform iOS and Android Mobile App using React Native with Expo. `,
    skills: [
      "React Native",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Jest",
      "Supertest",
      "GitHub Actions",
      "iOS",
      "Android",
      "Auth0",
    ],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713811801/portfolio/mobile_1_1_ala4q6.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713811814/portfolio/mobile_2_2_ptwuhs.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713811826/portfolio/mobile_3_3_d37pzx.jpg",
    ],
  },
  {
    id: 2,
    title: "Virtual Library Web App",
    description: `A sophisticated virtual library web application aimed at replicating real-life 
    library systems with MERN stack. A React Front-end Application build with Vite written in TypeScript and 
    styling using Tailwind CSS. RESTful API Back-end Application written in TypeScript, utilizing Express.js 
    framework and MongoDB for database. Auth0 for identity management and secure authentication 
    across front-end and back-end API
    `,
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Auth0",
    ],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803590/portfolio/lib-3_zdr150.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803593/portfolio/lib-4_vsjqpm.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803588/portfolio/lib-2_n84bry.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803586/portfolio/lib-1_wnhkjb.jpg",
    ],
  },
  {
    id: 3,
    title: "Reversi Game",
    description: `RESTful API Back-end Application written in Python, utilizing Flask framework.
    Utilizing trained PyTorch machine learning model to provide intelligence game response. 
    Deploying Gunicorn using Nginx as proxy server in AWS using Docker image with various services, including EC2 instances with ALB and ASG, CloudFront, Shield, Route53 and ECS to achieve high availability and scalability 
    `,
    skills: [
      "Python",
      "Flask",
      "PyTorch",
      "Nginx",
      "Gunicorn",
      "AWS",
      "React",
      "Javascript",
      "Docker",
    ],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803596/portfolio/reversi_1_aimqac.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803598/portfolio/reversi_2_nvpi9s.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803601/portfolio/reversi_3_nerm4o.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713803604/portfolio/reversi_4_cmmgxr.jpg",
    ],
  },
  {
    id: 4,
    title: "Node.js Blog Service App",
    description: `A blog service web application written in JavaScript using Express, Express Handlebars and 
    Bootstrap for CSS. 
    Manage PostgreSQL database using ElephantSQL. 
    Utilizing MongoDB Atlas to store user data for authentication and authorization and session management. 
    Deploying application Cyclic linking to GitHub repository.     
    `,
    skills: [
      "Javascript",
      "Express",
      "Bootstrap",
      "PostgreSQL",
      "MongoDB",
      "HTML",
      "CSS",
    ],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713806393/portfolio/ig_1_wwlkym.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713806461/portfolio/ig_2_el9ag6.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713806475/portfolio/ig_3_ru3sh5.jpg",
    ],
  },
  {
    id: 5,
    title: "React Practice App",
    description: `Showcase React Knowledge in Redux, Context API etc.     
    `,
    skills: ["React", "Typescript", "Redux TK", "Context API"],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713805068/portfolio/practice_1_twwo7b.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713805073/portfolio/practice_2_p6frj4.jpg",
    ],
  },

  {
    id: 6,
    title: "OOP - C++ School Project",
    description: `Showcasing Object Oriented Programming (OOP) knowledge using C++. 
    Writing automated unit test cases for components and modules, code review and fixing bugs of teammate.
    Usage of pointer, references, inheritance, polymorphism, container, standard library, multi-threading, linked list.         
    `,
    skills: ["C++", "OOP", "Data structure & analysis"],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713806700/portfolio/c_1_nea4qn.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713806707/portfolio/c_2_jh97iq.jpg",
    ],
  },

  {
    id: 7,
    title: "Portfolio Webapp",
    description: `You are currently viewing it.        
    `,
    skills: ["React", "Tailwind CSS", "MUI", "Typescript"],
    images: [
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713804065/portfolio/portfolio_vmbgdu.jpg",
      "https://res.cloudinary.com/dp2anoz4i/image/upload/v1713806891/portfolio/portfolio_2_mrqf2i.jpg",
    ],
  },
];
