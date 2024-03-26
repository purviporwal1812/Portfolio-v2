import React from "react";

import Front from "./Front";
import git from "./GitHub.png";
import gitB from "./GitHub-Black.png";
import "./Project.css";
import ip from "./ip.png";

import Upside from "./upside-down.png";

const Project = ({ project }) => {
  return (
    <>
      <div className="container overflow-hidden text-center">
        <div className="row gy-5 justify-content-center">
          <div className="col-6">
            <div className="p-3">
              <h3>{project.title}</h3>
              <img src={project.imageSrc} alt="project" />
              <p>{project.description}</p>
              <a href={project.gitLink}>
                <img src={project.git} alt="git 1" />
              </a>
              <a href={project.externalLink2}>
                <img src="external_link2.jpg" alt="External Link 2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function App() {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus accusamus nulla ducimus error voluptate quidem ab perferendis eveniet. ",
      imageSrc: ip,

      git: git,
      gitLink: "https://github.com/purviporwal1812/IP-Address-",
    },
    {
      title: "Project 2",
      description:
        "lorem20 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus accusamus nulla ducimus error voluptate quidem ab perferendis eveniet.",
      imageSrc: ip,
      git: git,
    },
    {
      title: "Project 3",
      description:
        "lorem20Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus accusamus nulla ducimus error voluptate quidem ab perferendis eveniet.",
      imageSrc: ip,
      git: git,
    },
  ];

  return (
    <>
      <Front />

      <div classNameName="App" id="project">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <div classNameName="down">
        <a href="https://portfolio-v-inky.vercel.app/" target="_blank">
          <img src={Upside}></img>
        </a>
      </div>
    </>
  );
}
