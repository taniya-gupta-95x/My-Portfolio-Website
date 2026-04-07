// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import InternshipStudioLogo from './assets/company_logo/Internship Studio.png';
import TCSLogo from './assets/company_logo/TCS Logo.png';
import SkillCraftTechnologyLogo from './assets/company_logo/SkillCraftTechnology_Logo.png';

// Education Section Logo's
import BareillyCollegeLogo from './assets/education_logo/BareillyCollege_logo.png';
import DLSLogo from './assets/education_logo/DLS_logo.png';

// Project Section Logo's
import JobBridgeLogo from './assets/work_logo/JobBridge_Logo.png';
import ChatbotLogo from './assets/work_logo/Chatbot.png';
import MyPortfolioLogo from './assets/work_logo/MyPortfolio.png';
import SalesDashboardLogo from './assets/work_logo/Sales Dashboard.png';
import WeatherAppLogo from './assets/work_logo/WeatherApp.png';
import SnakeGameLogo from './assets/work_logo/Snake Game.png';
import ImageSearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/Remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: InternshipStudioLogo,
      role: "Data Analyst Intern",
      company: "Internship Studio",
      date: "1th June 2025 - 1th September 2025",
      desc: "Completed a 3-month Data Analyst internship at Internship Studio, gaining hands-on experience in data analysis, data cleaning, and visualization. Worked with MS Excel and Power BI to build dashboards and generate insights from data. Strengthened analytical thinking, problem-solving abilities, and understanding of real-world data-driven decision making.",
      skills: [
        "Excel",
        "PowerBI",
        "SQL",
        "Python",
        "Numpy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "MongoDb",
      ],
    },
    {
      id: 1,
      img: TCSLogo,
      role: "TCS Smart Hiring - Interview Experience",
      company: "Tata Consultancy Service (TCS)",
      date: "19th March 2026 Noida",
      desc: "Appeared for the Smart Hiring interview at Tata Consultancy Services in March 2026. During the interview, I was asked questions related to DBMS, OOPS, and basic programming concepts. I demonstrated my problem-solving approach and communication skills while answering technical questions. This experience helped me understand the real interview process and improved my confidence.",
      skills: [
        "C++",
        "Python",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: SkillCraftTechnologyLogo,
      role: "Frontend Developer Intern",
      company: "SkillCraftTechnology",
      date: "November 2025 - December 2025",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Talwind CSS. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Talwind CSS",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: BareillyCollegeLogo,
      school: "Bareilly College Bareilly",
      date: "Sept 2023 - Aug 2026",
      grade: "72.2%",
      desc: "I completed my Bachelor's degree in Computer Science (BCA.) from Bareilly College Bareilly, Bareilly. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Bareilly College Bareilly allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - BCA (Computer Science)",
    },
    {
      id: 1,
      img: DLSLogo,
      school: "Darbari Lal Sharma Inter College, Rithora Bareilly",
      date: "Apr 2022 - March 2023",
      grade: "87.8%",
      desc: "I completed my class 12 education from Darbari Lal Sharma Inter College, Rithora (Bareilly), under the UP board with PCM stream. During this period,  I built a strong foundation in analytical thinking and problem-solving. I actively participated in academic activities and maintained consistent performance throughout the year.",
      degree: "UP(XII) - PCM (Physics, Chemistry, Maths)",
    },
    {
      id: 2,
      img: DLSLogo,
      school: "Darbari Lal Sharma Inter College, Rithora Bareilly",
      date: "Apr 2021 - March 2022",
      grade: "79.9%",
      desc: "I completed my class 10 education from Darbari Lal Sharma Inter College, Rithora (Bareilly), under the UP board, where I studied Science Stream with consistent academic performance.",
      degree: "UP(X), Science Stream",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "JobBridge-Project",
      description:
        "This is a FullStack Web -application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: JobBridgeLogo,
      tags: ["HTML", "TalwindCSS", "JavaScript", "React JS", "API", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/Growwithtahira/JobBridge",
      webapp: "https://job-bridge-tahira.vercel.app/",
    },
    {
      id: 1,
      title: "Google Generative AI Chatbot",
      description:
        "A GUI-based ChatBot powered by Google Gemini (Generative AI) and built using Python's Tkinter module. This chatbot provides a smooth user interface for chatting with an AI assistant just like ChatGPT — but backed by Google's Gemini model.",
      image: ChatbotLogo,
      tags: ["Python", "API Key"],
      github: "https://github.com/taniya-gupta-95x/Google-Generative-AI-Chatbot-using-Python",
      webapp: "",
    },
    {
      id: 2,
      title: "My Portfolio Website",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: MyPortfolioLogo,
      tags: ["React JS", "TalwindCSS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/taniya-gupta-95x/My-Portfolio-Website",
      // webapp: "",
    },
    {
      id: 3,
      title: "Amazon Sales Dashboard",
      description:
        "This Power BI dashboard project visualizes Amazon product sales performance, helping understand trends across product categories, sales periods, and customer engagement through reviews.",
      image: SalesDashboardLogo,
      tags: ["PowerBI"],
      github: "https://github.com/taniya-gupta-95x/Amazon-Power-BI-Dashboard",
    },
    {
      id: 4,
      title: "WeatherApp",
      description:
        "A clean and beginner-friendly weather forecast app showing real-time temperature, humidity, and wind details using OpenWeatherMap API.",
      image: WeatherAppLogo,
      tags: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API"],
      github: "https://github.com/taniya-gupta-95x/Weather-App",
      webapp: "https://weather-app-xbkp.vercel.app/",
    },
    {
      id: 5,
      title: "Snake Game",
      description:
        "I developed a Snake Game using Python and Pygame. It includes features like start screen, real-time score tracking, collision detection, and dynamic difficulty where the speed increases as the snake grows. The game uses event handling, loops, and basic data structures like lists to manage the snake body.",
      image: SnakeGameLogo,
      tags: ["Python", "Pygame"],
      github: "https://github.com/taniya-gupta-95x/Snake-Game-Python",
    },
    {
      id: 6,
      title: "My Portfolio Website",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: MyPortfolioLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://github.com/taniya-gupta-95x/My-Portfolio-Website",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: ImageSearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/taniya-gupta-95x/Image-Search-App",
      webapp: "https://imagesearch-rho.vercel.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/taniya-gupta-95x/Image-Background-Remover",
      webapp: "https://image-background-remover-neon.vercel.app/",
    },
  ];  