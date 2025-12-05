import React from 'react'
import "./SkillCardStyle.css";
import { CgCPlusPlus } from "react-icons/cg";
import {DiGit} from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { SiReact,  SiFigma, SiJira,SiAndroidstudio,SiMysql, SiFirebase } from "react-icons/si";
import {TbBrandCss3, TbBrandJavascript, TbBrandHtml5} from "react-icons/tb";
import {IoLogoWindows} from "react-icons/io"
import { SiKotlin, SiFlutter } from "react-icons/si";
export default function SkillCard({id}) {
  return (
    <>
        <div className="skill-container" id = {id}>
          <div className="skill-header">My Skills</div>
          <div className="skill-box">
            <h2>Languages</h2>
            <div className="skillset">
              <abbr title='C++'><CgCPlusPlus className='techLogo'/></abbr>
              <abbr title='HTML 5'><TbBrandHtml5 className='techLogo'/></abbr>
              <abbr title='CSS'><TbBrandCss3 className='techLogo'/></abbr>
              <abbr title='JavaScript'><TbBrandJavascript className='techLogo'/></abbr>
              <abbr title='Java'><FaJava className='techLogo'/></abbr>
              <abbr title='Kotlin'><SiKotlin className='techLogo'/></abbr>
              <abbr title='flutter'><SiFlutter className='techLogo'/></abbr>
      
            </div>                     
          </div>
          <div className="skill-box">
            <h2>Libraries and Frameworks</h2>
            <div className="skillset">
              <abbr title='ReactJS'><SiReact className='techLogo'/></abbr>
        
              <abbr title='Git/Github'><DiGit className='techLogo'/></abbr>

  
            </div>            
          </div>
          <div className="skill-box">
            <h2>Tools & Systems</h2>
            <div className="skillset">
              <abbr title='Visual Studio Code'><DiVisualstudio className='techLogo'/></abbr>
              <abbr title='Windows'><IoLogoWindows className='techLogo'/></abbr>
              <abbr title='Figma'><SiFigma className='techLogo'/></abbr>
              <abbr title='Jira'><SiJira className='techLogo'/></abbr>
              <abbr title='Android Studio'><SiAndroidstudio className='techLogo'/></abbr>
            </div>            
          </div>
          <div className="skill-box">
            <h2>DataBase</h2>
            <div className="skillset">
            <abbr title='MySQL'><SiMysql className='techLogo'/></abbr>
            <abbr title='Firebase'><SiFirebase className='techLogo'/></abbr>
            </div>            
          </div>
        </div>
    </>

  )
}
