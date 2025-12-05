import React from "react";
import "./AboutMeStyle.css";
import profile from "../images/profilePicture2.jpg";
import resume from './resume.pdf'
export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
          <h3>Hey there, 👋</h3>
          I'm <span> Zubair </span>, a final year student pursuing <span>BS Software Engineering from <span>THE UNIVERSITY OF LAHORE</span></span>.  I specialize in creating dynamic, user-friendly applications utilizing modern architectures such as
 MVVM and MVI. My expertise extends to <span>AI integration</span> in mobile apps, enhancing both functionality and user
 experience through innovative solutions. Beyond development, I lead projects and cross-functional teams, ensuring timely and quality-focused outcomes
 aligned with client expectations.<br/>      <br/> <br/> As a <span>Project Manager</span>, I bridge the gap between technical and business needs,
 optimizing project workflows and fostering team productivity. I am also passionate about sharing knowledge and
 mentoring aspiring developers, providing guidance and practical insights to students in development fundamentals
 and advanced mobile technologies.

    
 <a className='resume' href={resume} download={resume}>explore my resume.</a>
        </div>
        <div className="profile-photo">
          <div className="heading"> About Me</div>
          <img className="img" src={profile} alt="Profile"></img>
        </div>
        <div className="name">Zubair</div>
      </div>
  );
}
