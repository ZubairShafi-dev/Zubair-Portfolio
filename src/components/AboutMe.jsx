import React from "react";
import "./AboutMeStyle.css";
import profile from "../images/profilePicture2.jpg";
import resume from './resume.pdf'
export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
          <h3>Hey there, 👋</h3>
          I'm <span> Zubair </span>,<span>a Senior Android Developer</span> with <span> 3 years of experience </span>   
   building fast, scalable, and high-quality Android applications using <span>Kotlin</span>,<span> Java</span>,<span> Jetpack</span>,<span> MVVM</span>, and <span>Clean Architecture</span>.
 <br/>      <br/> <br/> I <span>specialize</span> in native Android development with a strong command over<span> Room</span>,<span> WorkManager</span>,<span> Navigation Components</span>,<span> XML layouts</span>, and
<span> Dagger Hilt</span>. I’ve built and optimized multiple production-level apps, led development teams, mentored junior engineers, and delivered smooth, <span>user-focused experiences</span> using <span>REST APIs</span> and <span>Firebase</span>.
<br/>       <br/> <br/> I’m passionate about clean code, performance optimization, modern <span>UI/UX</span>, and solving real-world problems through mobile technology. 





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
