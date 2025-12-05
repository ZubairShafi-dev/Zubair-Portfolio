import React from "react";
import "./ProjectCardStyle.css";
import { FaArrowRight } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import cartoon from "/LLA ADMIN APP-1.png"
export default function ProjectCard({
  id,
  className,
  projectTitle,
  projectDesc,
  projectLink,
  deployedProjectLink,
  projectImg
}) {
  const handleOnClick = () => {
    if (projectLink) window.open(projectLink, "_blank");
  };


  return (
    <div className="project-window" id={id}>
      <div className={`project-wrapper ${className}`}>
        <div className="about-project">
          <div className="project-title">{projectTitle}</div>
          <div className="desc">{projectDesc}</div>
          <button className="btn" onClick={handleOnClick}>
            <span>
              View on
              <FiGithub
                className="social"
                size={20}
                style={{ marginLeft: "8px", position: "relative", top: "2px", strokeWidth: "3" }}
              />
            </span>
            <FaArrowRight className="btn-arrow" size={22} style={{ marginLeft: "1rem" }} />
          </button>
        </div>

        {/* Conditionally render the image link */}
        <Tilt className="project-img" gyroscope={true}>
          {deployedProjectLink ? (
            <a href={deployedProjectLink} target="_blank" rel="noopener noreferrer">
              <img src={projectImg} alt="Project Preview" />
            </a>
          ) : (
            <img src={projectImg} alt="Project Preview" />
          )}
        </Tilt>
      </div>
    </div>
  );
}
