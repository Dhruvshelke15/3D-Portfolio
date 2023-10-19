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
  trav,
  tic,
  tdo,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },

  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'MERN Stack Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Django Developer',
    icon: backend,
  },
  {
    title: 'Backend Developer',
    icon: creator,
  },
];

const education = [
  {
    title: 'Bachelor of Engineering',
    company_name: 'Thakur College of Enigneering and Technology',
    icon: tcet,
    iconBg: '#FFFFFF',
    date: 'Aug 2019 - June 2023',
    points: [
      "Completed my Bachelor's in Electronics and Computer Science Engineering with 9.4 CGPA.",
      'Worked on Solar Tracking for Wireless Charging project.',
      'Published papers in various journals like IJIRSET regarding the project.',
    ],
  },
  {
    title: 'Higher Secondary',
    company_name: 'PACE Junior Science College',
    icon: pace,
    iconBg: '#26145e',
    date: 'May 2016 - May 2018',
    points: [
      'Passes the higher secondary with 77.38% and distinction.',
      'Took part in various college events.',
    ],
  },
  {
    title: 'Senior Secondary',
    company_name: "St. Augustine's High School",
    icon: aug,
    iconBg: '#FFFFFF',
    date: 'June 2015 - May 2016',
    points: [
      'Stood 3rd place in School with 95.20%',
      'Obtained various state-run scholarships and represented school in Olympiads.',
      'Stood as School vice-captian for sporting events.',
    ],
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'RC-TCET',
    icon: rctcet,
    iconBg: '#000018',
    date: 'July 2020 - June 2021',
    points: [
      "Lead developer for Rotaract Club of TCET's website.",
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Utilized essential SEO tools and keywords in the website and attained an increase of 28% in engagement rate.',
      'Handled the social media accounts of the club and saw an increase in social media engagements by 33%.',
      'Website accessibility increased our reach to various social bodies during a period of a global pandemic.',
      'Administered social events in both online and offline modes across 5 zones and 2 districts.',
    ],
  },
  {
    title: 'UI/UX Designer',
    company_name: 'TCET In-house',
    icon: tcet,
    iconBg: '#FFFFFF',
    date: 'January 2020 - June 2020',
    points: [
      'Performed in collaboration with industry for designing the UI/UX of a mobile application.',
      'Implemented the knowledge and created a Tourism application and a chatbot with a 65% success rate.',
      'Developed around Flask and Chatterbot libraries of Python in creating the Chatbot.',
      'Integrated the UI/UX in an application made using Flutter Framework.',
    ],
  },
  {
    title: 'Digital Marketing',
    company_name: 'TCET In-house',
    icon: tcet,
    iconBg: '#FFFFFF',
    date: 'October 2019 - December 2019',
    points: [
      'Cultivated basic knowledge of digital marketing integration of keywords in Websites.',
      'Collaborated with a digital marketing expert on a website regarding a University admission forum.',
      'Garnered knowledge of SEO Tools and Keywords used for optimizing a website.',
      'Acquired the skills to boost personal portfolios on various social media websites by 30-35%.',
    ],
  },
];

const projects = [
  {
    name: 'Box Office',
    description:
      'The Box Office was created using the ReactJS and MERN frameworks. It is an application for showing movies and actors with their details. The details are displayed alongside the numbers of season and filmes acted in. Can be installed as a Desktop app.',
    tags: [
      {
        name: 'reactjs',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
    ],
    image: quizz,
    source_code_link: 'https://github.com/Dhruvshelke15/movie-box-office',
    visit_link: 'https://dhruvshelke15.github.io/movie-box-office/',
  },
  {
    name: 'Chat App',
    description:
      'A chat app with firebase integration for having a fun time. Send images, create new chat rooms, and much more. Send voice notes, but beware as admins can delete your messages for improper content! Sign up now with a google or a facebook account.',
    tags: [
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mern',
        color: 'green-text-gradient',
      },
    ],
    image: clim,
    source_code_link: 'https://github.com/Dhruvshelke15/firebase-chat',
    visit_link: 'https://firechat-efed3.web.app/signin',
  },
  {
    name: 'Travel Mania',
    description:
      'A travel booking app with dynamic database for planning your best adventures. Add images to your location and other details for others to have a fun time. Book your places through the website for easier access',
    tags: [
      {
        name: 'reactjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'blue-text-gradient',
      },
      {
        name: 'mern',
        color: 'green-text-gradient',
      },
    ],
    image: trav,
    source_code_link: 'https://github.com/Dhruvshelke15/Travel-mania',
    visit_link: 'https://travel-mania.vercel.app/',
  },
  {
    name: 'To Do app',
    description:
      'A todo app with firebase for planning your daily tasks. Keep tabs on your activity completion through this minimal app. A seamless firebase databse to save your progress, irrespective of the device uesd.',
    tags: [
      {
        name: 'reactjs',
        color: 'pink-text-gradient',
      },

      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
    ],
    image: tdo,
    source_code_link: 'https://github.com/Dhruvshelke15/React-ToDo',
    visit_link: 'https://react-todo-b230e.web.app/',
  },
  {
    name: 'AI Image Generator',
    description:
      'An AI image generator that utilizes deep learning algorithms to produce realistic and diverse images based on given input or training data. It learns patterns and features, enabling it to create new images that resemble the style or characteristics of the provided samples.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: aimg,
    source_code_link: 'https://github.com/Dhruvshelke15/ai-image-generator',
    visit_link: 'https://ai-image-generator-three-phi.vercel.app/',
  },
  {
    name: 'Tic Tac Toe',
    description:
      'A tic tac toe app with history feature. Play with your friends and also keep an eye on the moves you make. Any wrong move and your can always correct it using the history of the game.',
    tags: [
      {
        name: 'reactjs',
        color: 'pink-text-gradient',
      },

      {
        name: 'mern',
        color: 'green-text-gradient',
      },
    ],
    image: tic,
    source_code_link: 'https://github.com/Dhruvshelke15/Tic-tac-toe-v2',
    visit_link: 'https://tictoexo.surge.sh/',
  },
];

export { services, education, technologies, experiences, projects };
