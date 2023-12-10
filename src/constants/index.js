import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    news,
    lti,
    code,
    game,
    food,
    recognize,
    port,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "skill",
      title:"Skills",
    },
    {
      id: "projects",
      title:"Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Native Android App Developer",
      icon: mobile,
    },
   
    {
      title: "DSA beginner ",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "Java Developer",
      company_name: "LTIMindtree",
      icon: lti,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - April 2023",
      points: [
        "Acquired hands-on experience and training in Core Java concepts during an intensive internship at LTI MINDTREE Ignite",
        " Successfully implemented Java-based solutions, gaining exposure to frameworks such as Spring and React.",
        " Conducted regular milestone assessments to evaluate learning outcomes, resulting in a 15% increase in overall efficiency",
        "Collaborated with a dynamic team to contribute to development tasks and further enhance practical skills",
      ],
    },
    {
      title: "Web Developer",
      company_name: "CodeClause",
      icon: code,
      iconBg: "#E6DEDD",
      date: "July 2023 - August 2023",
      points: [
        "Designed and developed an interactive chat application and a responsible web-based music player during the internship.",
        "Gained practical experience in web development by working on these projects",
        "Developed skills in creating engaging and functional applications for users.",
        "Received certification and swags for the successful completion of the internship within the time allotted."
      ],
    },
    
  ];
  
  const projects = [
    {
      name: "GamesHub",
      description:
        "GameHub is a video game discovery web app that helps you find new and interesting games to play. The site has a cool feature that lets users easily filter games and navigate through different categories. Whether you're accessing it from a large desktop screen, a compact tablet, or the smaller screen of a smartphone, the website is optimized to provide a consistent and user-friendly experience across different devices.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCss",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
        {
          name : "Netlify",
          color: "orange-text-gradient",
        }
      ],
      image: game,
      source_code_link: "https://github.com/Adi4301/GamesHub",
    },
    {
      name: "RecipeHub",
      description:
        "RecipeHub serves as a digital platform for users to discover, explore, and access a wide variety of recipes.The app often includes a search feature and filters to help users quickly find recipes that match their specific criteria, such as cooking time, difficulty level, or special dietary needs..",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: food,
      source_code_link: "https://github.com/Adi4301/RecipeHub",
    },
    {
      name: "NewsApp",
      description:
        "The NewsApp is a daily newsfeed application that leverages the News API to provide users with real-time news updates. It displays up-to-date news content, ensuring that users have access to the latest information.Users can explore news articles based on different categories such as technology, business, health, entertainment, and more. This categorization allows for easy navigation and helps users find news relevant to their interests",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "APIs",
          color: "orange-text-gradient",
        }
      ],
      image: news,
      source_code_link: "https://github.com/Adi4301/NewsHub/tree/main",
    },
    {
      name: "Doctor Handwriting Recognition",
      description:
        "The Doctor Handwriting Recognition project aims to create a system that can understand and interpret the handwriting of doctors. Many times, doctors write notes and prescriptions by hand, and it's not always easy for others to read. This project uses technology to recognize and convert the handwritten notes into digital text that can be easily understood and stored in a computer system.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Android SDK",
          color: "green-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "pink-text-gradient",
        },
        {
          name: "SQLite",
          color: "orange-text-gradient",
        },
      ],
      image: recognize,
      source_code_link: "https://github.com/Adi4301/Major_project",
    },
    
    {
      name: "Portfolio Website",
      description:
        "Engaging React portfolio website featuring dynamic 3D models that showcase skills, projects, work experience and achievements, creating an immersive and visually captivating user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/Adi4301/Portfolio",
    },
    
  ];
  
  export { services, technologies, experiences,  projects };