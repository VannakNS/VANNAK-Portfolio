//From react
import React, { useState } from "react";

//icon
import { SiAntdesign, SiTailwindcss, SiVite, SiLabview } from "react-icons/si";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaNodeJs,
  FaWordpress,
} from "react-icons/fa";
import { Tab } from "@headlessui/react";

//ant
import { Modal } from "antd";

//image
import vnstore1 from "../../assets/vnstore.png";
import dashboard from "../../assets/dashboard.png";
import porfolio from "../../assets/porfolioMe.png";
import login from "../../assets/login.png";
import liginprop from "../../assets/liginprop.png";
import wordpress from "../../assets/wp.png";
import cours from "../../assets/course.png";
import pos from "../../assets/vnpos.png";
import { AiOutlineClose } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";

//mp4
import vncourse from "../../assets/video/vannaksys.mp4";
import portfolioVD from "../../assets/video/portfolio.mp4";

///anyThing
import { motion } from "framer-motion";
import "@fontsource/jetbrains-mono";
import PropDetail from "./PropDetail";

const project = [
  {
    title: "Frontend project",
    description:
      "Worked on various frontend projects using React and TailwindCSS.",
    realproject: [
      {
        name: "VN STORE",
        description:
          "VN STORE is my first project, including videos and detailed descriptions. Built using HTML and CSS, it was completed in 10 hours and is not responsive. This project showcases my foundational skills in web development and design.",
        image: vnstore1,
        video: vnstore1,
        liveHr: "https://vannakns.github.io/VN_STORE/",
        gitHr: "https://github.com/VannakNS/VN_STORE.git",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
        skillist: [
          {
            icon: <FaHtml5 />,
            name: "HTML 5",
          },
          {
            icon: <FaCss3 />,
            name: "CSS 3",
          },
        ],
        detail: [
          {
            description:
              "VN STORE is an e-commerce platform showcasing my frontend development skills using HTML and CSS. This project focuses on delivering a seamless user experience within a non-responsive design, making it ideal for desktop viewing",
            responsive:
              "While VN STORE is not responsive, it effectively demonstrates core frontend concepts and design principles, highlighting my ability to create visually appealing and functional web applications. The platform serves as a solid foundation for future projects, where I aim to implement responsive features and enhance user interaction. The website is not responsive for mobile devices. It is designed for desktop viewing, and elements may not resize or realign correctly on smaller screens (like mobile phones or tablets)",
          },
        ],
      },
      {
        name: "PORTFOLIO",
        description:
          "This is my persional portfolio showcases my skills , including videos and detailed descriptions. Built using React and Tailwind CSS, it was completed in 60 hours and is fully responsive, ensuring an optimal experience on any device.",
        image: porfolio,
        video: portfolioVD,
        liveHr: "https://vannakportfolio.tech/",
        gitHr: "https://vannakportfolio.tech/",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
        skillist: [
          {
            icon: <FaReact />,
            name: "React JS",
          },
          {
            icon: <SiTailwindcss />,
            name: "Tailwind",
          },
        ],
        detail: [
          {
            description:
              "This portfolio showcases a wide range of web development projects, demonstrating my skills in frontend and full-stack development. You can watch videos or read details about each project. I completed this portfolio in 60 hours, using technologies such as React and Tailwind CSS. It is fully responsive, providing an optimal viewing experience across all devices.",
            responsive: `The portfolio is designed to be fully responsive, providing an optimal viewing experience across devices:
  - Mobile Devices (100px - 768px): A compact, mobile-friendly interface that prioritizes readability and touch-friendly navigation. All elements are aligned to fit seamlessly, ensuring a smooth browsing experience on smaller screens.
  - Tablets (769px - 1024px): The layout expands to offer more visibility, with flexible grids and sections that adjust to medium-sized screens. This allows for an enhanced viewing experience while maintaining clear structure and usability.
  - Laptops & Desktops (1025px and above): A comprehensive view with full-screen elements, ensuring all projects and components are clearly presented with additional details and features.

Whether viewed on mobile, tablet, or desktop, this portfolio is built to adapt to different screen sizes while retaining a polished, professional appearance."
`,
          },
        ],
      },
    ],
  },
];

const wordPress = [
  {
    title: "WordPress",
    description: "Build website using wordpress",
    realproject: [
      // {
      //   name: "Wordpress",
      //   description: "This is my project in wordpress ",
      //   image: wordpress,
      //   video: vncourse,
      //   liveHr: "https://inspiretomillion.com/",
      //   gitHr: "https://inspiretomillion.com/",
      //   live: <BsArrowUpRight />,
      //   github: <BsGithub />,
      //   skillist: [
      //     {
      //       icon: <FaWordpress />,
      //       name: "Wordpress",
      //     },
      //     {
      //       icon: <FaCss3 />,
      //       name: "CSS 3",
      //     },
      //   ],
      //   detail: [
      //     {
      //       description:
      //         "This is a detailed description of the VN STORE frontend project. It's an e-commerce platform showcasing React components, TailwindCSS, and essential",
      //       responsive:
      //         "This project is currently not responsive, but it demonstrates core frontend concepts and development skills.\n\tPHONE\n\tLAPTOP\n\tPC",
      //     },
      //   ],
      // },
      {
        name: "WORDPRESS",
        description:
          "This website is also a reflection of my learning journey. WordPress offers so many possibilities, and as a first-time user, I am continuously discovering new things about the platform. I have already gained valuable experience in areas such as theme customization, plugin integration, and responsive design—skills that will only grow as I continue to develop the site. You can visit my website anytime to explore and see updates!",
        image: wordpress,
        video: wordpress,
        liveHr: "https://inspiretomillion.com/",
        gitHr: "https://inspiretomillion.com/",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
        skillist: [
          {
            icon: <FaWordpress />,
            name: "Wordpress",
          },
          {
            icon: <FaCss3 />,
            name: "CSS 3",
          },
        ],
        detail: [
          {
            description:
              "This is a detailed description of the VN STORE frontend project. It's an e-commerce platform showcasing React components, TailwindCSS, and essential",
            responsive:
              "This project is currently not responsive, but it demonstrates core frontend concepts and development skills.\n\tPHONE\n\tLAPTOP\n\tPC",
          },
        ],
      },
    ],
  },
];
const mini = [
  {
    title: "Components",
    description: "It just small component",
    realproject: [
    
      {
        name: "LOGIN",
        description: "login component using HTML and CSS (Testing)",
        image: liginprop,
        video: vncourse,
        liveHr: "https://vannakns.github.io/LoginProp/",
        gitHr: "https://github.com/VannakNS/LoginProp.git",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
        skillist: [
          {
            icon: <FaHtml5 />,
            name: "HTML 5",
          },
          {
            icon: <FaCss3 />,
            name: "CSS 3",
          },
        ],
        detail: [
          {
            description:
              "This is a detailed description of the VN STORE frontend project. It's an e-commerce platform showcasing React components, TailwindCSS, and essential",
            responsive:
              "This project is currently not responsive, but it demonstrates core frontend concepts and development skills.\n\tPHONE\n\tLAPTOP\n\tPC",
          },
        ],
      },
      {
        name: "LOGIN",
        description: "login component using HTML and CSS (Testing)",
        image: login,
        video: vncourse,
        liveHr: "https://vannakns.github.io/Login_Position/",
        gitHr: "https://vannakns.github.io/Login_Position/",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
        skillist: [
          {
            icon: <FaHtml5 />,
            name: "HTML 5",
          },
          {
            icon: <FaCss3 />,
            name: "CSS 3",
          },
        ],
        detail: [
          {
            description:
              "This is a detailed description of the VN STORE frontend project. It's an e-commerce platform showcasing React components, TailwindCSS, and essential",
            responsive:
              "This project is currently not responsive, but it demonstrates core frontend concepts and development skills.\n\tPHONE\n\tLAPTOP\n\tPC",
          },
        ],
      },
      {
        name: "Dashboard Admin",
        description: "Dashboard Admin using ReactJS and Tailwind (Full responsive)",
        image: dashboard,
        video: vncourse,
        liveHr: "https://vannakns.github.io/LoginProp/",
        gitHr: "https://github.com/VannakNS/LoginProp.git",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
        skillist: [
          {
            icon: <FaReact />,
            name: "React JS",
          },
          {
            icon: <SiTailwindcss />,
            name: "Tailwind",
          },
        ],
        detail: [
          {
            description:
              "This is a detailed description of the VN STORE frontend project. It's an e-commerce platform showcasing React components, TailwindCSS, and essential",
            responsive:
              "This project is currently not responsive, but it demonstrates core frontend concepts and development skills.\n\tPHONE\n\tLAPTOP\n\tPC",
          },
        ],
      },
    ],
  },
];
const fullstack = [
  {
    title: "Fullstack project",
    description: "Frontend + Backend",
    realproject: [
      {
        name: "SYSTEM MANAGEMENT",
        description:
          "System Management is a comprehensive course management platform designed to streamline the management of courses, lessons, and student information. Built using React, Node.js, and MySQL, this project showcases my full-stack development skills. It includes features for course creation, lesson editing, and feedback collection, ensuring efficient management for educators. Completed in a total of 3 months, the platform is not responsive, focusing primarily on delivering a robust experience for desktop users. This project exemplifies my ability to build dynamic web applications that cater to specific user needs in educational settings.watch for detail",
        image: cours,
        video: vncourse,
        liveHr: "",
        gitHr: "",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
        skillist: [
          {
            icon: <FaReact />,
            name: "React JS",
          },
          {
            icon: <SiTailwindcss />,
            name: "Tailwind",
          },
          {
            icon: <SiAntdesign />,
            name: "AntDesign",
          },
          {
            icon: <FaNodeJs />,
            name: "Node JS",
          },
          {
            icon: <GrMysql />,
            name: "MySQL",
          },
        ],
        detail: [
          {
            description:
              "The System Management project is a comprehensive course management system that showcases my skills in both frontend and backend development using React and Node.js. This application provides an intuitive interface for managing courses, students, and feedback, integrating modern design principles and user-friendly functionality.",
            responsive: ` The System Management platform is designed to provide an optimal user experience across various devices:
  - Mobile Devices (100px - 768px): no responsive.
  - Tablets (769px - 1024px): The layout expands to enhance visibility and interaction, with a more spacious design that accommodates additional features and information. This ensures a better experience for users who need to perform more complex tasks.
  - Laptops & Desktops (1025px and above): A robust view that displays all functionalities in a comprehensive layout. Users can easily navigate through various sections, accessing detailed information and advanced features for effective course management.

The System Management project effectively combines functional design with robust capabilities, offering a seamless management experience whether viewed on mobile, tablet, or desktop. This project highlights my ability to develop sophisticated web applications that meet user needs in educational environments.`,
          },
        ],
      },
      // {
      //   name: "system managment1",
      //   description: "In this project, I created a course management system.",
      //   image: vnstore1,
      //   video: vncourse,
      //   liveHr: "",
      //   gitHr: "",
      //   live: <BsArrowUpRight />,
      //   github: <BsGithub />,
      //   skillist: [
      //     {
      //       icon: <FaReact />,
      //       name: "React JS",
      //     },
      //     {
      //       icon: <SiTailwindcss />,
      //       name: "Tailwind",
      //     },
      //     {
      //       icon: <SiAntdesign />,
      //       name: "AntDesign",
      //     },
      //     {
      //       icon: <FaNodeJs />,
      //       name: "Node JS",
      //     },
      //     {
      //       icon: <GrMysql />,
      //       name: "MySQL",
      //     },
      //   ],
      //   detail: [
      //     {
      //       description:
      //         "This is a detailed description of the VN STORE frontend project. It's an e-commerce platform showcasing React components, TailwindCSS, and essential",
      //       responsive:
      //         "This project is currently not responsive, but it demonstrates core frontend concepts and development skills.\n\tPHONE\n\tLAPTOP\n\tPC",
      //     },
      //   ],
      // },
    ],
  },
];
// const project1 = [
//   {
//   title: "Frontend project",
//   description:
//   "Worked on various frontend projects using React and TailwindCSS.",
//   realproject: [
//   {
//   name: "VN STORE",
//   description:
//   "This is my frontend project about an e-commerce website (No Responsive). I built the frontend using React and TailwindCSS.",
//   image: vnstore1,
//   video: vncourse,
//   liveHr: "https://vannakns.github.io/VN_STORE/",
//   gitHr: "https://github.com/VannakNS/VN_STORE.git",
//   live: <BsArrowUpRight />,
//   github: <BsGithub />,
//   skillist: [
//   {
//   icon: <FaHtml5 />,
//   name: "HTML 5",
//   },
//   {
//   icon: <FaCss3 />,
//   name: "CSS 3",
//   },
//   {
//   icon: <FaHtml5 />,
//   name: "HTML 5",
//   },
//   {
//   icon: <FaCss3 />,
//   name: "CSS 3",
//   },
//   ],
//   detail: [
//   {
//   description:
//   "This is a detailed description of the VN STORE frontend project. It's an e-commerce platform showcasing React components, TailwindCSS, and essential",
//   responsive:
//   "This project is currently not responsive, but it demonstrates core frontend concepts and development skills.\n\tPHONE\n\tLAPTOP\n\tPC",
//   },
//   ],
//   },
//   ],
//   },
//   ];
const Portfolio = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Show modal and set the selected project
  const showModal = (item) => {
    setSelectedProject(item);
    setIsModalVisible(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedProject(null);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.3,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="min-h-[80vh] flex justify-center lg:mx-[7%] py-12 lg:py-0 mt-[20px] lg:mt-[70px] mb-[90px] font-jetbrains">
      <div className="container mx-auto">
        <Tab.Group className="flex max-sm:block max-md:block max-lg:block lg:flex-row gap-[60px]">
          <Tab.List className="flex flex-col w-full max-w-[290px] mx-auto lg:mx-0 gap-6 text-primary">
            {["Components", "Frontend", "FullStack", "WordPress"].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  `inline-flex text-[17px] items-center w-full outline-none font-bold justify-center whitespace-nowrap rounded-lg p-3 text-balance transition-all ${
                    selected
                      ? "bg-accent-DEAULT text-primary shadow-sm"
                      : "text-white/80 bg-[#27272c] hover:bg-accent-DEAULT hover:text-primary"
                  }`
                }>
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="min-h-[70vh] w-full mt-[50px] lg:mt-0">
            <Tab.Panel className="w-full min-h-[70vh]  ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
                className="flex flex-col gap-[30px]  lg:text-left ">
                <h3 className="text-4xl font-bold text-white/85 text-center lg:text-left">
                  {mini[0].title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[18px] text-center lg:text-left">
                  {mini[0].description}
                </p>
                <div className="h-[460px] lg:h-[250px] mt-[40px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {mini[0].realproject.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] mb-[20px] py-[13px] px-[13px] drop-shadow-lg rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <div className="lg:h-[310px] md:h-auto ">
                          <a href={item.liveHr} target="_blank">
                            <img
                              src={item.image}
                              alt="image"
                              className="rounded-[5px] active:scale-[0.98] hover:scale-[1.02]  duration-500 cursor-pointer"
                            />
                          </a>
                        </div>

                        <h3 className="text-[25px] max-w-[300px] mt-[10px] min-h-[60px] font-extrabold text-left lg:text-left">
                          {item.name}
                        </h3>
                        <p className="text-white/60 text-[18px] mt-[-18px]">
                          {item.description}
                        </p>
                        <div className="mt-3 flex justify-between w-full items-center">
                          <div className="flex gap-2 mt-3 text-left">
                            <a
                              href={item.liveHr}
                              target="_blank"
                              className="text-accent-DEAULT hover:bg-accent-DEAULT hover:text-primary text-[25px] active:scale-[0.98] hover:scale-[1.05] cursor-pointer bg-[#27272e] px-2 py-2 transition-all duration-500 rounded-full">
                              {item.live}
                              <p className="hidden hover:flex">Live preview</p>
                            </a>
                            <a
                              href={item.gitHr}
                              target="_blank"
                              className="text-accent-DEAULT hover:bg-accent-DEAULT active:scale-[0.98] hover:scale-[1.05] duration-500 cursor-pointer hover:text-primary text-[25px] bg-[#27272e] px-2 py-2 rounded-full">
                              {item.github}
                              <p className="hidden hover:flex">Github</p>
                            </a>
                          </div>
                          {/* <button
                            className="px-9 bg-accent-DEAULT text-primary rounded py-[7px] items-center hover:bg-green-300"
                            onClick={() => showModal(item)}>
                            Detail
                          </button> */}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {isModalVisible && selectedProject && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-[#232329] w-[95%] h-[90%] max-h-[100vh] p-6 rounded-lg shadow-lg relative overflow-hidden">
                      <button
                        className="absolute top-2 right-4 text-white font-bold text-lg"
                        onClick={closeModal}>
                        <AiOutlineClose />
                      </button>
                      <div className="overflow-y-scroll scrollbar scrollbar-thumb-accent-DEAULT scrollbar-track-none h-full">
                        <PropDetail project={selectedProject} />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </Tab.Panel>
            <Tab.Panel className="w-full min-h-[70vh]  ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
                className="flex flex-col gap-[30px]  lg:text-left ">
                <h3 className="text-4xl font-bold text-white/85 text-center lg:text-left">
                  {project[0].title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[18px] text-center lg:text-left">
                  {project[0].description}
                </p>
                <div className="h-[460px] lg:h-[250px] mt-[40px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {project[0].realproject.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] mb-[20px] py-[13px] px-[13px] drop-shadow-lg rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <div className="lg:h-[310px] md:h-auto ">
                          <a href={item.liveHr} target="_blank">
                            <img
                              src={item.image}
                              alt="image"
                              className="rounded-[5px] active:scale-[0.98] hover:scale-[1.02]  duration-500 cursor-pointer"
                            />
                          </a>
                        </div>

                        <h3 className="text-[25px] max-w-[300px] mt-[10px] min-h-[60px] font-extrabold text-left lg:text-left">
                          {item.name}
                        </h3>
                        <p className="text-white/60 text-[18px] mt-[-18px]">
                          {item.description}
                        </p>
                        <div className="mt-3 flex justify-between w-full items-center">
                          <div className="flex gap-2 mt-3 text-left">
                            <a
                              href={item.liveHr}
                              target="_blank"
                              className="text-accent-DEAULT hover:bg-accent-DEAULT hover:text-primary text-[25px] active:scale-[0.98] hover:scale-[1.05] cursor-pointer bg-[#27272e] px-2 py-2 transition-all duration-500 rounded-full">
                              {item.live}
                              <p className="hidden hover:flex">Live preview</p>
                            </a>
                            <a
                              href={item.gitHr}
                              target="_blank"
                              className="text-accent-DEAULT hover:bg-accent-DEAULT active:scale-[0.98] hover:scale-[1.05] duration-500 cursor-pointer hover:text-primary text-[25px] bg-[#27272e] px-2 py-2 rounded-full">
                              {item.github}
                              <p className="hidden hover:flex">Github</p>
                            </a>
                          </div>
                          <button
                            className="px-9 bg-accent-DEAULT text-primary rounded py-[7px] items-center hover:bg-green-300"
                            onClick={() => showModal(item)}>
                            Detail
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {isModalVisible && selectedProject && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-[#232329] w-auto h-[90%] max-h-[100vh] p-6 rounded-lg shadow-lg relative overflow-hidden">
                      <button
                        className="absolute top-2 right-4 text-white font-bold text-lg"
                        onClick={closeModal}>
                        <AiOutlineClose />
                      </button>
                      <div className="overflow-y-scroll scrollbar scrollbar-thumb-accent-DEAULT scrollbar-track-none h-full">
                        <PropDetail project={selectedProject} />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </Tab.Panel>

            <Tab.Panel className="w-full min-h-[70vh]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
                className="flex flex-col gap-[30px] lg:text-left">
                <h3 className="text-4xl font-bold text-white/85 text-center lg:text-left">
                  {fullstack[0].title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[18px] text-center lg:text-left">
                  {fullstack[0].description}
                </p>
                <div className="h-[460px] lg:h-[250px] mt-[40px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {fullstack[0].realproject.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] mb-[20px] py-[13px] px-[13px] drop-shadow-lg rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <div className="lg:h-[310px] md:h-auto">
                          <a
                            href={item.liveHr}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                              src={item.image}
                              alt="Project"
                              className="rounded-[5px] active:scale-[0.98] hover:scale-[1.02] duration-500 cursor-pointer"
                            />
                          </a>
                        </div>

                        <h3 className="text-[25px] max-w-[300px] mt-[10px] min-h-[60px] font-extrabold text-left lg:text-left">
                          {item.name}
                        </h3>
                        <p className="text-white/60 text-[18px] mt-[-18px]">
                          {item.description}
                        </p>
                        <div className="mt-3 flex justify-between w-full items-center">
                          <div className="flex gap-2 mt-3 text-left">
                            <a
                              href={item.liveHr}
                              target="_blank"
                              className="text-accent-DEAULT hover:bg-accent-DEAULT hover:text-primary text-[25px] active:scale-[0.98] hover:scale-[1.05] cursor-pointer bg-[#27272e] px-2 py-2 transition-all duration-500 rounded-full">
                              {item.live}
                              <p className="hidden hover:flex">Live preview</p>
                            </a>
                            <a
                              href={item.gitHr}
                              target="_blank"
                              className="text-accent-DEAULT hover:bg-accent-DEAULT active:scale-[0.98] hover:scale-[1.05] duration-500 cursor-pointer hover:text-primary text-[25px] bg-[#27272e] px-2 py-2 rounded-full">
                              {item.github}
                              <p className="hidden hover:flex">Github</p>
                            </a>
                          </div>
                          <button
                            className="px-9 bg-accent-DEAULT text-primary rounded py-[7px] items-center hover:bg-green-300"
                            onClick={() => showModal(item)}>
                            Detail
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Custom Modal */}
                {isModalVisible && selectedProject && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-[#232329] w-auto h-[90%] max-h-[100vh] p-6 rounded-lg shadow-lg relative overflow-hidden">
                      <button
                        className="absolute top-2 right-4 text-white font-bold text-lg"
                        onClick={closeModal}>
                        <AiOutlineClose />
                      </button>
                      <div className="overflow-y-scroll scrollbar scrollbar-thumb-accent-DEAULT scrollbar-track-none h-full">
                        <PropDetail project={selectedProject} />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </Tab.Panel>
            <Tab.Panel className="w-full min-h-[70vh]  ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
                className="flex flex-col gap-[30px]  lg:text-left ">
                <h3 className="text-4xl font-bold text-white/85 text-center lg:text-left">
                  {wordPress[0].title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[18px] text-center lg:text-left">
                  {wordPress[0].description}
                </p>
                <div className="h-[460px] lg:h-[250px] mt-[40px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {wordPress[0].realproject.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] mb-[20px] py-[13px] px-[13px] drop-shadow-lg rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <div className="lg:h-[310px] md:h-auto ">
                          <a href={item.liveHr} target="_blank">
                            <img
                              src={item.image}
                              alt="image"
                              className="rounded-[5px] active:scale-[0.98] hover:scale-[1.02]  duration-500 cursor-pointer"
                            />
                          </a>
                        </div>

                        <h3 className="text-[25px] max-w-[300px] mt-[10px] min-h-[60px] font-extrabold text-left lg:text-left">
                          {item.name}
                        </h3>
                        <p className="text-white/60 text-[18px] mt-[-18px]">
                          {item.description}
                        </p>

                        <div className="mt-3 flex justify-between w-full items-center">
                          <div className="flex gap-2 mt-3 text-left">
                            <a
                              href={item.liveHr}
                              target="_blank"
                              className="text-accent-DEAULT hover:bg-accent-DEAULT hover:text-primary text-[25px] active:scale-[0.98] hover:scale-[1.05] cursor-pointer bg-[#27272e] px-2 py-2 transition-all duration-500 rounded-full">
                              {item.live}
                              <p className="hidden hover:flex">Live preview</p>
                            </a>
                            <a
                              href={item.gitHr}
                              target="_blank"
                              className="text-accent-DEAULT hover:bg-accent-DEAULT active:scale-[0.98] hover:scale-[1.05] duration-500 cursor-pointer hover:text-primary text-[25px] bg-[#27272e] px-2 py-2 rounded-full">
                              {item.github}
                              <p className="hidden hover:flex">Github</p>
                            </a>
                          </div>
                          {/* <button
                            className="px-9 bg-accent-DEAULT text-primary rounded py-[7px] items-center hover:bg-green-300"
                            onClick={() => showModal(item)}>
                            Detail
                          </button> */}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {isModalVisible && selectedProject && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-[#232329] w-auto h-[90%] max-h-[100vh] p-6 rounded-lg shadow-lg relative overflow-hidden">
                      <button
                        className="absolute top-2 right-4 text-white font-bold text-lg"
                        onClick={closeModal}>
                        <AiOutlineClose />
                      </button>
                      <div className="overflow-y-scroll scrollbar scrollbar-thumb-accent-DEAULT scrollbar-track-none h-full">
                        <PropDetail project={selectedProject} />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </motion.div>
  );
};

export default Portfolio;
