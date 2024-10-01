import React from "react";
import PropDetail from "./PropDetail";
import vnstore1 from "../../assets/vnstore.png";
import vncourse from "../../assets/video/vannaksys.mp4";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaCss3, FaHtml5 } from "react-icons/fa";

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
        video: vncourse,
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
              "This is a detailed description of the VN STORE frontend project. It's an e-commerce platform showcasing React components, TailwindCSS, and essential",
            responsive:
              "This project is currently not responsive, but it demonstrates core frontend concepts and development skills.\n\tPHONE\n\tLAPTOP\n\tPC",
          },
        ],
      },
    ],
  },
];

const DetailPortfolio = () => {
  return (
    <PropDetail project={project} />
  );
};

export default DetailPortfolio;
