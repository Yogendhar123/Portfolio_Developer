import {
  mobile,
  backend,
  creator,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  angular,
  bootstarp,
  mateualUI,
  generali,
  eduLearn,
  loadmatcher,
  // angular,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Technical Skills",
    icons: [
      html,
      css,
      bootstarp,
      javascript,
      typescript,
      reactjs,
      angular,
      nodejs,
      mongodb,
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
    name: "Bootstarp",
    icon: bootstarp,
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
    name: "React Material-UI",
    icon: mateualUI,
  },
  {
    name: "Angular",
    icon: angular,
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
    title: "Frontend Developer",
    company_name: "TCS (Tata consultancy services)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2022 - present",
    points: [
      "Developing and maintaining web applications using React.js and Angular technologies.",

      "Currently working on UI development for a telecom client using Angular, building admin and user login interfaces with Azure MSAL for secure authentication. Integrated AWS Guardrails to enhance security and flexibility, allowing administrators to enable or disable features directly from the UI. Additionally, integrated Power BI reports to provide administrators with advanced reporting and management capabilities.",
      "Worked with insurance and FMCG clients to create responsive UIs using ReactJS and Material UI, integrating GPT-based chat interfaces with auto-complete and auto-suggest features. Implemented solutions to extract data from PDF documents using Streamlit, and successfully integrated Power BI reports into React applications, reducing dashboard development time and ensuring seamless deployment on remote servers.",
      "Developed multiple Proof of Concepts (POCs) using the latest version of Angular, incorporating Generative AI features such as price prediction, CAD drawing predictions, and damage predictions. Successfully secured client adoption for key use cases, which were fully developed and integrated into the client's environment. Also contributed to Indian government portals by developing responsive UIs using React, Redux, Bootstrap, and React Material UI, ensuring operational success across India.",

      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Project-1  Indian GOV",
    description:
      "I worked for Election Commission of India (ECI) customer, including EPTBS, NGSP, and NVSP modules. These platforms allow citizens to apply for voter registration, update/delete details, and obtain EPIC cards. I developed responsive UIs using React, Bootstrap, and Material UI, ensuring accessibility and performance across devices. I contributed to more than three key modules, focusing on user experience and compliance with government standards.",

    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "React Material-UI",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.eci.gov.in/",
  },
  {
    name: "Project-2 Insurance Domain",
    description:
      "Worked with an insurance domain client (Generali) to create responsive UIs using Redux, ReactJS and React Material UI. Integrated a chat interface that utilizes GPT prompts for user queries, including auto-complete and auto-suggest features.Implemented a GPT-based solution for extracting data from PDF documents, such as company policies, to provide responses with citations. Additionally, learned and developed a user-friendly chat interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React Materail-UI",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "Azure",
        color: "red-text-gradient",
      },
    ],
    image: generali,
    source_code_link: "https://www.generali.com/",
  },
  {
    name: "Project-3 FMCG Customer",
    description:
      "Integrated Power BI reports into a React application using ReactJS and Bootstrap. This integration significantly reduced the time required to develop dashboards and was successfully deployed on a remote server.Generated multiple reports and integrated them into the UI with save and edit modes as per client requirements. Successfully delivered these features, meeting client expectations and ensuring a functional and user-friendly experience.",

    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "PowerBI",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Azure",
        color: "red-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project-4 Food and beverage industry",
    description:
      "Developed responsive UIs using React and React Materail-UI, integrating GenAI use cases for product suggestions and displaying product details and ingredients. Implemented a chat interface to extract results from documents and provide user responses. Additionally, enabled the generation of custom images based on product specifications, delivering a personalized and interactive experience.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "React Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },

      {
        name: "Azure",
        color: "red-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project-5 Telecom Domain",
    description:
      "Actively working on UI development using Angular for a telecom company, integrating Power BI reports into the application. Developed multiple UIs and chat interfaces with GPT prompt integration to enhance functionality. Additionally, integrated an admin dashboard to monitor application content and detect PII (Personally Identifiable Information) for safety. The chat interface allows users to query and interact with the system for real-time insights.",

    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "React Material-UI",
        color: "green-text-gradient",
      },

      {
        name: "Azure",
        color: "red-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project-6 Tcs Offerings",

    description:
      "Worked on multiple internal use cases for TCS, developing over 10+ GenAI-driven UI solutions, including price prediction, CAD drawing analysis, image generation, PDF generation, and resume analysis. The developer UI was designed to enhance trending GenAI use cases, providing valuable tools for internal teams to add more value to existing customer solutions. These innovations were aimed at addressing key industry challenges and continuously improving TCS's service offerings.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "React Material-UI",
        color: "green-text-gradient",
      },

      {
        name: "Azure",
        color: "red-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const Pesonalprojects = [
  {
    name: "EduLearn",
    description:
      "EduLearn is a comprehensive education management app designed to facilitate course learning and track student progress. It offers separate login systems for students, faculty, and admins, allowing students to manage their learning and view performance, while faculty can track student progress and manage course content. Admins have full control to oversee the system, manage users, and generate detailed reports. With real-time tracking and a user-friendly interface, EduLearn enhances the learning experience and provides valuable insights for both students and educators.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typscript",
        color: "green-text-gradient",
      },

      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: eduLearn,
    source_code_link: "https://edulearnapp.netlify.app/",
  },

  {
    name: "Load Matcher",
    description:
      "Matching loads with the right transport partners—fast, efficient, and reliable.Efficient Load Matching for Modern Logistics simplifies freight movement by intelligently connecting shippers with the most suitable carriers using a dynamic scoring system. Our advanced algorithm ensures every shipment is paired with the ideal transporter based on factors like availability, performance, and route optimization. This leads to improved operational efficiency, reduced costs, and more dependable deliveries. Whether you're a shipper looking for trusted carriers or a logistics provider seeking consistent loads, Apar is your intelligent logistics matchmaker.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typscript",
        color: "green-text-gradient",
      },

      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: loadmatcher,
    source_code_link: "https://loadmatchapp.netlify.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  Pesonalprojects,
};
