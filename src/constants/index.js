const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "", label: "Internships" },
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 1350, suffix: "+", label: "Codeforces Rating" },
  { value: 10, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Software Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },  
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  }
];

const expCards = [
  {
    review: "Shagun brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/logo1.png",
    logoPath: "/images/logo1.png",
    title: "Founding Engineer Intern",
    date: "Dec 2024 - Present",
    responsibilities: [
      "Developed factory ERP using the NextJS to streamline orders with complex multi-module CRUD flows",
      "Created <link url='https://inveesync.in/'>company portfolio</link> using ReactJS and Tailwind CSS, enhancing brand and product showcase",
      "Built <link url='https://drive.google.com/file/d/19aX1R4r9PGki4-v0dC-sIJ8qllPRlDN_/view'>AI-powered desktop app</link> to parse order emails and auto-fill Tally, cutting time from 15 mins to secs",
      "Secured and scalable data handling with Redux, AWS S3, and RESTful ExpressJS–PostgreSQL APIs",
    ],
  },
  {
    review: "Shagun's contributions to Samsung Bixy Voice Assistant have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/logo2.png",
    logoPath: "/images/logo2.png",
    title: "Software Engineer Intern",
    date: "May 2024 - Jul 2024",
    responsibilities: [
      "Developed a transliteration library, accompanied by a customized database, for the cross-language search",
      "Engineered an NLP model incorporating Named Entity Recognition to categorize words such as the actors",
      "Incorporated tokenization, word embeddings, & TF-IDF vectorization, resulting classification system",
    ],
  },
  {
    review: "Shagun's work on WhatsApp AI Chatbot brought a high level of quality and efficiency. He delivered solutions that enhanced our bot's capabilities & meet our product goals.",
    imgPath: "/images/logo3.png",
    logoPath: "/images/logo3.png",
    title: "Founding Engineer Intern",
    date: "May 2024 - Mar 2024",
    responsibilities: [
      "Developed an AI WhatsApp chatbot for the restaurants to automate the ordering, reducing staff load",
      "Engineered backend workflows using MySQL, AWS, to ensure data integrity and secure message handling",
      "Implemented responsive UI for <link url='https://whatsyum.com/'>restaurant onboarding</link> using HTML, CSS, and JavaScript on GoDaddy",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Neel Shah",
    mentions: "@neelshah",
    review:
      "I can't say enough good things about Shagun. He was able to take our complex project requirements at InveeSync and turn them into a seamless, functional solution. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
    linkedin: "https://www.linkedin.com/in/neel-shah-kgp/",
  },
  {
    name: "Domendra Verma",
    mentions: "@domendraver",
    review:
      "Working with Shagun at InveeSync was a fantastic experience. He transformed our outdated systems into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any development projects.",
    imgPath: "/images/client3.png",
    linkedin: "https://www.linkedin.com/in/domendraverma/",
  },
  {
    name: "Surabhi",
    mentions: "@surabhi",
    review:
      "Collaborating with Shagun at InveeSync was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shagun's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your systems and streamline your processes, Shagun is the ideal partner.",
    imgPath: "/images/client2.png",
    linkedin: "https://www.linkedin.com/in/surabhi-saste/",
  },
  {
    name: "Sai Charan",
    mentions: "@saicharan",
    review:
      "Shagun was a pleasure to work with at Samsung. He turned complex requirements into intuitive solutions that were both innovative and easy to implement. His contributions to our voice assistant technology were invaluable. Fantastic work overall.",
    imgPath: "/images/client5.png",
    linkedin: "https://www.linkedin.com/in/sri-sai-charan-valam/",
  },
  {
    name: "Ashay Tamhane",
    mentions: "@ashaytamhay",
    review:
      "Shagun's expertise in development at Datadive is truly impressive. He delivered a robust and scalable solution for our AI chatbot, and our customer engagement has significantly increased since the launch. He's a true professional!",
    imgPath: "/images/client4.png",
    linkedin: "https://www.linkedin.com/in/ashaytamhane/",
  },
  {
    name: "Arvind Agrawal",
    mentions: "@arvindagrawal",
    review:
      "Shagun was a pleasure to work with at Datadive. He understood our requirements perfectly and delivered solutions that exceeded our expectations. His skills in both frontend and backend development are top-notch.",
    imgPath: "/images/client6.png",
    linkedin: "https://www.linkedin.com/in/arvindagarwal1310/",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/Shagun-katariya/",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/shagun-katariya/",
  },
  {
    name: "codeforces",
    imgPath: "/images/codeforces.jpeg",
    url: "https://codeforces.com/profile/The_Black_guy",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
