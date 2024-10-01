import React, { useState } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "@fontsource/jetbrains-mono";

const PropDetail = ({ project }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="container mx-auto font-jetbrains">
      <div className="block lg:flex gap-5 bg-[#232329] p-4 pb-[90px]">
        <div className="w-full lg:w-1/2 rounded-lg order-2 lg:order-none">
          <Video
            autoPlay
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            loop
            poster={project.image}
            className="rounded-lg shadow-lg"
          >
            <source src={project.video} type="video/mp4"className="" />
          </Video>
          <div className="mt-6 w-auto">
            <h3 className="text-lg font-semibold">Skills Used:</h3>
            <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
              {project.skillist.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="group relative flex items-center justify-center p-1 cursor-pointer"
                  onMouseEnter={() => setActiveIndex(skillIndex)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <p
                    className={`absolute top-[0px] right-[0px] text-xs whitespace-nowrap ${
                      activeIndex === skillIndex
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    } transition-opacity duration-300 ease-in-out text-[19px] text-primary py-[5px] px-[17px] font-semibold rounded-[5px] bg-white`}
                  >
                    {skill.name}
                  </p>
                  <div className="w-full h-[100px] text-center bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-[30px] justify-center text-accent-DEAULT lg:text-[40px] transition-all duration-500 group-hover:text-accent-DEFAULT bg-[#232326] shadow-lg p-5 ">
                      {skill.icon}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-none">
          <h1 className="text-xl font-bold">{project.name}</h1>
          <p className="mt-[10px] text-white/80">{project.description}</p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mt-7">ABOUT</h2>
            {project.detail.map((detailItem, detailIndex) => (
              <div key={detailIndex} className="mt-[10px] text-white/80">
                <p>{detailItem.description}</p>
            <h3 className="text-lg font-semibold mt-5">Responsive</h3>
                <pre className="whitespace-pre-wrap font-jetbrains mt-[10px]">
                  {detailItem.responsive}
                </pre>
              </div>
            ))}
            {/* Skill List Section */}
            <div className="mt-9 text-end">
              <a
                href={project.liveHr}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center gap-2 bg-[#232329] shadow-xl py-4 px-6 hover:bg-accent-hover hover:text-primary rounded-lg text-center transition-all duration-400 justify-center"
              >
                Live Preview {project.live}
              </a>
              <a
                href={project.gitHr}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center gap-2 mt-2 bg-[#232329] shadow-xl py-4 px-6 border-accent-DEAULT hover:bg-accent-hover hover:text-primary rounded-lg justify-center transition-all duration-400"
              >
                View Code {project.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropDetail;
