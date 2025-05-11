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
    LizaSaze,
    Armeno,
    FreshtePasargad,
    realtor,
    game,
    threejs,
    twindigital,
    openmemory,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "",
      title: "Home",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "about",
      title: "About",
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer & Digital Twin Specialist",
      company_name: "Liza Saze Co.",
      icon: LizaSaze,
      iconBg: "#FFFFFF",
      date: "January 2022 - May 2023",
      points: [
        "Developed 4 web applications, optimizing mobile functionality and collaborating with a 15-member team to launch a sales funnel that boosted revenue by 20%.",
        "Conducted research and tests to designing 4 protypes digital twin models on construction operations to improve remote management efficiency by 20% and reducing on-site supervision needs by 15%.",
        "Leveraged JavaScript, React.js and TypeScript to develop responsive, interactive websites for clients, leading to increase in user engagement by 30%.",
        "Built and integrated RESTful APIs to enhance backend functionality and connect with client databases.",
      ],
    },
    {
      title: "Digital Twin Engineer",
      company_name: "Armeno Co.",
      icon: Armeno,
      iconBg: "RGB(254, 213, 1)",
      date: " July 2021 - January 2022",
      points: [
        "Co-designed project concepts, sketches, modeling, diagrams, quantity calculations and final working drawings for 3 projects.",
        "Led backend development initiatives, utilizing Node.js and PostgreSQL to improve the accuracy and efficiency of project planning and execution across three major construction projects.",
      ],
    },
    {
      title: "Architecture Engineering Intern",
      company_name: "Farashthe Pasargad Hotel Project",
      icon: FreshtePasargad,
      iconBg: "rgb(11, 61, 112)",
      date: "January 2021 - July 2021",
      points: [
        "Collaborated with engineering teams, architects, and consultants to ensure the project compliance with building regulations, safety standards, and client expectations throughout pouring from -6 to basement level.",
        "Conducted site inspections, feasibility studies, and OSHA safety audits, while preparing construction plans, cost estimates, and technical reports including over 150 detailed plans to support the project's execution.",
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
      name: "Twin Digital",
      description:
        "A dynamic web-based platform that showcases engaging and visually appealing 3D models and animations. This site offers an interactive and immersive experience for users, allowing them to explore and interact with 3D content in real-time, making it ideal for creative presentations, virtual showcases, and educational purposes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: twindigital,
      source_code_link: "https://thriving-bubblegum-aee085.netlify.app/",
    },
    {
      name: "Real Estate",
      description:
        "A web-based platform that allows users to explore, search, and view real estate properties. This site provides a seamless and user-friendly experience for individuals looking to find their next home or investment property, offering detailed information and imagery to assist in making informed decisions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "RapidAI",
          color: "pink-text-gradient",
        },
      ],
      image: realtor,
      source_code_link: "https://realtor-tan-beta.vercel.app/",
    },
    {
      name: "Open Memory",
      description:
        "Showcase your visual stories with OpenMemory. Effortlessly capture, share, and inspire with your stunning photos. Our sleek and intuitive platform makes organizing and presenting your cherished memories a breeze, perfect for anyone eager to connect through captivating images.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: openmemory,
      source_code_link: "https://polite-mochi-42c933.netlify.app/",
    },
    {
      name: "Memory Game",
      description:
        "A fun and interactive web-based memory game where users can challenge themselves to find matching pairs of items. The sleek design features vibrant graphics and an intuitive interface, making it both engaging and easy to play. Perfect for those who enjoy quick and entertaining puzzles to test their memory skills.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://fanciful-cascaron-80c237.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };