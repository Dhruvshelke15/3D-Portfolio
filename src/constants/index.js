import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    pace,
    aug,
    rctcet,
    tcet,
    aimg,
    quizz,
    clim,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },

    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Stack Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Django Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
  ];

  const education = [
    {
      title: "Bachelor of Engineering",
      company_name: "Thakur College of Enigneering and Technology",
      icon: tcet,
      iconBg: "#FFFFFF",
      date: "Aug 2019 - June 2023",
      points: [
        "Completed my Bachelor's in Electronics and Computer Science Engineering with 9.4 CGPA.",
        "Worked on Solar Tracking for Wireless Charging project.",
        "Published papers in various journals like IJIRSET regarding the project.",
      ],
    },
    {
      title: "Higher Secondary",
      company_name: "PACE Junior Science College",
      icon: pace,
      iconBg: "#26145e",
      date: "May 2016 - May 2018",
      points: [
        "Passes the higher secondary with 77.38% and distinction.",
        "Took part in various college events."
      ],
    },
    {
      title: "Senior Secondary",
      company_name: "St. Augustine's High School",
      icon: aug,
      iconBg: "#FFFFFF",
      date: "June 2015 - May 2016",
      points: [
        "Stood 3rd place in School with 95.20%",
        "Obtained various state-run scholarships and represented school in Olympiads.",
        "Stood as School vice-captian for sporting events."
      ],
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "RC-TCET",
      icon: rctcet,
      iconBg: "#000018",
      date: "July 2020 - June 2021",
      points: [
        "Lead developer for Rotaract Club of TCET's website.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Utilized essential SEO tools and keywords in the website and attained an increase of 28% in engagement rate.",
        "Handled the social media accounts of the club and saw an increase in social media engagements by 33%.",
        "Website accessibility increased our reach to various social bodies during a period of a global pandemic.",
        "Administered social events in both online and offline modes across 5 zones and 2 districts."
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "TCET In-house",
      icon: tcet,
      iconBg: "#FFFFFF",
      date: "January 2020 - June 2020",
      points: [
        "Performed in collaboration with industry for designing the UI/UX of a mobile application.",
        "Implemented the knowledge and created a Tourism application and a chatbot with a 65% success rate.",
        "Developed around Flask and Chatterbot libraries of Python in creating the Chatbot.",
        "Integrated the UI/UX in an application made using Flutter Framework.",
      ],
    },
    {
      title: "Digital Marketing",
      company_name: "TCET In-house",
      icon: tcet,
      iconBg: "#FFFFFF",
      date: "October 2019 - December 2019",
      points: [
        "Cultivated basic knowledge of digital marketing integration of keywords in Websites.",
        "Collaborated with a digital marketing expert on a website regarding a University admission forum.",
        "Garnered knowledge of SEO Tools and Keywords used for optimizing a website.",
        "Acquired the skills to boost personal portfolios on various social media websites by 30-35%.",
      ],
    },
  ];

  
  
  
  
  const projects = [
    {
      name: "AI Image Generator",
      description:
        "An AI image generator that utilizes deep learning algorithms to produce realistic and diverse images based on given input or training data. It learns patterns and features, enabling it to create new images that resemble the style or characteristics of the provided samples.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: aimg,
      source_code_link: "https://github.com/Dhruvshelke15/ai-image-generator",
    },
    {
      name: "Quizzie",
      description:
        "The quiz app Quizzie was created using the Python and Django frameworks. It is an application for holding educational quizzes in colleges and universities. The user's result is displayed at the end of this programme, which allows complete control over the questions and their responses.",
      tags: [
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        
      ],
      image: quizz,
      source_code_link: "https://github.com/Dhruvshelke15/Quizzie",
    },
    {
      name: "Climatica",
      description:
        "A weather app with capabilities for the pollution index. Get information about your location and cities and towns throughout the world. This software not only alerts users to the PM level of a location, but also helps safeguard users from exposure to adverse weather.",
      tags: [
        {
          name: "flutter",
          color: "pink-text-gradient",
        },
        {
          name: "dart",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: clim,
      source_code_link: "https://github.com/Dhruvshelke15/Climatica",
    },
  ];
  
  export { services, education, technologies, experiences, projects };