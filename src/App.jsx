import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import ContactForm from "./components/ContactForm";
import AnimatedCursor from "react-animated-cursor";
import Experience from "./components/Experience";


const projects = [
  {
    id: "project-1",
    className: "odd",
    title: "Code Lang Assistant Admin App",
    desc: "The admin app allows administrators to add new languages, chapters, and content, create quizzes for each chapter, and respond to user feedback.",
    link: "https://github.com/ZubairShafi-dev/LanguageLearningAdminApp",
    projectImg: "/LLA ADMIN APP-1.png", 
  },
  {
    id: "project-2",
    title: "Code Lang Assistant User App",
    desc: "The admin app allows administrators to add new languages, chapters, and content, create quizzes for each chapter, and respond to user feedback.",
    link: "http://github.com/ZubairShafi-dev/LanguageLearner",
    projectImg: "/LLA-1.png", 
  },
  {
    id: "project-3",
    className: "odd",
    title: "Cricdex App",
    desc: "CricDex is your go-to live cricket scoring app, offering real-time updates, ball-by-ball commentary, and comprehensive match coverage for all major tournaments.",
    link: "https://github.com/Deepajha14/Rog-Free",
    deployedLink: "https://github.com/ZubairShafi-dev/ScooringBook",
    projectImg: "/Cricdex App-1.png", 
  },
  {
    id: "project-4",
    title: "Grievance App",
    desc: "Grievance is a user-friendly complaint resolution app designed to empower individuals to voice their concerns and seek timely solutions.",
    link: "https://github.com/HafsaNoor2001/Grievance_app",
    deployedLink: "https://deepajha14.github.io/Rog-Free/",
    projectImg: "/Grievence-1.png", 
  },
  {
    id: "project-5",
    className: "odd",
    title: "TOURIST APP",
    desc: "The Tourist Management System consists of two applications: Admin and User. The Admin app allows administrators to manage tourism operations efficiently.",
    link: "https://github.com/ZubairShafi-dev/Tourist_User",
    projectImg:"/TOURIST APP-1.png", 
  },
];

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{ background: "#ffffff", mixBlendMode: "exclusion" }}
        innerStyle={{ backgroundColor: "#F94892" }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />

        {/* Mapping through projects array */}
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            className={project.className}
            projectTitle={project.title}
            projectDesc={project.desc}
            projectLink={project.link}
            deployedProjectLink={project.deployedLink}
            projectImg={project.projectImg}
          />
        ))}

        <AboutMe id="about" />
        <SkillCard id="skills" />
        <Experience />
        <ContactForm id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;
