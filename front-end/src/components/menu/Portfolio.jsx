import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { SiAntdesign, SiTailwindcss, SiVite, SiLabview } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import '@fontsource/jetbrains-mono';

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaNodeJs,
  FaWordpress,
} from "react-icons/fa";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import vnstore1 from "../../assets/vnstore.png";
import login from "../../assets/login.png";
import liginprop from "../../assets/liginprop.png";
import wordpress from "../../assets/wp.png";
import coursemg from "../../assets/cousremg.png";
import pos from "../../assets/vnpos.png";

const project = [
  {
    title: "Frontend project",
    description:
      "Worked on various frontend projects using React and TailwindCSS.",
    realproject: [
      {
        name: "VN STORE",
        description:
          "This is my frontend project about Ecomerse website (No Responsive).I make this frondend project by",
        image: vnstore1,
        lague: "HTML 5",
        lague1: "CSS 3",
        liveHr: "https://vannakns.github.io/VN_STORE/",
        gitHr: "https://github.com/VannakNS/VN_STORE.git",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
      },
      {
        name: "project 01",
        description:
          "This is my frontend project about Ecomerse website (No Responsive).I make this frondend project by",
        image: vnstore1,
        lague: "HTML 5",
        lague1: "CSS 3",
        liveHr: "https://vannakns.github.io/VN_STORE/",
        gitHr: "https://github.com/VannakNS/VN_STORE.git",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
      },
    ],
  },
];

const mini = [
  {
    title: "Mini Project",
    description: "just small project",
    realproject: [
      {
        name: "Login",
        description: "login component ",
        image: liginprop,
        lague: "HTML 5",
        lague1: "CSS 3",
        liveHr: "https://vannakns.github.io/LoginProp/",
        gitHr: "https://github.com/VannakNS/LoginProp.git",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
      },
      {
        name: "Login",
        description: "login component ",
        image: login,
        lague: "HTML 5",
        lague1: "CSS 3",
        liveHr: "https://vannakns.github.io/Login_Position/",
        gitHr: "https://vannakns.github.io/Login_Position/",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
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
        name: "Wordpress",
        description: "This is my project in wordpress ",
        image: wordpress,
        lague: "Theme",
        lague1: "CSS 3",
        liveHr: "https://inspiretomillion.com/",
        gitHr: "https://inspiretomillion.com/",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
      },
      {
        name: "system managment",
        description: "In this project, I created a course management system.",
        image: coursemg,
        lague: "React with Vite",
        lague1: "Tailwind",
        lague2: "AntDesign",
        lague3: "Node",
        lague4: "MySQL",

        liveHr: "",
        gitHr: "",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
      },
      {
        name: "Starting POS System",
        description: "In this project, I created a POS system.(Not yet)",
        image: pos,
        lague: "React ",
        lague1: "Tailwind",
        lague2: "AntDesign",
        lague3: "Node",
        lague4: "MySQL",

        liveHr: "",
        gitHr: "",
        live: <BsArrowUpRight />,
        github: <BsGithub />,
      },
    ],
  },
];

const Portfolio = () => {
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
            {["Mini", "Frontend", "FullStack"].map((tab) => (
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
                        <div className="flex gap-2 mt-3 text-left">
                          <p className="text-accent-DEAULT text-[18px] bg-[#27272e] px-2 py-1 rounded-md">
                            {" "}
                            {item.lague}{" "}
                          </p>
                          <p className="text-accent-DEAULT text-[18px] bg-[#27272e] px-2 py-1 rounded-md">
                            {" "}
                            {item.lague1}{" "}
                          </p>
                        </div>
                        <div className="flex gap-2 mt-3 text-left">
                          <a
                            href={item.liveHr}
                            target="_blank"
                            className="text-accent-DEAULT hover:bg-accent-DEAULT hover:text-primary text-[25px] active:scale-[0.98] hover:scale-[1.05]   cursor-pointer bg-[#27272e] px-2 py-2  transition-all duration-500 rounded-full">
                            {" "}
                            {item.live}
                            <p className="hidden hover:flex">Live preview</p>
                          </a>
                          <a
                            href={item.liveHr}
                            target="_blank"
                            className="text-accent-DEAULT hover:bg-accent-DEAULT active:scale-[0.98] hover:scale-[1.05]  duration-500 cursor-pointer hover:text-primary text-[25px] bg-[#27272e] px-2 py-2 rounded-full">
                            {" "}
                            {item.github}
                            <p className="hidden hover:flex">Github</p>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
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
                        <div className="flex gap-2 mt-3 text-left">
                          <p className="text-accent-DEAULT text-[18px] bg-[#27272e] px-2 py-1 rounded-md">
                            {" "}
                            {item.lague}{" "}
                          </p>
                          <p className="text-accent-DEAULT text-[18px] bg-[#27272e] px-2 py-1 rounded-md">
                            {" "}
                            {item.lague1}{" "}
                          </p>
                        </div>
                        <div className="flex gap-2 mt-3 text-left">
                          <a
                            href={item.liveHr}
                            target="_blank"
                            className="text-accent-DEAULT hover:bg-accent-DEAULT hover:text-primary text-[25px] active:scale-[0.98] hover:scale-[1.05]   cursor-pointer bg-[#27272e] px-2 py-2  transition-all duration-500 rounded-full">
                            {" "}
                            {item.live}
                            <p className="hidden hover:flex">Live preview</p>
                          </a>
                          <a
                            href={item.liveHr}
                            target="_blank"
                            className="text-accent-DEAULT hover:bg-accent-DEAULT active:scale-[0.98] hover:scale-[1.05]  duration-500 cursor-pointer hover:text-primary text-[25px] bg-[#27272e] px-2 py-2 rounded-full">
                            {" "}
                            {item.github}
                            <p className="hidden hover:flex">Github</p>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
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
                  {fullstack[0].title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[18px] text-center lg:text-left">
                  {fullstack[0].description}
                </p>
                <div className="h-[460px] lg:h-[250px] mt-[40px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {fullstack[0].realproject.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] mb-[20px] py-[13px] px-[13px] drop-shadow-lg rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <div className="lg:h-[310px] md:h-auto">
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
                        <div className="flex gap-2 mt-3 text-left">
                          <p className="text-accent-DEAULT text-[18px] bg-[#27272e] px-2 py-1 rounded-md">
                            {" "}
                            {item.lague}{" "}
                          </p>
                          <p className="text-accent-DEAULT text-[18px] bg-[#27272e] px-2 py-1 rounded-md">
                            {" "}
                            {item.lague1}{" "}
                          </p>
                          <p className="text-accent-DEAULT text-[18px] bg-[#27272e] px-2 py-1 rounded-md">
                            {" "}
                            {item.lague2}{" "}
                          </p>
                          <p className="text-accent-DEAULT text-[18px] bg-[#27272e] px-2 py-1 rounded-md">
                            {" "}
                            {item.lague3}{" "}
                          </p>
                          <p className="text-accent-DEAULT text-[18px] bg-[#27272e] px-2 py-1 rounded-md">
                            {" "}
                            {item.lague4}{" "}
                          </p>
                        </div>
                        <div className="flex gap-2 mt-3 text-left">
                          <a
                            href={item.liveHr}
                            target="_blank"
                            className="text-accent-DEAULT hover:bg-accent-DEAULT hover:text-primary text-[25px] active:scale-[0.98] hover:scale-[1.05]   cursor-pointer bg-[#27272e] px-2 py-2  transition-all duration-500 rounded-full">
                            {" "}
                            {item.live}
                            <p className="hidden hover:flex">Live preview</p>
                          </a>
                          <a
                            href={item.liveHr}
                            target="_blank"
                            className="text-accent-DEAULT hover:bg-accent-DEAULT active:scale-[0.98] hover:scale-[1.05]  duration-500 cursor-pointer hover:text-primary text-[25px] bg-[#27272e] px-2 py-2 rounded-full">
                            {" "}
                            {item.github}
                            <p className="hidden hover:flex">Github</p>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Tab.Panel>
            {/* <Tab.Panel className="w-full text-center lg:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about[0].title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[18px]">
                  {about[0].description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                  {about[0].info.map((info, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center lg:justify-normal gap-4"
                    >
                      <span className="text-white/60 text-[18px]">
                        {info.fieldName}
                      </span>
                      <span className="text-xl">{info.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tab.Panel> */}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </motion.div>
  );
};

export default Portfolio;
